import { update as updatesnake, draw as drawsnake,getsnakehead,snakeintersection,speed} from './Snake.js'
import {updatefood,drawfood} from './food.js'
import {outsidegrid} from './grid.js'
let lastRender=0;
let gameover=false
let gameover2=false
const gameboard=document.querySelector(".board")
function main(currenttime){
  if(gameover ||gameover2){
    if(confirm('You lose press ok to restart')){
      window.location='/'
      
    }
    return
  }
  window.requestAnimationFrame(main)
  const time=(currenttime-lastRender)/1000
  if (time<1/speed )return
  lastRender=currenttime
  
  update()
  draw()
}
window.requestAnimationFrame(main)
function update(){
  updatesnake()
  updatefood()
  checkdeath()
}
function draw(){
  gameboard.innerHTML=""
  drawsnake(gameboard)
  drawfood(gameboard)
}

function checkdeath(){
   gameover= outsidegrid(getsnakehead()) 
   gameover2=snakeintersection()
  
  
}

