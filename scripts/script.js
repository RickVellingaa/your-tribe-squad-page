var darkButton = document.querySelector("#dark-button");
var bodyDark = document.querySelector("body");
var searchFunction = document.querySelector("#search-bar");
var ul = document.querySelector("#search-container");
var a;
var i;
var txtValue;

// functie die checkt of de body een bepaalde class heeft en gebaseerd daarop wordt een darkmode class toegevoegd of verwijdert. 
// De gebruikte foto wordt verandert door gebruik te maken van .src om direct de style van de img te veranderen
function changeDark() {
    if(bodyDark.classList.contains("darkmode")){
        bodyDark.classList.remove("darkmode");    
        document.getElementById("img-change").src="./assets/dark-mode.png";

    }
    else{
        bodyDark.classList.add("darkmode");
        document.getElementById("img-change").src="./assets/light-mode.png";
    }
}

// functie die gebruikt maakt van een for loop om de ingevoerde letters bij de input te lezen en te vergelijken met de content van de a tags die zich bevinden in de figcaption.
// de text en foto's worden vervolgens met .style verstopt door hun display op none te zetten.

function searchTest(){
    var input = document.querySelector("#search-bar");
    var filter = input.value.toUpperCase();
    var figcap = ul.querySelectorAll("figcaption");
    var fig = ul.querySelectorAll("figure");

    console.log("figcap", figcap.length);
    for(i = 0; i < figcap.length; i++){
        a = figcap[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            figcap[i].style.display = "";
            fig[i].style.display = "";
        }
        else{
            figcap[i].style.display = "none";
            fig[i].style.display = "none"
        }
    }
}
// event listeners toevoegen aan de dark mode button en zoekbalk

darkButton.addEventListener("click", changeDark);
searchFunction.addEventListener("keyup", searchTest);