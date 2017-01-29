window.top.postMessage('hello', '*')
var txt='';
document.getElementsByTagName("body").addEventListener("onmouseup", getSelectedText);

function getSelectedText() {
	alert(document.getElementsByTagName(this).value());
	/*
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (window.document.getSelection) {
        txt =window.document.getSelection();
    } else if (window.document.selection) {
        txt = window.document.selection.createRange().text;
    }
	console.log(txt)	
    return txt;*/  
}

