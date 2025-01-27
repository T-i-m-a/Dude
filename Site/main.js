document.getElementById('BorderRadius').addEventListener("mousemove",setBorderRadius);

function setBorderRadius() {
    
    console.log(document.getElementById('BorderRadius').value);
    document.getElementById('Dude').style.borderRadius = document.getElementById('BorderRadius').value + "px";
}

setBorderRadius()   


