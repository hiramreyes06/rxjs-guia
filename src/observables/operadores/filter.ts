import { range, from, of, pipe } from 'rxjs';
import { filter } from 'rxjs/operators';


const rango$ = range(20, 10).pipe(



/*
El operador filter nos sirve para filtrar la data emitida por el observable
dependiendo de una condicion y retorna la data si la condicion se cumple 
 */
filter( (numeros, index) => {

    //El filter tiene un index de la cantidad de iteraciones
    console.log(index);    
    return numeros %2 ===1
})


    );



rango$.subscribe( valores =>{
    console.log('Numeros impares: ',valores);
});





const heroes = [
    {
     nombre:'Spiderman',
     tipo:'heroe'   
    },
    {
        nombre:'Duende verde',
        tipo:'villano'   
    },
    {
        nombre:'Venom',
        tipo:'villano'   
    },
    {
        nombre:'Deadpool',
        tipo:'heroe'   
    }
];

/*
Es buena practica el usar interfaces para especificiar los tipos de datos que va
a menajer el observable
*/

const heroes$ = from<personajes[]>( heroes ).pipe(


    filter( (personajes, index) =>{
   
       console.log('Personaje : ',index);
        return personajes.tipo === 'heroe'
    } )   
   );


heroes$.subscribe( heroes => console.log(heroes));

interface personajes {
    nombre:string,
    tipo:string
}