let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/MohamadHadiPicture.jpeg") {
        myImage.setAttribute("src", "images/Family.jpeg");
    } else {
        myImage.setAttribute("src", "images/MohamadHadiPicture.jpeg");
    }
}

let myButton = document.querySelector(".button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerText = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerText = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
