

var window = new Window("palette", "My script", undefined);
var startButton = window.add("button", undefined, "Run !");

window.show();

var comp = app.project.activeItem;
var layer = comp.layer(1);

//remplace le contenue d'un calque de texte par un string hardcodé à l'interieur de la fonction 
function replaceText(input) {
    
        layer.property("Source Text").setValue(input);
    
    alert("done");
}

startButton.onClick = replaceText("Mon test remplacé");
