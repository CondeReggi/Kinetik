document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.carousel');
    //Parte de materialize
    M.Carousel.init(elementos, {
        duration: 150,
        numVisible: 6,
        padding: 5,
        shift: 5,
        dist: 0,
        indicators: true,
    });
});

/*/  -------------------------------------------------------------  /*/

var images = ["kik2.jpg", "kik1.jpg", "kik3.jpg", "kik4.jpg", "kik5.jpg"];
$(function () {
    var i = 0;
    $(".contenedor_imagenes").css("background-image", "url(../imagenes/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".contenedor_imagenes").fadeOut("fast", function () {
            $(this).css("background-image", "url(../imagenes/" + images[i] + ")");
            $(this).fadeIn("fast");
        });
    }, 2000);
});

/*/  ---------------------------VALIDACION DEL FORM----------------------------------  /*/

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

usuario = false,
correo = false,
telefono = false;



$("#botonenviar").click(function(){
    let nom = document.getElementById("nombreid"); //GUARDA EL IMPUT DEL NOMBRE
    let mail = document.getElementById("mailid");   //GUARDA EL IMPUT DEL TEL
    let tel = document.getElementById("telid");    //GUARDA EL IMPUT DEL MAIL
    let mens = document.getElementById("msgid");    //GUARDA EL IMPUT DEL MENSAJE

    if(expresiones.usuario.test(nom.value)){
        usuario = true;
        console.log("nom");
    }
    if(expresiones.correo.test(mail.value)){
        correo = true;
        console.log("mail");
    }
    if(expresiones.telefono.test(tel.value)){
        telefono = true;
        console.log("tel");
    }

    if (usuario && correo && telefono){
        alert("No esta programado aun, pero debe enviar mail a el mail xd"); //deberia haber una funcion que mande el mail
    }else{
        if(usuario === false || nom.value === ""){
            let nombrelabel = document.getElementById("nombrelbl");
            nombrelabel.style.color = 'red';
            nombrelabel.style.fontSize = "1rem"
            nombrelabel.style.fontWeight = "bold"
            nombrelabel.style.border = "black"
        }else{
            nombrelabel.style.color = 'white';
            nombrelabel.style.fontSize = "12px"
            nombrelabel.style.fontWeight = "none"
            nombrelabel.style.border = "none"
        }
        if(correo === false || mail.value === ""){
            let maillabel = document.getElementById("maillbl");
            maillabel.style.color = 'red';
            maillabel.style.fontSize = "1rem"
            maillabel.style.fontWeight = "bold"
            maillabel.style.border = "black"
        }else{
            maillabel.style.color = 'white';
            maillabel.style.fontSize = "12px"
            maillabel.style.fontWeight = "none"
            maillabel.style.border = "none"
        }
        if(telefono === false || tel.value === ""){
            let tellabel = document.getElementById("tellbl");
            tellabel.style.color = 'red';
            tellabel.style.fontSize = "1rem"
            tellabel.style.fontWeight = "bold"
            tellabel.style.border = "black"
        }else{
            tellabel.style.color = 'white';
            tellabel.style.fontSize = "12px"
            tellabel.style.fontWeight = "none"
            tellabel.style.border = "none"
        }
    }
});