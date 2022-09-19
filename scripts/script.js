var darkButton = document.querySelector("#dark-button");
var bodyDark = document.querySelector("body");


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

darkButton.addEventListener("click", changeDark);