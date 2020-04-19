import { fromEvent, Observer } from 'rxjs';

//Es posible crear observer especificos para un tipo de observable
//Le implementamos la interfaz de lo que emite para que el observer
//Sepa que tipo de valor sera emitido y poder acceder a los atributos y metodos
const observer: Observer <MouseEvent>={
next: ({x,y})=> console.log('Evento click x: ', x, ' y: ', y),
error: error=> console.log(error),
complete: ()=> console.log('Se completo')

};

//Es buena practica definir que tipo de datos va a emitir el observable 
const clicks$ = fromEvent<MouseEvent>( document, 'click');

const teclado$ = fromEvent<KeyboardEvent>( document, 'keyup');


//El observable y el observer tienen que ser del mismo tipo de dato
clicks$.subscribe( 
observer
);

//De esta forma se puede destructurar el objeto que viene del evento para poder
//"Filtrar" los datos emitidos
teclado$.subscribe( ({key, keyCode}) =>{
console.log('Evento Teclado,  tecla: ',key,
' Codigo: ', keyCode);
}
);