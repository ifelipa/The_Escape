window.top.postMessage('hello', '*')
var send=[];
document.addEventListener("mouseup", function(){
	if(document.getSelection()){ //Resto de navegadores
        	var txt = document.getSelection();
        	console.log(txt);
   	}
});
