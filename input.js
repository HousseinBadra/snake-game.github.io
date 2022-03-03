let direction={x:0,y:0}
let snake=[{x:11,y:11}]

function directionn(){
  const moveup=document.querySelector(".moveup")
moveup.addEventListener("click",function(){
  if(direction.y){return}
 else{ direction={x:0,y:-1} }    
  })
  const movedown=document.querySelector(".movedown")
movedown.addEventListener("click",function(){
  if(direction.y){return}
  else{direction={x:0,y:1}}                                  })
  const moveright=document.querySelector(".moveright")
 moveright.addEventListener("click",function(){
   if(direction.x){return}
   else{
  direction={x:1,y:0} }                                    })
  let moveleft=document.querySelector(".moveleft")
  moveleft.addEventListener("click",()=>{
    if(direction.x){return}
    else{
    direction={x:-1,y:0}}
    
  })
 }
directionn()
 export function getdirection(){
   return direction
 }
 
 
 