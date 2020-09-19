var buttonID = 1;
function addelement(){
    var display = document.getElementById('display');
    var mainDiv = document.createElement("div");
    var subDiv = document.createElement("div");
    var span = document.createElement("span");
    var plus = document.createTextNode("+");
    mainDiv.setAttribute("class", "main-container");
    mainDiv.setAttribute("id", "button" + buttonID);
    subDiv.setAttribute("class", "sub-container");
    span.setAttribute("class", "button" + buttonID);
    span.setAttribute("id", "btn");
    span.setAttribute("onclick", "addcolumn(this)");
    span.appendChild(plus);
    subDiv.append(span);
    mainDiv.append(subDiv);
    display.append(mainDiv);
    console.log("running");
    buttonID++;
}

function addcolumn(getSpan) {
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
    mainDiv1.setAttribute("class", "main-container half-box");
    mainDiv2.setAttribute("class", "main-container half-box");
    mainDiv1.setAttribute("id", "button" + buttonID);
    subDiv1.setAttribute("class", "sub-container");
    span1.setAttribute("class", "button" + buttonID);
    span1.setAttribute("onclick", "addcolumn(this)");
    span1.appendChild(plus1);
    buttonID++;
    mainDiv2.setAttribute("id", "button" + buttonID);
    subDiv2.setAttribute("class", "sub-container");
    span2.setAttribute("class", "button" + buttonID);
    span2.setAttribute("onclick", "addcolumn(this)");
    span2.appendChild(plus2);
    buttonID++;
    
    subDiv1.append(span1);
    subDiv2.append(span2);
    mainDiv1.append(subDiv1);
    mainDiv2.append(subDiv2);
    getElement.append(mainDiv1);
    getElement.append(mainDiv2);
    console.log("running");
    
}

