

var numero = ('Introdueix un numero: ')
prompt (numero)
if (( numero % 3 ) == 0){
    alert(numero + ' es multiple de 3');
}else if ((numero % 7) == 0){
    alert(numero + ' es multiple de 7');
}
else{
    alert('El numero no es multiple de 3 ni de 7');
}
