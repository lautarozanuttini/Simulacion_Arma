var cartucho = 6

document.getElementById("disparar").onclick = function (){
   if (cartucho >= 6){
    cartucho --;
   }else{
    document.write("no hay mas balas")
   }

}
document.getElementById("mostrar").innerHTML = cartucho