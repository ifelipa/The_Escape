window.top.postMessage('hello', '*')
var txt='';
window.addEventListener("mouseup", function(){
    console.log("1"+ document.getElementsByTagName(this).value);
	getSelectedText();
});

document.addEventListener("mouseup", function(){
    console.log("2"+ document.getElementsByClassName("home-heading").value);
	getSelectedText();
});

function getSelectedText() {
	console.log("getSelectedText");
	var txt='';
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (window.document.getSelection) {
        txt =window.document.getSelection();
    } else if (window.document.selection) {
        txt = window.document.selection.createRange().text;
    }
	console.log(txt)	
    return txt;
}

