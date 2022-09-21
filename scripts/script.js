var darkButton = document.querySelector("#dark-button");
var bodyDark = document.querySelector("body");
var searchFunction = document.querySelector("#search-bar");
var ul = document.querySelector("#search-container");
var a;
var i;
var txtValue;

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
darkButton.addEventListener("click", changeDark);
searchFunction.addEventListener("keyup", searchTest);