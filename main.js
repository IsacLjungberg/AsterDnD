
if(document.getElementById("indexlink") != null){
    document.getElementById("indexlink").innerHTML = "<a href=\"index.html\">Realms of Aster</a>";
}

if(document.getElementById("WIP") != null){
    document.getElementById("WIP").innerHTML = "Work In Progress";
}

//"macros"
if(document.getElementById("listOfGods") != null){
    document.getElementById("listOfGods").innerHTML = "<ul>" +
        "<li><a href=\"selune.html\">Sel\u{FB}ne</a></li>" +
        "<li><a href=\"necrigal.html\">Necrigal</a></li>" +
        "<li><a href=\"bane.html\">Bane</a></li>" +
        "<li><a href=\"bhaal.html\">Bhaal</a></li>" +
        "<li><a href=\"lathander.html\">Lathander</a></li>" +
    "</ul>";
}