import {playerSpeed, update as updatePlayer, render as renderPlayer, getPlayerHead, playerIntersect} from "./player.js";
import {update as updateFruits, render as renderFruits} from "./fruits.js";
import {outsideGrid} from "./grid.js";

const board = document.getElementById("board");
let lastRenderTime = 0;
let gameOver = false;

const main = (currentTime) => {
    if(gameOver == true){
        if(confirm("You lost. Press ok to try again.")){
            location.reload();
        }
        return;
    }
    window.requestAnimationFrame(main);
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / playerSpeed) return;
    lastRenderTime = currentTime;

    update();
    render();
}

window.requestAnimationFrame(main);

const checkDeath = () => {
    gameOver = outsideGrid(getPlayerHead()) || playerIntersect()
}

const update = () => {
    updatePlayer();
    updateFruits();
    checkDeath();
}

const render = () => {
    board.innerHTML = "";
    renderPlayer(board);
    renderFruits(board);
}




