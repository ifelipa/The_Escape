window.top.postMessage('hello', '*')
var send=[];
var txt='';
document.addEventListener("mouseup", function(){
	if(document.getSelection()){ //Resto de navegadores
        	txt = document.getSelection();
        	console.log(txt);
   	}
});
