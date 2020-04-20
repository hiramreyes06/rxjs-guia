import {  mapTo } from 'rxjs/operators';
import { Observer, fromEvent } from 'rxjs';


const observer: Observer<any> ={
    next : valor => console.log(valor),
    error: err => console.log(err),
    complete: ()=> console.log('El observador se completo')
}


const telcado$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(

    /*
    El operador mapTo sirve para emitir algun string en especifivo cunado
    se complete el observable
    */
    mapTo('Todo correcto')
);



 const susbscripcion=telcado$.subscribe( valor => console.log('char: ', valor) );