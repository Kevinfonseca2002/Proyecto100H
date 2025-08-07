const imgBoreal = document.getElementById("imagenBoreal")

function borealClick (imgBoreal){
    if (imgBoreal.style.transform === "scale(1.02)") {
    imgBoreal.style.transform = "scale(1)";
    } else {
    imgBoreal.style.transform = "scale(1.02)";
    }
}

