/*function sfondo(color){
    document.bgColor=color;
}*/ 


 /*document.onkeydown=function(e){
     document.getElementById("lletra").innerHTML=e.key;

 }
 document.onkeyup=function(e){
    document.getElementById("lletra").innerHTML=" "

}*/


window.onload=function(){
    var contador=0;
    document.getElementById("boton").onclick=function(){
        contador++;
        document.getElementById("mostra").innerHTML=contador;
    }
}

