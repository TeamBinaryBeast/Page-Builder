var display = document.getElementById("display");

function exportAsHtml() {
    raw = display.innerHTML;
    exportInDiv(raw);
}

function exportInDiv(raw) {
    var Div = document.createElement("div");
    Div.innerHTML = raw;
    document.getElementsByClassName('sidebar')[0].appendChild(Div).setAttribute("id", "Exported");
    var list = document.querySelectorAll("#Exported #btn");
    removeAll(list);
    replicate();
}

function removeAll(list) {
    for (var x = 0; x < list.length; x++){
        list[x].remove();
    }
}

function replicate() {
    var exported = document.querySelector('#Exported');
    fixedHTML = String(exported.innerHTML);
    document.querySelector('#Exported').remove();
    finalExp(fixedHTML);
}

function createExpo(fixedHTML) {
    var Div = document.createElement("div");
    var node = document.createTextNode(fixedHTML);
    Div.appendChild(node);
    document.getElementsByClassName('sidebar')[0].appendChild(Div).setAttribute("id", "FinalExp");
}

function finalExp(fixedHTML) {
    try {
        var Div = document.getElementById("FinalExp");
        Div.remove();
        createExpo(fixedHTML)
    } catch (pass) {
        createExpo(fixedHTML)
    }
}