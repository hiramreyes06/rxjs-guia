import {map, filter} from 'rxjs/operators';
import { fromEvent } from 'rxjs';


const teclado$= fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( data => data.key),
    filter( (key, index) =>{
        console.log('Filtro: ',index,' ', key);
    return key=== 'Enter'    
    })
);

teclado$.subscribe( valor => console.log('Puros espacios',valor));