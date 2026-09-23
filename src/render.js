import { Gameboard } from "./board.js";


export function renderBoard(gameboard, container) {
    container.innerHTML = "";
    container.classList.add("board-grid");
    container.style.setProperty('--size', gameboard.size);

    for (let row = 0; row < gameboard.size; row++) {
        for (let col = 0; col < gameboard.size; col++) {
            const cell = gameboard.board[row][col];
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.dataset.row = row;
            cellDiv.dataset.col = col;

            if (cell.attacked && cell.ship) cellDiv.classList.add("hit");
            else if (cell.attacked) cellDiv.classList.add("miss");

            container.appendChild(cellDiv);
        };
    };
};

export function boardListener(container, getGameboard, cellClick) {
    container.addEventListener("click", (e) => {
        if (!e.target.classList.contains("cell")) return;

        const gameboard = getGameboard();
        if (gameboard.allShipsSunk()) return;
        const row = Number(e.target.dataset.row);
        const col = Number(e.target.dataset.col);
        cellClick(row, col);
    });
};