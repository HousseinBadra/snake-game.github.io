let food=getrandomfood()

import {onSnake,expandSnake} from './Snake.js'

export const expansion=5;
export function updatefood(){
  if(onSnake(food)){
    expandSnake(expansion)
    food=getrandomfood()
  }

}

export function drawfood(gameboard){
  
   const foodelement=document.createElement('div') 
   foodelement.classList.add("food")
   foodelement.style.gridRowStart=food.y
   foodelement.style.gridColumnStart=food.x
   gameboard.appendChild(foodelement)
  
}

function getrandomfood(){
  let newfoodposition
  while(!newfoodposition || onSnake(newfoodposition)){
    newfoodposition=getgrid()
  }
  return newfoodposition
}

function getgrid(){
  let j=Math.floor(Math.random()*21)+1
  let k=Math.floor(Math.random()*21)+1
  return {x:j,y:k}
}
