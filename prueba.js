window.top.postMessage('hello', '*')
var txt='';
window.addEventListener("mouseup", function(){
    console.log("1"+ document.getElementsByTagName(this).value);
});

document.addEventListener("mouseup", function(){
    console.log("2"+ document.getElementsByClassName("home-heading").value);
});

function getSelectedText() {
	console.log("1");	
	//alert(document.getElementsByTagName(this).value());
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

