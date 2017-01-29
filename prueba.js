var send[0] = 'hello';
window.top.postMessage(send, '*')
 document.addEventListener("mouseup", function(){
 	if(document.getSelection()){
         	send[1] = ""+document.getSelection();
         	console.log(send[1]);        
    		}
  });
