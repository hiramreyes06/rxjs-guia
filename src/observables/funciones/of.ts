
import { of } from 'rxjs';


/*
La funcion of de rxjs sirve para poder emitir una n cantidad de datos
que estan definidos o estructurados o es una secuencia

*/

//const observable$ = of(1,2,3,4,5,6);

//El operador spread... sirve para que de un arreglo se desintegre individualmente
//const observable$ = of(...[1,2,3,4,5,6],666,222,333);

//Si el observable of no esta definido se puede emitir cualquier tipo de dato
const observable$ = of<any>( [5,6],...[1,2,3,4,5,6], 5 , {a:1, b:2}, true,
    Promise.resolve(true) );


 observable$.subscribe( 
    next=> console.log('Valor: ', next),
    null,
    ()=>{
        console.log('Se completo el observable');
    }
);