var buttonID = 1;
var getSpan;
var width1 = 50;
var width2 = 50;

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
    span.setAttribute("onclick", "displayModal2(this)");

    span.appendChild(plus);
    subDiv.append(span);
    mainDiv.append(subDiv);
    display.append(mainDiv);

    buttonID++;

}

function addColumn() {

    document.getElementById('width1').value = '50';
    document.getElementById('width2').value = '50';
    
    document.getElementById('w1').innerHTML = 50 + '%';
    document.getElementById('w2').innerHTML = 50 + '%';

    modal1.style.display = "none";

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
    span1.setAttribute("onclick", "displayModal2(this)");
    span1.appendChild(plus1);
    buttonID++;

    mainDiv2.setAttribute("id", "button" + buttonID);
    subDiv2.setAttribute("class", "sub-container");
    span2.setAttribute("class", "button" + buttonID);
    span2.setAttribute("onclick", "displayModal2(this)");
    span2.appendChild(plus2);
    buttonID++;
    
    subDiv1.append(span1);
    subDiv2.append(span2);

    mainDiv1.append(subDiv1);
    mainDiv2.append(subDiv2);

    getElement.append(mainDiv1);
    getElement.append(mainDiv2);

    width1 = 50;
    width2 = 50;

}

function addRow(){

    modal2.style.display = "none";

    var getID = getSpan.className;
    var getElement = document.getElementById(getID);

    getElement.innerHTML = '';

    for (i = 0; i < 2; i++) {
        var mainDiv = document.createElement("div");
        var subDiv = document.createElement("div");
        var span = document.createElement("span");
        var plus = document.createTextNode("+")

        mainDiv.setAttribute("class", "main-container");
        mainDiv.setAttribute("id", "button" + buttonID);

        subDiv.setAttribute("class", "sub-container");

        span.setAttribute("class", "button" + buttonID);
        span.setAttribute("onclick", "displayModal2(this)");

        span.appendChild(plus);
        subDiv.append(span);
        mainDiv.append(subDiv);
        getElement.append(mainDiv);

        buttonID++;
    }

}

function widthRange(modalInput){

    var modalInputID = modalInput.id;
    var widthValue1 = parseInt(modalInput.value);
    if (modalInputID == 'width1'){

        document.getElementById('width2').value = "" + 100 - widthValue1 + "";
        document.getElementById('w1').innerHTML = widthValue1 + '%';
        document.getElementById('w2').innerHTML = 100 - widthValue1 + '%';
        width1 = widthValue1;
        width2 = 100 - widthValue1;

    } else {

        document.getElementById('width1').value = "" + 100 - widthValue1 + "";
        document.getElementById('w2').innerHTML = widthValue1 + '%';
        document.getElementById('w1').innerHTML = 100 - widthValue1 + '%';
        width2 = widthValue1;
        width1 = 100 - widthValue1;

    }

}

//modal

// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the <span> element that closes the modal
var cancel1 = document.getElementsByClassName("close")[0];
var cancel2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
function displayModal1() {
    modal2.style.display = "none";
    modal1.style.display = "block";
}

function displayModal2(getValue) {
    modal2.style.display = "block";
    getSpan = getValue;
}

// When the user clicks on <span> (cancel), close the modal
cancel1.onclick = function () {
    modal1.style.display = "none";
    document.getElementById('width1').value = '50';
    document.getElementById('width2').value = '50';
    document.getElementById('w1').innerHTML = 50 + '%';
    document.getElementById('w2').innerHTML = 50 + '%';
    width1 = 50;
    width2 = 50;
}

cancel2.onclick = function () {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        document.getElementById('width1').value = '50';
        document.getElementById('width2').value = '50';
        document.getElementById('w1').innerHTML = 50 + '%';
        document.getElementById('w2').innerHTML = 50 + '%';
        width1 = 50;
        width2 = 50;
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

