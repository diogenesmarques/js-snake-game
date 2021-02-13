import { getInputDirection } from "./inputs.js";

export const playerSpeed = 5;
let newPixels = 0;
const playerBody = [
    { x: 11, y: 11 }
];

export const update = () => {
    addPixels();
    const direction = getInputDirection();
    for(let i = playerBody.length - 2; i >= 0; i--){
        playerBody[i + 1] = {...playerBody[i]}
    }

    playerBody[0].x += direction.x;
    playerBody[0].y += direction.y;
}

export const render = (board) => {
    playerBody.forEach(pixel => {
        const playerElement = document.createElement("div");
        playerElement.style.gridRowStart = pixel.y;
        playerElement.style.gridColumnStart = pixel.x;
        playerElement.classList.add("player");
        board.appendChild(playerElement);
    })
}

const arePositionsEqual = (pos1, pos2) => {
    return pos1.x == pos2.x && pos1.y == pos2.y
}

export const expandPlayer = (rate) => {
    newPixels += rate;
}

export function playerIsOnFruit(position, { ignoreHead = false } = {}) {
    return playerBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return arePositionsEqual(segment, position)
    })
  }

const addPixels = () => {
    for(let i = 0; i < newPixels; i++){
        playerBody.push({...playerBody[playerBody.length - 1]})
    }

    newPixels = 0;
}

export const getPlayerHead = () => {
    return playerBody[0];
}

export const playerIntersect = () => {
    return playerIsOnFruit(playerBody[0], {ignoreHead: true});
}