import { map } from 'rxjs/operators';
import { Observer, fromEvent } from 'rxjs';


const observer: Observer<any> ={
    next : valor => console.log(valor),
    error: err => console.log(err),
    complete: ()=> console.log('El observador se completo')
}


const telcado$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( valor => valor.key)
);

//Se puede crear un nuevo obersvable apartir de otro observable que sera filtrado
//con el pipe map
// const filtro = telcado$.pipe(
//     map( valor => valor.key)
// );

 const susbscripcion= telcado$.subscribe( valor => console.log('char: ', valor) );



 