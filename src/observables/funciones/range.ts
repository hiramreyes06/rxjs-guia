
import { range, asyncScheduler } from 'rxjs';

/*
El range es una funcion  sincrona que crea una sentencia de numeros que por defecto
empieza en 0 y es opcional cambiarlo, y el otro argumento es la cantidad de
veces que se va a repetir.
*/

//para que sea asincrona se le agrega el asyncScheduler
const rango$ = range(-5,10 , asyncScheduler);


console.log('Inicio de la secuencia');
const subs= rango$.subscribe( 
    valor => console.log(valor)
 );

console.log('Fin de la secuencia');