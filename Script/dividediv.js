var buttonID = 1;
function addElement(){

    var display = document.getElementById('display');
    var mainDiv = document.createElement("div");
    var subDiv = document.createElement("div");
    var span = document.createElement("span");
    var plus = document.createTextNode("+")

    mainDiv.setAttribute("class", "main-container");
    mainDiv.setAttribute("id", "button" + buttonID);

    subDiv.setAttribute("class", "sub-container");

    span.setAttribute("class", "button" + buttonID);
    span.setAttribute("onclick", "addColumn(this)");

    span.appendChild(plus);
    subDiv.append(span);
    mainDiv.append(subDiv);
    display.append(mainDiv);

    buttonID++;

}

function addColumn(getSpan) {

    displayModal();

    width1 = parseInt(width1);
    width2 = parseInt(width2);

    var getID = getSpan.className;
    var getElement = document.getElementById(getID);

    getElement.innerHTML = '';

    var mainDiv1 = document.createElement("div");
    var mainDiv2 = document.createElement("div");

    var subDiv1 = document.createElement("div");
    var subDiv2 = document.createElement("div");

    var span1 = document.createElement("span");
    var span2 = document.createElement("span");

    var plus1 = document.createTextNode("+");
    var plus2 = document.createTextNode("+");

    mainDiv1.setAttribute("class", "main-container");
    mainDiv1.setAttribute("style", "width: " + width1 + "%;");

    mainDiv2.setAttribute("class", "main-container");
    mainDiv2.setAttribute("style", "width: " + width2 + "%;");

    mainDiv1.setAttribute("id", "button" + buttonID);
    subDiv1.setAttribute("class", "sub-container");
    span1.setAttribute("class", "button" + buttonID);
    span1.setAttribute("onclick", "addColumn(this)");
    span1.appendChild(plus1);
    buttonID++;

    mainDiv2.setAttribute("id", "button" + buttonID);
    subDiv2.setAttribute("class", "sub-container");
    span2.setAttribute("class", "button" + buttonID);
    span2.setAttribute("onclick", "addColumn(this)");
    span2.appendChild(plus2);
    buttonID++;
    
    subDiv1.append(span1);
    subDiv2.append(span2);

    mainDiv1.append(subDiv1);
    mainDiv2.append(subDiv2);

    getElement.append(mainDiv1);
    getElement.append(mainDiv2);

}

//modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displayModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}