import { create } from "./cellManager";

export const addField = (cells, handleRestart) => {
  const occupiedCoords = new Set();

  cells.forEach((cell) => {
    occupiedCoords.add(cell.x * 4 + cell.y);
  });

  if(occupiedCoords.size === 16) {
    return
    handleRestart()
  }

  let x,y
  let startSize = occupiedCoords.size
  do{
    x = Math.floor(Math.random() * 3.9)
    y = Math.floor(Math.random() * 3.9)

    const sum =  x* 4 + y
    occupiedCoords.add(sum)
  }while(startSize === occupiedCoords.size)  

  return [...cells, create(x, y, 2)]
};
