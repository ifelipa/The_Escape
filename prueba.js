var send[0]= true;
window.top.postMessage(send, '*')
 document.addEventListener("mouseup", function(){
 	if(document.getSelection()){ //Resto de navegadores
         	send[1] = document.getSelection();
         	console.log(send[1]);
        
    		}

  });
