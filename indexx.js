
/*ex1
function fnomCognoms(nom='Stan',Cognom=' Sevdalinov'){
console.log('Hola '+ nom +Cognom)}
fnomCognoms();*/

/*ex2function fnom(num=10){
console.log(typeof num)}
fnom();*/

/*ex3function fdata(data= new Date()){
    console.log(data)}
    //fdata()*/

/*ex4function ffuncio(){
    var x = 'bondia'
    console.log(x)
}
console.log(x);*/
 /*function fvocals(paraula='hola'){
    var nombreVocals = paraula.match(/[aeiou]/gi).length
    console.log(nombreVocals);
}
fvocals();*/


/*function parametres(a,b,c=5){
    return a+b+c

} console.log(parametres(1,2));*/

/*ex7function ex7(){
    //cridar funcio ex3>
    fdata()

    //retornar resultat ex6
    return parametres(1,2,3)
}
    console.log(ex7())*/

/*function ex8(X,Y){

    if(X==30 || Y==30 || X+Y==30){
        return(true)
    }
}
console.log(ex8(30,20))*/


/*let x,y;
x=30
y=20


let resultat = function(x,y){
if(x==30 || y==30 || x+y==30){
    return true
}}
console.log(resultat(x,y));*/ 

/*let variable = (x,y) =>{
    if(x===y)  return true
    else return false}
    console.log(variable(5,6));*/

/*let variable = (x) =>Math.sqrt(x).toFixed(2)
console.log(variable(5))*/

/*let variable = (x) => x.toLowerCase()
console.log(variable('BONDIA'))*/

/*let variable = (x,y) => {
    if(x!=null && y!=null)
    return('els dos no son null')
    if(x==null && y==null){
        return('els dos son null')
    }
    if (x!=null) 
    return (x)
    if (y!=null)
    return(y)
 }
console.log(variable(null,null));*/



/*var posicio = (x,y) => {

    return (x.length-x.indexOf(y))
}
console.log(posicio('Hola senyor Ramon','senyor'));

var dividir = (x,y) => {

    return y.substr(x,y.length)
}

console.log(dividir(posicio('Hola senyor Ramon','senyor'),'Hola senyor Ramon'))*/




   var equacio1 = (x) => x + x + x

   console.log(mite(4));


   var equacio2 = (p, n, r, t) => p * Math.pow(1 + (r / n), n * t)

   console.log(equacio2 (1,1,1,2));


















