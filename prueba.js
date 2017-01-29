 var send=[];
 document.addEventListener("mouseup", function(){
 	if(document.getSelection()){ //Resto de navegadores
         	send[1] = document.getSelection();
         	console.log("selec2"+ send[1]);
          send[0]=true;
    		}

  });
if (send[0]){
 window.top.postMessage('hello', '*')
}
