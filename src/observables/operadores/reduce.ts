import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";


 const numeros =[1,2,3,4,5];

//Reduce necesita como argumento una fucion que se encarga de sumar
//El acumulador

 const totalReducer =(acumulador:number, valorActual:number)=> acumulador+valorActual;

//Los arreglos tienen un metodo reduce, que sirve para hacer una sumatoria
//De n cantidad de numeros de un arreglo
//El segundo parametro es para especificar el numero inicial
const total = numeros.reduce( totalReducer, 0);


console.log('Total arreglo: ',total);


interval(1000).pipe(

    tap( console.log ),

//El pipe take, sirve para que el observable se repeita n numero de veces
//para ser completado
take(6),

//El operador reduce sirve para hacer sumatorias de n cantindad de numeros
//El primer parametro recibe un callback o la definicion de una funcion
//encargada de sumar valores
//El segundo paramatro es para especificar de donde empieza la sumatoria
reduce( (acumulador,valorActual) => acumulador + valorActual ,0)


//El operador reduce solo emite el valor hasta que se completa
).subscribe( 
    valor => console.log('Valor : ',valor),
    err => console.log(err),
    ()=> console.log('Se completo')
);