<<<<<<< HEAD
import {expandPlayer, playerIsOnFruit} from "./player.js";
import {getRandomGridPos} from "./grid.js";

const expansionRate = 2;
let fruit = getRandomFruitPos();

export const update = () => {
    if(playerIsOnFruit(fruit, {ignoreHead: false})){
        expandPlayer(expansionRate);
        fruit = getRandomFruitPos();
    }
}

export const render = (board) => {
    const fruitElement = document.createElement("div");
    fruitElement.style.gridRowStart = fruit.y;
    fruitElement.style.gridColumnStart = fruit.x;
    fruitElement.classList.add("fruit");
    board.appendChild(fruitElement);
}

function getRandomFruitPos(){
    let newFruitPos;
    while(newFruitPos == null || playerIsOnFruit(newFruitPos)){
        newFruitPos = getRandomGridPos();
    }
    return newFruitPos;
=======
import {expandPlayer, playerIsOnFruit} from "./player.js";
import {getRandomGridPos} from "./grid.js";

const expansionRate = 2;
let fruit = getRandomFruitPos();

export const update = () => {
    if(playerIsOnFruit(fruit, {ignoreHead: false})){
        expandPlayer(expansionRate);
        fruit = getRandomFruitPos();
    }
}

export const render = (board) => {
    const fruitElement = document.createElement("div");
    fruitElement.style.gridRowStart = fruit.y;
    fruitElement.style.gridColumnStart = fruit.x;
    fruitElement.classList.add("fruit");
    board.appendChild(fruitElement);
}

function getRandomFruitPos(){
    let newFruitPos;
    while(newFruitPos == null || playerIsOnFruit(newFruitPos)){
        newFruitPos = getRandomGridPos();
    }
    return newFruitPos;
>>>>>>> 22a1be6ff14258c85bd4f5d0d25f756e0c797087
}