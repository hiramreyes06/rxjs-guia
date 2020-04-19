
import { asyncScheduler, asapScheduler } from 'rxjs';


// setTimeout(() => {
// },1000);

// setInterval(()=>{

// },1200);


const saludar= nombre => console.log('Hola ', nombre);

//Los asyncscheduler no crean observables retornan una subscripcion
//Son usados como los setTimout y setInterval pero retornan suscripciones
//Con el uso de funciones flecha
 const subs= asyncScheduler.schedule( saludar , 2000, 'Hiram');

 //Cuando usamos una funcion normal podemos usar el contexto de this.
 //Ademas podemos recibir y manipular el estado recibido
 //Algo asi como recursividad
//  const subs2=
 asapScheduler.schedule(function(state){

    console.log('State: ',state);

    state.a++;

    if(state.a === state.b){
        console.log('Se termino');
        //Asi se puede desuscribirse el mismo
        this.unsubscribe();
    }

    /*
     Esto se maneja como recursividad, primero va el estado con las propiedades
    y despues cada cuando se va a repetir
    */
    this.schedule( state , 1000)

    //Primero va el intervalo del tiempo en el que empezara
    //El segundo parametro es el estado, puede ser un numero, arreglo o objeto
 },3000,{a:0, b:10});
