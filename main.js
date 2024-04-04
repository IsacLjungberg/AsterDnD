
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
        "<li>[[Bane]]</li>" +
        "<li>[[Bhaal]]</li>" +
        "<li>[[Lathander]]</li>" +
        "<li>[[Necrigal]]</li>" +
        "<li>[[Selûne]]</li>" +
    "</ul>";
}

//replacements, i.e. the link list
let text = document.body.innerHTML;

text = replaceObsiLinks(text)

document.body.innerHTML = text;



let head = document.head.innerHTML;

head = head.replaceAll("<link rel=\"stylesheet\" href=\"\">", "<link rel=\"stylesheet\" href=\"" + absoluteDirectory("style.css") + "\"></link>");

document.head.innerHTML = head;



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
    string = string.replaceAll("[[Soul Coin]]", "<a href = \"" + absoluteDirectory("boons/soulCoin.html") + "\">Soul Coin</a>");
        string = string.replaceAll("[[Soul Coins]]", "<a href = \"" + absoluteDirectory("boons/soulCoin.html") + "\">Soul Coins</a>");

    string = string.replaceAll("[[Aberration]]", "<a href = \"" + absoluteDirectory("aberration.html") + "\">Aberration</a>");
        string = string.replaceAll("[[Aberrations]]", "<a href = \"" + absoluteDirectory("aberration.html") + "\">Aberrations</a>");

    string = string.replaceAll("[[Bane]]", "<a href = \"" + absoluteDirectory("bane.html") + "\">Bane</a>");

    string = string.replaceAll("[[Bhaal]]", "<a href = \"" + absoluteDirectory("bhaal.html") + "\">Bhaal</a>");

    string = string.replaceAll("[[Covenant]]", "<a href = \"" + absoluteDirectory("covenant.html") + "\">Covenant</a>");

    string = string.replaceAll("[[Ethereal Plane]]", "<div id = \"deadLink\"><a href = \"" + absoluteDirectory("etherealPlane.html") + "\">Ethereal Plane</a></div>");

    string = string.replaceAll("[[Expected Adventurer Income]]", "<a href = \"" + absoluteDirectory("expectedAdventurerIncome.html") + "\">Expected Adventurer Income</a>");

    string = string.replaceAll("[[Gods]]", "<a href = \"" + absoluteDirectory("gods.html") + "\">Gods</a>");
        string = string.replaceAll("[[God]]", "<a href = \"" + absoluteDirectory("gods.html") + "\">God</a>");

    string = string.replaceAll("[[Greataxe of Mutual Doom]]", "<a href = \"" + absoluteDirectory("boons/greataxeOfMutualDoom.html") + "\">Greataxe of Mutual Doom</a>");

    string = string.replaceAll("[[Lathander]]", "<a href = \"" + absoluteDirectory("lathander.html") + "\">Lathander</a>");

    string = string.replaceAll("[[Loot Tables]]", "<a href = \"" + absoluteDirectory("lootTables.html") + "\">Loot Tables</a>");

    string = string.replaceAll("[[Necklace of Myriad Forms]]", "<a href = \"" + absoluteDirectory("boons/necklaceOfMyriadForms.html") + "\">Necklace of Myriad Forms</a>");

    string = string.replaceAll("[[Necrigal]]", "<a href = \"" + absoluteDirectory("necrigal.html") + "\">Necrigal</a>");

    string = string.replaceAll("[[Nine Hells]]", "<a href = \"" + absoluteDirectory("nineHells.html") + "\">Nine Hells</a>");

    string = string.replaceAll("[[Outer Planes]]", "<div id = \"deadLink\"><a href = \"" + absoluteDirectory("outerPlanes.html") + "\">Outer Planes</a></div>");

    string = string.replaceAll("[[Dark One's Oath]]", "<a href = \"" + absoluteDirectory("boons/darkOnesOath.html") + "\">Dark One's Oath</a>");
        string = string.replaceAll("[[Dead One's Oath]]", "<a href = \"" + absoluteDirectory("boons/darkOnesOath.html") + "\">Dead One's Oath</a>");

    string = string.replaceAll("[[Prime Material]]", "<a href = \"" + absoluteDirectory("primeMaterial.html") + "\">Prime Material</a>");
        string = string.replaceAll("[[Prime Material Plane]]", "<a href = \"" + absoluteDirectory("primeMaterial.html") + "\">Prime Material Plane</a>");

    string = string.replaceAll("[[Ring of Greater Missiles]]", "<a href = \"" + absoluteDirectory("boons/ringOfGreaterMissiles.html") + "\">Ring of Greater Missiles</a>");

    string = string.replaceAll("[[Sel\u{FB}ne]]", "<a href = \"" + absoluteDirectory("selune.html") + "\">Sel\u{FB}ne</a>");

    string = string.replaceAll("[[Soulflesh]]", "<a href = \"" + absoluteDirectory("soulflesh.html") + "\">Soulflesh</a>");

    string = string.replaceAll("[[Souls]]", "<a href = \"" + absoluteDirectory("souls.html") + "\">Souls</a>");
        string = string.replaceAll("[[Soul]]", "<a href = \"" + absoluteDirectory("souls.html") + "\">Soul</a>");

    string = string.replaceAll("[[Wealth Classes]]", "<a href = \"" + absoluteDirectory("wealthClasses.html") + "\">Wealth Classes</a>");
    return string;
}
