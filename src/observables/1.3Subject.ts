import { Observable, Observer, Subject } from 'rxjs';

const observer : Observer<number> ={
    next: valor => console.log('Observer personal' ,valor),
    error: error =>console.log(error),
    complete : () => console.log('Se completo')
}


const intervalo$= new Observable<number>( suscriber =>{

const interval = setInterval( () => {
    
    /*
    Cuando la data es emitida internamente por el mismo observable se le conoce 
    como COLD observable
    */
    suscriber.next(Math.random()*100)
}, 1000);

return () =>{

    clearInterval( interval);
    console.log('Se cancelo el observable y intervalo principal');
}


});


/*
Un subject es un tipo de Observable, el cual tiene casteo multiple, con el 
fin de centralizar el flujo de datos poder suscribirse al mismo valor que 
genere internamente 'COLD observable' o extermanemte 'HOT observab;e'.
Ademas tambien como argumento le podemos enviar un observer o un SUBJECT tambien
Tiene los callbacks next, error y complete como los observables

*/
const subject$= new Subject<number>();


/*
El metodo suscribe del observable puede recibir un subject
Con el objetivo de centralizar el flujo de datos del obsverbable
Es muy importante poder desuscribirnos del observable al que le enzalamos
un subject
*/
 const subscriptionSubject= intervalo$.subscribe( subject$ );

//al suscribirnos al subject recibimos el mismo flujo de datos por cada
//subscripcion
const sub1= subject$.subscribe( observer );

const sub2= subject$.subscribe( observer );

setInterval( () =>{

    /*
    Los subject son utiles para poder emitir o añadir datos al flujo del
    subject en ejecucion.
    Cuando se emite la data de esta forma externa del observable se le conoce como
    Hot observable
     */
    subject$.next(10);


    //Asi solo nos desuscribimos del subject pero al observable al que esta
    //enlazado seguira ejecutandose
    subject$.complete();

    /*
    Es importante que podamos desuscribirnos del observable en el que esta
    enlazado el subject
    */
    subscriptionSubject.unsubscribe();

   
  
},4000);