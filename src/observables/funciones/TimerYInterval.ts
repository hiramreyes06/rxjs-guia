
import { interval, timer} from 'rxjs';

const observer:any={
next : valor => console.log('Next: ', valor),
complete : ()=>{
console.log('Se completo el observable');
}
};


//Asi se crea un intervalo  el cual se le agrega los milisegundos
//que va a durar cada intervalo hasta que nos desuscribamos
const intervalo = interval(1000);

//Con un solo argumento es el tiempo que durara y se completara el observable
//puede ser milisegundos o un date()

//Con El primer argumento es para los segundos despues de ejecutarse  
//seguira con el intervalor la 2nda cantidad 
// const timer$ = timer(10000,2500);

//De esta forma el timer empiza en una fecha exacta con horas minutos y segundos
const fecha= new Date();

fecha.setSeconds( fecha.getSeconds()+5);


const timer$ = timer(fecha);

timer$.subscribe(
   observer
)

//intervalo.subscribe( observer );