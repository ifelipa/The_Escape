var send = [];
send[0] = 'hello';
window.top.postMessage(send, '*')
 document.addEventListener("mouseup", function(){
 	if(document.getSelection()){
         	var send[1] = document.getSelection();
         	console.log("sele "+send[1]);        
    		}
  });
