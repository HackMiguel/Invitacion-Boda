// =========================================
// FECHA DEL EVENTO
// CAMBIAR ESTA FECHA POR LA DE TU BODA
// =========================================


const fechaBoda =
new Date("December 26, 2026 14:00:00").getTime();







// =========================================
// CONTADOR REGRESIVO
// =========================================


const contador =
setInterval(()=>{

    const ahora = new Date().getTime();

    const diferencia = fechaBoda - ahora;

    // CALCULOS

    const dias =
    Math.floor(
        diferencia /
        (1000 * 60 * 60 * 24)
    );

    const horas =
    Math.floor(
        (diferencia %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutos =
    Math.floor(
        (diferencia %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const segundos =
    Math.floor(
        (diferencia %
        (1000 * 60))
        /
        1000
    );

    // MOSTRAR RESULTADOS

    const elementoDias =
    document.getElementById("dias");


    const elementoHoras =
    document.getElementById("horas");


    const elementoMinutos =
    document.getElementById("minutos");


    const elementoSegundos =
    document.getElementById("segundos");

    if(elementoDias){

        elementoDias.innerHTML =
        dias;

    }

    if(elementoHoras){

        elementoHoras.innerHTML =
        horas;

    }

    if(elementoMinutos){

        elementoMinutos.innerHTML =
        minutos;

    }

    if(elementoSegundos){

        elementoSegundos.innerHTML =
        segundos;

    }

    // CUANDO LLEGA LA FECHA

    if(diferencia < 0){

        clearInterval(contador);

        const bloque =
        document.querySelector(".contador");

        if(bloque){
            bloque.innerHTML =   `<h2>💍 Hoy es nuestro gran día </h2>
            <p>
            Gracias por acompañarnos
            </p>
            `;
        }

    }
},1000);