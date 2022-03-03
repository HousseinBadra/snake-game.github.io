const size=21;
export function outsidegrid(position){
  if(position.x>21 || position.x<1 ||
  position.y>21 || position.y<1){
    return true
  }
  else {return false}
}
