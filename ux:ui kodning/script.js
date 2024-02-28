/*js til burgermenu*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*js til slide af billeder på forside og om nippon*/

var image = document.querySelector('.forside_intro_billeder');

// Tilføjer en klasse til billedet, når siden indlæses
window.onload = function () {
    image.classList.add('slide-in-left');
};


/*js til accordion på FAQ side*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


/*js til Chatten under FAQ*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}