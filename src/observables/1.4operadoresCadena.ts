import {map, filter} from 'rxjs/operators';
import { fromEvent } from 'rxjs';


const teclado$= fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    
    //Se pueden agregar cualquier cantidad de operadores
    //En orden secuencial se van aplicacion los operadores
    map( data => data.key),
    filter( (key, index) =>{
        console.log('Filtro: ',index,' ', key);
    return key=== 'Enter'    
    })
);

teclado$.subscribe( valor => console.log('Puros espacios',valor));