import { map } from 'rxjs/operators';
import { Observer, fromEvent } from 'rxjs';


const observer: Observer<any> ={
    next : valor => console.log(valor),
    error: err => console.log(err),
    complete: ()=> console.log('El observador se completo')
}


const telcado$ = fromEvent<KeyboardEvent>( document, 'click');

const filtro = telcado$.pipe(
    map( valor => valor.char)
);

filtro.subscribe( observer );


