

/*var numero = ('Introdueix un numero: ')
prompt (numero)
if (( numero % 3 ) == 0){
    alert(numero + ' es multiple de 3');
}else if ((numero % 7) == 0){
    alert(numero + ' es multiple de 7');
}
else{
    alert('El numero no es multiple de 3 ni de 7');
}*/

/*ex2 
var x = 25
var y =60
var preu

x=(x>=10 && x<=50) ? console.log("EL numero esta en el rang")
                   : console.log("el numero no esta en el rang")



y=(y>=10 && y<=50) ? console.log("esta en el rang")
                   :console.log("no esta en el rang ");*/


                  /* var a = 7

                   switch(true){
                       case (a<5):
                           console.log("Molt bé senyor, has suspès")
                       break
                   
                       case (a>=5 && a<6):
                           console.log("Molt bé senyor, un suficient")
                       break
                   
                       case (a>=6 && a<7):
                           console.log("Molt bé senyor, un bé")
                           break
                   
                       case (a>=7 && a<9):
                           console.log("Molt bé senyor, un notable")
                       break
                   
                       case (a>=9 && a<10):
                           console.log("Molt bé senyor, un excel·lent")
                       break
                   }*/

                   
                   
                   
                  /* var a;
                   a=parseInt(prompt("Introdueix numero: "));
                   sumador =0;
                   constante=1
                   contador=0
                   sumador2=2
                   acumulador=0
                   
                   while(a>=acumulador){
                       sumador= sumador + 1
                       contador=sumador2+constante
                       constante=0
                       sumador2++
                       acumulador+=contador

                   
                   }
                   console.log(sumador);*/

                   
                   /* ex5 
                   
                   var regex = /(\d+)/g;

                    var variable1=prompt("introdueix frase");
                    console.log (variable1.match(regex));

                    var n=0;
                    for(i=0; i<variable1.match(regex).length; i++){

                    n+=Number(variable1.match(regex)[i]);

                    }
                     console.log(n);*/
                   
                  
                  
                  
                  
                  
                  
                   /* ex6 var a;
                   var b;
                   var c;
                       a=parseInt(prompt("Introdueix el primer valor: "));
                       b=parseInt(prompt("Introdueix el segon valor: "));
                       c=parseInt(prompt("Introdueix el tercer valor: "));
                       if ( a>=b && a>=c){
                           if(b>c)
                           console.log(a,b,c)
                       else
                           console.log(a,c,b)
                       }
                       if(b>=a && b>=c){
                           if (a>c)
                           console.log(b,a,c)}*/

                    



                       /* var regex = /(\d+)/g;

                        var variable1=prompt("introdueix frase");
                        console.log (variable1.match(regex));

                        var n=0;
                        for(i=0; i<variable1.match(regex).length; i++){

                            n+=Number(variable1.match(regex)[i]);

                        }
                        console.log(n);*/


                       /* var num = prompt('Introdueix numero que vulgui ')
                        var contador = 0

                        while (contador<num){
                        contador++
                        console.log(contador);
                        
                        console.log("El número és senar");
                        contador++
                        console.log(contador++);
                        console.log("El número és parell");
                        }*/



                        
                      /* var fileres =5
                            for(var i = 0; i < fileres; i++){
                                let fileres = ''
                                for (var j = 0; j < i + 1 ; j++){
                                    fileres=fileres + '*'   
                                }   
                            console.log(fileres);
                            }*/

/*
                            var contador1 = 0;
                            var multiple3 = 0;
                            var multiple5 = 0;
                            
                            do {
                                if (contador1 % 3 == 0) {
                                    multiple3 = contador1 + multiple3;
                                    console.log(contador1);
                                }
                                else if (contador1 % 5 == 0) {
                                    multiple5 = contador1 + multiple5;
                                    console.log(contador1);
                                }
                                contador1++;
                                
                            } while (contador1 <= 1000);
                            
                            console.log("suma total: " +multiple3+multiple5 + " unitats");*/
                     


                     /*   var files=5
                        var cont = 0

                        files:
                        for(var i = 0; i < files; i++){
                            let files = ''
                            for (var j = 0; j < i + 1 ; j++){
                                files=files + '* ' 
                            }   
                            cont++
                            if (cont % 2 != 0)
                            console.log(files)
                            continue files
                            
                        }*/

                        
                        
                      var numeroParell
                        numeroParell=parseInt(prompt("quantes xifres te el seu numero parell?: "));
                        
                        
                        var arrayNum= new Array(numeroParell)

                        for(var i=0; i<arrayNum.length; i++){
                            X=parseInt(prompt("introdueix xifra numero" + i + "del numero parell" ));
                        
                            arrayNum[i]=X


                        }
                        const revertit = arrayNum.reverse();
                        
                            console.log(revertit);  
                        
                        
                                        

                        





                