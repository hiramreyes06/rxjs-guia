import { map } from 'rxjs/operators';
import { Observer, fromEvent } from 'rxjs';


const observer: Observer<any> ={
    next : valor => console.log(valor),
    error: err => console.log(err),
    complete: ()=> console.log('El observador se completo')
}


/*
Los observables tienen un metodo pipe, que sirve para implementar y usar
los operadores de rxjs o personalizados que transformaran o filtraran la data
*/
const telcado$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(

    /*
    El operador map sirve para especificar con que propiedades
    quiero manipular sin condicion alguna
    */
   
    map( valor => valor.key)
);

//Se puede crear un nuevo obersvable apartir de otro observable que sera filtrado
//con el pipe map
// const filtro = telcado$.pipe(
//     map( valor => valor.key)
// );

 const susbscripcion= telcado$.subscribe( valor => console.log('char: ', valor) );


