
if(document.getElementById("indexlink") != null){
    //makes sure that those in the main folder and one folder down link to the the right place
    document.getElementById("indexlink").innerHTML = "<a href=\"" + absoluteDirectory("index.html") + "\">Realms of Aster</a>";
}

if(document.getElementById("WIP") != null){
    document.getElementById("WIP").innerHTML = "Work In Progress";
}

//"macros"
if(document.getElementById("listOfGods") != null){
    document.getElementById("listOfGods").innerHTML = "<ul>" +
        "<li><a href=\"bane.html\">Bane</a></li>" +
        "<li><a href=\"bhaal.html\">Bhaal</a></li>" +
        "<li><a href=\"lathander.html\">Lathander</a></li>" +
        "<li><a href=\"necrigal.html\">Necrigal</a></li>" +
        "<li><a href=\"selune.html\">Sel\u{FB}ne</a></li>" +
    "</ul>";
}

//replacements, i.e. the link list
let text = document.body.innerHTML;

text = replaceObsiLinks(text)

document.body.innerHTML = text;

console.log(absoluteDirectoryStart());

//appends the given string to the absolute directory start, i.e. takes a relative link and makes it absolute for the whole folder
function absoluteDirectory(string){
    return absoluteDirectoryStart() + string;
}

//gets the start of the absolute directory
function absoluteDirectoryStart() {
    return window.location.href.split("asterdnd")[0] + "asterdnd/";
}

//contains a list of all the links obsidian style links we want to replace with their proper link counterparts, and replaces them all
function replaceObsiLinks(string){
    string = string.replaceAll("[[Souls]]", "<a href = \"" + absoluteDirectory("souls.html") + "\">Souls</a>");
        string = string.replaceAll("[[Soul]]", "<a href = \"" + absoluteDirectory("souls.html") + "\">Soul</a>");

    string = string.replaceAll("[[Soul Coin]]", "<a href = \"" + absoluteDirectory("boons/soulCoin.html") + "\">Soul Coin</a>");
    return string;
}
