//Esta es la importancion general de la libreria , es poco comun
import { Observable, Observer } from 'rxjs';

/*
El observer es la entidad que va a recibir y manejar los datos 
transmitidos por un observable.
El observer siempre tiene esta estructura, y el valor es una susbcripcion
CUADO EL OBSERVABLE EJECUTA EL METODO COMPLETE AUTOMATICAMENTE LOS
OBSERVERS QUE ESTAN SUSCRITOS SERAN DESUSCRIBIDOS
*/
const observer: Observer <string>={
    next: valor=> console.log('Valor del next: ',valor),
    error: error=> console.warn('Error emitido: ', error),
    complete: ()=> console.info('Se completo el observable')
}

//Un observable es una entidad el cual puede emitier diferentes tipos de 
//datos
//El simbolo de $ es una practica
const obs$ = new Observable<string>( subs =>{

subs.next('Valores emitodos');
subs.next('Valores emitodos');
subs.next('Valores emitodos');
subs.next('Valores emitodos');
subs.next('Valores emitodos');


subs.complete();

subs.next('Se cierra el flujo de datos, pero sigue vivo el observable');


});

/*
El metodo susbcribe del observable recibe un observer, y el observer,
puede ser definido previamente o manejoamos los callbacks next, error,complete
*/
obs$.subscribe( observer );

/*
Nos podemos suscribir a un observavle por medio de un observador , que 
sera el encargado de recibir y transformar los valores recibidos por el 
observable
*/
// obs$.subscribe( 
//     valor =>{
//         console.log(valor);
//     },
//     err =>{
//         console.warn(err);
//     },
//     ()=>{

//         console.log('Se completo');
//     }
//  );


console.log('Hola Mundo!');