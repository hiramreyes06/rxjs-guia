

//Esta es la importancion general de la libreria , es poco comun
import { Observable, Observer } from 'rxjs';


const observer: Observer <any>={
    next: valor=> console.log('Valor del next: ',valor),
    error: error=> console.warn('Error emitido: ', error),
    complete: ()=> console.info('Se completo el observable')
}



const intervalo$ = new Observable<string>( suscripcion=>{

let contador :number=1;

//Para poder cancelar o terminar el intervalor para que no consuma memoria
//tenemos que crear una variable que guarde su referencia y puntero
const intervalo= setInterval(()=>{

    
suscripcion.next('segundo: '+ contador);
contador++;

},1000);


const terminar= setInterval( ()=>{
    suscripcion.complete();
},2500)

//Cuando se ejecuta el metodo complete el observavle retornar una funcion
//Automaticamente cuando nos desuscribamos del observable podemos retornar
//un callback, en este ejemplo limpia el interval
return ()=>{
    clearInterval(intervalo);
    clearInterval(terminar)
    console.log('Intervalo destruido');
}

} );

//El metodo suscribe retorna una suscribicion de un observable, ocupamos
//la referencia para cancelar la suscripcion
const suscripcion1 = intervalo$.subscribe( observer );

/*
Por cada suscripcion que hagamos se creara una instancea del observable 
y recibiran los datos independientemente 
*/
// const suscripcion2 = intervalo$.subscribe( observer );
// const suscripcion3 = intervalo$.subscribe( observer );


//Se pueden añadir mas suscripciones a un observer, todo con el fin de
//poder agruparlo mas facilmente ocupando solo una variable 

suscripcion1.add(intervalo$.subscribe( observer ))
.add(intervalo$.subscribe( observer ));


setInterval(()=>{

    /*
    Por cada observador tiene un metodo unsuscribe que sirbe para
    terminar la ejecucion del observable
    
    */
   //Este observer tiene añadido mas observers, del cual al ejecutar el 
   //metodo unsuscribe automaticamente desuscribe los demas observers
   suscripcion1.unsubscribe();


   //Se puede desuscribir manualmente uno por uno de los osbervadores
//    suscripcion2.unsubscribe();

//    suscripcion3.unsubscribe();
   console.log('Nos desuscribimos1 del observable'); 

},3000 );