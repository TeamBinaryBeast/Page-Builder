var display = document.getElementById("display");
function exportAsHtml() {
    raw = String(display.innerHTML);
    Exp(raw);
}
function Exp(raw) {
    try {
        var t_Div = document.getElementById("Exported");
        t_Div.remove();
        CreateExpo(raw);
    } catch (pass) {
        CreateExpo(raw);
    }
}

function CreateExpo(raw) {
    var t_Div = document.createElement("div");
    var node = document.createTextNode(raw);
    t_Div.appendChild(node);
    document.getElementsByClassName('sidebar')[0].appendChild(t_Div).setAttribute("id", "Exported");
}