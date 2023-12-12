/* 
Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . 
Para que el efecto sea el adecuado, siempre deben estar alternadas.
 Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, 
dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), 
devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

*/

function adjustLights(lights) {  
    let firstColor = '🔴';
    let colorPar;
    let error=0;
    let colorImpar;

    lights.map((color, i) => {
        firstColor === '🔴' ?  colorPar = '🟢' : colorPar = '🔴';
        let formPar = (i + 1) % 2;

    if (i === 0) {
        firstColor = color;

    }else if (formPar === 0 ) {
        color === colorPar ? error+0 : error++
    }else{
        color != colorPar ? error+0: error++
    }

  })
  console.log('error es igual a:' + error) 

}

  adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
