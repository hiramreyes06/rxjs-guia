import { map, pluck } from 'rxjs/operators';
import { Observer, fromEvent } from 'rxjs';


const observer: Observer<any> ={
    next : valor => console.log(valor),
    error: err => console.log(err),
    complete: ()=> console.log('El observador se completo')
}


const telcado$ = fromEvent<KeyboardEvent>( document, 'keyup');

const tecladoPluck$= telcado$.pipe(

    /*
    EL operador pluck sirve para extraer un valor en especifico de alguna
    propiedad de la data recibida para que solo sea emitida, con la condicion
    de que debe ser mismo nombre en string
    */
    // pluck('key')

    //De esta forma extramos propiedades de objetos anidados, en lugar de . son ,
    pluck('target', 'baseURI')

);

 const susbscripcion= tecladoPluck$.subscribe( valor => console.log('char: ', valor) );
