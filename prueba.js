var send = [];
send[0] = 'hello';
document.addEventListener("mouseup", function(){
 	if(document.getSelection()){
         	send[1] = ""+document.getSelection();     
    }
  window.top.postMessage(send, '*')
  });
