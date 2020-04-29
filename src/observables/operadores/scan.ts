import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";


const numreos = [1,2,3,4,5];

const totalAcumulador = (acumulador, valorActual) => acumulador+ valorActual;


from(numreos).pipe(

reduce(totalAcumulador,0)

).subscribe( subs =>{

console.log(subs);


});


from(numreos).pipe(

    scan( totalAcumulador,0 )
    
    ).subscribe( subs =>{
    
    console.log('Con el scan',subs);
    
    
    });


    interface Usuario{
        id?: string;
        autenticado?: boolean;
        token?: string;
        edad?: number;
    }


    const users  : Usuario [] =[
        {id:'asd', autenticado:false, token:null},
        {id:'asd', autenticado:true, token:'ABC'},
        {id:'asd', autenticado:true, token:'ABCD1234'},
        {id:'asd', autenticado:true, token:'ABCD1236546'}
    ] ;


    //Asi estamos interados de cada cambio 
    const estado$= from(users).pipe(

        //El scan es la imlpementacion del patron redux, para saber
        //los cambios de un estado inicial al recibir una accion
        scan<Usuario>( (acc, cur) =>{

            //ASi se retorna la creacion de un nuevo objeto
            //Con el ... se extraen cada una de las propiedades
            return {...acc, ...cur}
        },{edad:33}),

        map( usuario => usuario.id)
    );


    estado$.subscribe(
        estado => console.log(estado)
    );