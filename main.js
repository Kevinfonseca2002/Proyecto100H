function botonForm(){
    const form =document.querySelector(".formulario")
    if (form.checkValidity()){
        alert ("Información registrada")
    }else{
        alert ("Revise los campos faltantes")
    }
}
//-----------------------------------------Imagen Boreal--------------------------------------------------------------------------
// Trae imagen de HTML
const borealImg = document.querySelector (".boreal-pic")
// Esta diciendo que apenas alguien haga click en esa imagen, ejecutar esta funcion
borealImg.addEventListener("click", function () {       

    //crea un container con las siguientes caracteristicas simulando una cortina
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    // vh vw (view height-view widht) hace referencia al porcentaje del tamaño de la pantalla respectivamente, si esta en 100, significa que va a ocupar el 100%
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    //rgb (red,green.blue)estan en 0 pero el a(alpha) maneja la opacidad, 80% opaco, 20% transparente
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    //crea z-index para que se sobremuestre sobre todo el contenido de la pantalla
    overlay.style.zIndex = "1000";


    const imagenAmpliada = document.createElement("img");
    imagenAmpliada.src = borealImg.src;
    imagenAmpliada.style.maxWidth = "90%";
    imagenAmpliada.style.maxHeight = "90%";
    imagenAmpliada.style.boxShadow = "0 0 20px white";
    imagenAmpliada.style.cursor = "zoom-out";


    overlay.addEventListener("click", function () {
        document.body.removeChild(overlay); //hace que al darle otro click, desaparezca de la pantalla
    });

    overlay.appendChild(imagenAmpliada); //el appendChild nos ayuda a que creemos el padre y el hijo, en este caso el padre es "overlay" y el Hijo "imagenAmpliada" por lo que hace que "imagenAmpliada" este dentro de "overlay"
    document.body.appendChild(overlay);
    });
    //--------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------Imagen Polo-----------------------------------------------------------------------------------------

const poloImg = document.querySelector (".polo-pic")

poloImg.addEventListener("click", function (){
    const overlayPolo =document.createElement ("div");
    overlayPolo.style.position = "fixed";
    overlayPolo.style.top = "0";
    overlayPolo.style.left = "0";
    overlayPolo.style.width = "100vw";
    overlayPolo.style.height = "100vh";
    overlayPolo.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlayPolo.style.display = "flex";
    overlayPolo.style.justifyContent = "center";
    overlayPolo.style.alignItems = "center";
    overlayPolo.style.zIndex = "1000";

const imagenAmpliadaPolo = document.createElement ("img");
imagenAmpliadaPolo.src = poloImg.src;
imagenAmpliadaPolo.style.maxHeight = "90%";
imagenAmpliadaPolo.style.maxWidth = "90%";
imagenAmpliadaPolo.style.cursor = "zoom-out";
imagenAmpliadaPolo.style.boxShadow = "0 0 20px white";

overlayPolo.addEventListener("click", function(){
    document.body.removeChild(overlayPolo);
});

overlayPolo.appendChild(imagenAmpliadaPolo);
document.body.appendChild(overlayPolo);


    
});

//--------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------Imagen Montaña--------------------------------------------------------------------------------------------


const montañaImg = document.querySelector (".montaña-pic")

montañaImg.addEventListener("click", function (){
    const overlaymontaña =document.createElement ("div");
    overlaymontaña.style.position = "fixed";
    overlaymontaña.style.top = "0";
    overlaymontaña.style.left = "0";
    overlaymontaña.style.width = "100vw";
    overlaymontaña.style.height = "100vh";
    overlaymontaña.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlaymontaña.style.display = "flex";
    overlaymontaña.style.justifyContent = "center";
    overlaymontaña.style.alignItems = "center";
    overlaymontaña.style.zIndex = "1000";

const imagenAmpliadaMontaña = document.createElement ("img");
imagenAmpliadaMontaña.src = montañaImg.src;
imagenAmpliadaMontaña.style.maxHeight = "90%";
imagenAmpliadaMontaña.style.maxWidth = "90%";
imagenAmpliadaMontaña.style.cursor = "zoom-out";
imagenAmpliadaMontaña.style.boxShadow = "0 0 20px white";

overlaymontaña.addEventListener("click", function(){
    document.body.removeChild(overlaymontaña);
});

overlaymontaña.appendChild(imagenAmpliadaMontaña);
document.body.appendChild(overlaymontaña);


    
});

//-------------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------Imagen Sabana---------------------------------------------------------------------------

const sabanaImg = document.querySelector (".sabana-pic")

sabanaImg.addEventListener("click", function (){
    const overlaySabana =document.createElement ("div");
    overlaySabana.style.position = "fixed";
    overlaySabana.style.top = "0";
    overlaySabana.style.left = "0";
    overlaySabana.style.width = "100vw";
    overlaySabana.style.height = "100vh";
    overlaySabana.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlaySabana.style.display = "flex";
    overlaySabana.style.justifyContent = "center";
    overlaySabana.style.alignItems = "center";
    overlaySabana.style.zIndex = "1000";

const imagenAmpliadaSabana = document.createElement ("img");
imagenAmpliadaSabana.src = sabanaImg.src;
imagenAmpliadaSabana.style.maxHeight = "90%";
imagenAmpliadaSabana.style.maxWidth = "90%";
imagenAmpliadaSabana.style.cursor = "zoom-out";
imagenAmpliadaSabana.style.boxShadow = "0 0 20px white";

overlaySabana.addEventListener("click", function(){
    document.body.removeChild(overlaySabana);
});

overlaySabana.appendChild(imagenAmpliadaSabana);
document.body.appendChild(overlaySabana);


    
});

//-------------------------------------------------------------------------------------------------------------------------------------------------
