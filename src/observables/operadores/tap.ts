import { range } from "rxjs";
import { tap, map } from "rxjs/operators";


const rango$ = range(1,5);


rango$.pipe(

    /*
    El operador tab es util para poder depurar el flujo de datos
    ya que se puede utilizar al principio o al final, retorna un parcial
    observer con next, err, complete() y solo emite como esta flujo de datos
    */
    
    tap( valor => console.log( 'Se inicio el flujo con tap', valor)),
    map( valor => valor *10),
    tap({
        next: valor => console.log('Depurador tap',valor),
        complete :() => console.log('Se termino el flujo de datos')
    })
)
.subscribe(valores => console.log('Suscripcion : ', valores));