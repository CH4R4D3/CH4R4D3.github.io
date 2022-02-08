if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["&#128293;|", "&#128293; ?|", "&#128293; E|", "&#128293; Ek|", "&#128293; Eku|", "&#128293; Ekus|", "&#128293; Ekus |", "&#128293; Ekus C|", "&#128293; Ekus Ch|", "&#128293; Ekus Che|", "&#128293; Ekus Chea|", "&#128293; Ekus Cheat|", "&#128293; Ekus Cheats|", "&#128293; Ekus Cheats", "&#128293; Ekus Cheats", "&#128293; Ekus Cheats", "&#128293; Ekus Cheats", "&#128293; Ekus Cheats|", "&#128293; Ekus Cheat|", "&#128293; Ekus Chea|", "&#128293; Ekus Che|", "&#128293; Ekus Ch|", "&#128293; Ekus Ch|", "&#128293; Ekus C|", "&#128293; Ekus |", "&#128293; Ekus|", "&#128293; Eku|", "&#128293; Ek|", "&#128293; Ek|", "&#128293; E|", "&#128293; |", "&#128293;|", "&#128293; .|", "&#128293; $|"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

