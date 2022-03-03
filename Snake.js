import{getdirection} from './input.js'
export const speed=5
let newSegments=0;

const snakebody=[{x:11,y:11}]
export function update(){
  addSegments()
/*for(let i=snakebody.length-2;i>=0;i--){
  snakebody[i+1]={...snakebody[i]}
}
 snakebody[0].x+=0
 snakebody[0].y+=-1*/
 let first=snakebody[0]
 snakebody.unshift({...first})
 snakebody.pop()
 snakebody[0].x+=getdirection().x
 snakebody[0].y+=getdirection().y
 
}

export function draw(gameboard){

  snakebody.forEach(segment=>{
   const element=document.createElement('div') 
   if(snakebody.indexOf(segment)==0){
     element.classList.add('head')
   }
   element.classList.add("snake")
   element.style.gridRowStart=segment.y
   element.style.gridColumnStart=segment.x
   gameboard.appendChild(element)
  })
}

export function expandSnake(amount){
  newSegments+=amount
}

export function onSnake(position, {ignore=false}={}){
  
  return snakebody.some((segment,index)=>{
    if(ignore && index==0) return false
    return equalPositions(position,segment)
  })
}

function equalPositions(position1,position2){
  if(position1.x==position2.x && position1.y==position2.y){return true}
  else {return false}
}
function addSegments(){
  for(let i=0;i<newSegments;i++){
    snakebody.push({...snakebody[snakebody.length-1]})
  }
  newSegments=0
}

export function getsnakehead(){
  return snakebody[0]
}

export function snakeintersection(){
  return onSnake(snakebody[0],{ignore:true})
}