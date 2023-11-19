// document.getElementById('imgCompu').style.width = "100%"; // Ancho al 100% del contenedor
// document.getElementById('imgCompu').style.height = "400px";
document.getElementById('imgCompu').style.opacity = "1.0"

//creando un carrusel:
var nro = 1;

function carrusel() {
    if (nro > 3) {
        nro = 1;
    }

    document.getElementById('imgCompu').setAttribute("src", "Imagenes/img" + nro + ".png");
    nro++;
    // el primer valor puede estar entre comillas dobles o simples pero debe tener comillas,
    // el segundo valor no es necesario que tenga comillas , ´pero sí acepta comilla doble o simple

    // esto me genera error:
    // document.setTimeout('carrusel()',"2000");

    // en cambio esta linea sí es correcta:
    setTimeout('carrusel()', "2000");


}



// no le pongas como primer valor el onload así onload() sino lo va a ejecutar
// el onload puede estar entre comillas(simples o dobles) o no
// el segund valor ,po ser func ,puede estar entre comiilas (simples o dobles ) o no 
document.body.setAttribute('onload', 'carrusel()');



window.onload = function() {
    carrusel();
    
    // Añadir event listener para redimensionamiento de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Si la pantalla es más grande que 768px (puedes ajustar este valor)
            imgCompu.style.width = "500px";
            imgCompu.style.height = "auto";
        } else {
            // Si la pantalla es más pequeña que 768px
            imgCompu.style.width = "100%";
            imgCompu.style.height = "250px";
        }
    });
};