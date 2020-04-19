import { of, from } from 'rxjs';


/*
 of = toma argumentos y genera una secuencia con ellos
 from = puede tomar arrays, promises, iterables y observables
 */

 const observer = {
     next: valor=> console.log(valor),
     complete: ()=> console.log('Se completo')
 }

 //const src$= from([1,2,3,4,5,6]);

 //Los from nos permiter crear observables de cualquier valor, recibe conjuntos
 //de datos y los separa individualmente
 const src$= from('Hiram');

 src$.subscribe(  observer );

 //Ejemplo de from para una peticion http con fetch


const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (let id of miIterable){
// console.log(id);
// }

//De esta forma aprovechamos la ventaja de los operadores de lo observables para
//poder manipular los datos emitidos mas facilmente del generador
from( miIterable ).subscribe( observer );



 const peticion = from( fetch('https://api.github.com/users/klerith') );


//Esto es una forma de hacerlo
//  peticion.subscribe(  async resp =>{

//     const body = await resp.json();

//     console.log('Resp fetch: ', resp);

//     console.log(body);

//  } );