import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');

texto.innerHTML=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula a ipsum at malesuada. Proin leo neque, auctor sit amet dignissim ultricies, egestas sit amet est. Aenean eget mattis tortor, non ornare ex. Nulla facilisi. Vivamus vitae elit iaculis, sagittis eros ac, commodo dolor. Suspendisse eleifend sem sit amet ante sagittis, vitae volutpat orci facilisis. Curabitur vel felis consequat sem blandit euismod. Vestibulum at nisi ullamcorper, interdum odio in, finibus sem. Sed quis purus aliquam, tempus tellus sit amet, ultrices nulla. Praesent auctor est est, sed pretium velit blandit nec. Duis ullamcorper, ex id condimentum congue, lectus dui efficitur tellus, eu rhoncus ligula elit eu orci.
<br/><br/>
Cras quis nulla eu nisl vestibulum venenatis. Quisque id tristique purus, a vulputate erat. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget sagittis sem, eu posuere magna. In dapibus blandit lectus quis tempus. Duis efficitur sem ut orci rhoncus viverra. Nulla aliquam nisi at massa malesuada, sit amet tristique velit vehicula. Donec in fringilla enim. Donec eget pharetra urna, ac mattis augue. Donec maximus nibh felis, a semper urna congue a. Cras vitae diam eget urna aliquet egestas. Donec erat augue, tristique sed eros at, posuere rhoncus quam. Maecenas a mauris a libero varius eleifend quis id quam.
<br/><br/>
Sed commodo, ipsum in eleifend pretium, lorem velit facilisis lectus, ut efficitur dolor felis consequat massa. Nullam sed justo tempor, viverra eros et, porttitor diam. Nam eget varius ex, non faucibus diam. Morbi nec dolor sed orci accumsan malesuada. Duis quis nunc arcu. Sed auctor et odio quis ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br/><br/>
Vivamus malesuada pretium neque, ac ultrices ligula suscipit in. Sed varius ipsum in congue molestie. In hac habitasse platea dictumst. Pellentesque laoreet rutrum erat, a elementum dui sodales vitae. Aenean rhoncus felis libero, id convallis velit tristique sed. Donec lacinia ullamcorper lectus non pretium. Quisque eget diam arcu. Cras semper, nibh sed gravida volutpat, augue elit lacinia eros, a mattis purus diam non neque. Cras maximus elementum volutpat. Donec tincidunt imperdiet dolor a commodo. Aenean ullamcorper odio non nisl pharetra, in dictum nisl aliquet. Suspendisse ullamcorper urna eros. Quisque viverra, tortor accumsan tincidunt porttitor, tortor mi hendrerit tortor, non molestie dolor ipsum a nisl. Nunc dolor massa, eleifend vitae facilisis a, vehicula nec nibh. Praesent at est volutpat, molestie enim sed, lobortis lorem.
<br/><br/>
Cras luctus tellus sapien, ut pretium ipsum volutpat faucibus. Proin ornare dolor quis egestas euismod. Sed vitae mattis odio. Morbi sed convallis felis. Nullam porta tortor a tellus porta, malesuada porttitor est tempor. Etiam at erat purus. Ut tristique turpis quis vulputate lacinia. Aenean ornare varius est, et scelerisque enim feugiat quis. Proin ut mi eleifend, sagittis ex feugiat, luctus urna. Nullam viverra aliquet magna eget tristique. Pellentesque at est quis velit bibendum ultrices. Nulla a quam eu leo elementum egestas vitae sed sapien. Nulla vel risus eget risus euismod tempor sed in libero.
`;


const body= document.querySelector('body');

body.append(texto);

const progressBar= document.createElement('div');
progressBar.setAttribute('class','progress-bar');

body.append(progressBar);

const calcularPorcentajeScroll = (event:any):number =>{

    //Forma que yo lo hice
    // return (event.target.documentElement.scrollTop /
    //     (event.target.documentElement.scrollHeight - event.target.documentElement.clientHeight)
    // ) *100;

    //Para la destructuracion de un objeto de cs6 y guardar las
    //propiedades

    const{
        scrollTop,
        scrollHeight,
        clientHeight
    } =event.target.documentElement;



 return ( ( scrollTop / ( scrollHeight- clientHeight )  )*100) ;  

};

//Streams

const scroll$= fromEvent(document,'scroll').pipe(
map( event => calcularPorcentajeScroll(event) ),
tap(valor => console.log('Valor actual ', valor))

);

scroll$.subscribe( scroll => {console.log('Porcentaje',scroll)

progressBar.style.width=`${scroll}%`


});