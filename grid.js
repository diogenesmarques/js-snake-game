const gridSize = 21;

export const getRandomGridPos = () => {
    return ({
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1,
    })
} 

export const outsideGrid = (pos) => {
    if(pos.x > 21 || pos.y > 21){return true}
    if(pos.x < 1 || pos.y < 1){return true}
    return false;
}