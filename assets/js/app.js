
function abrirInvitacion(){
    const sobre = document.getElementById("sobre");
    // evitar doble click
    if(sobre.classList.contains("abierto")){
        return;
    }
    // abrir animación
    sobre.classList.add("abierto");
    /*
        Tiempo para que la hoja
        salga del sobre
    */

    setTimeout(()=>{
        document.body.classList.add(
            "invitacion-abierta"
        );
    },2500);
    /*
        Tiempo para cerrar portada
    */
    setTimeout(()=>{

        sobre.classList.add(
            "cerrar"
        );

    },4500);

    setTimeout(()=>{
        iniciarMusica();
    },3500);

}

/* =========================================
   MUSICA
========================================= */

const musica = document.getElementById("musica");
let reproduciendo=false;

function iniciarMusica(){
    if(!musica){
        return;
    }
    musica.volume=.35;
    musica.play()
    .then(()=>{
        reproduciendo=true;
    })
    .catch(()=>{
        console.log(
        "El navegador bloqueó la música"
        );
    });
}


function controlMusica(){
    if(!musica){
        return;
    }
    if(reproduciendo){
        musica.pause();
        reproduciendo=false;
    }
    else{
        musica.play();
        reproduciendo=true;
    }
}


// =========================================
// EFECTO
// =========================================

function crearCorazon() {
	const corazon =
		document.createElement("div");
	corazon.innerHTML = "❤️";
	corazon.style.position = "fixed";
	corazon.style.top = "-30px";
	corazon.style.left = Math.random() * 100 + "vw";
	corazon.style.fontSize = (15 + Math.random() * 20) + "px";
	corazon.style.zIndex = "100";
	corazon.style.pointerEvents = "none";
	corazon.style.animation =
		"caer " + (5 + Math.random() * 5) + "s linear";
	document.body.appendChild(corazon);
	setTimeout(() => {
		corazon.remove();
	}, 10000);
}

setInterval(crearCorazon, 900);


document.getElementById("formConfirmacion").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const personas = document.getElementById("personas").value;
    const respuesta = document.querySelector('input[name="respuesta"]:checked').value;

    const telefono = "527291151552";

    let mensaje = `✨ *Confirmación de Asistencia* ✨\n\n`;
    mensaje += `👤 *Nombre:* ${nombre}\n\n`;
    mensaje += `💌 *Respuesta:* ${respuesta}\n\n`;

    if (respuesta === "Sí asistiré") {
        mensaje += `👥 *Número de asistentes:* ${personas}\n\n`;
        mensaje += `Será un honor acompañarlos en este día tan especial. ❤️`;
    } else {
        mensaje += `Lamentamos no poder contar con su presencia en esta ocasión.\n\n`;
        mensaje += `Les deseamos una hermosa celebración llena de amor y felicidad. 💕`;
    }

    // IMPORTANTE: codificar mensaje para WhatsApp
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {
        // La página dejó de estar activa
        if (!musica.paused) {
            musica.pause();
        }
    } else {
        // La página volvió a estar activa
        if (reproduciendo) {
            musica.play().catch(() => {});
        }
    }

});