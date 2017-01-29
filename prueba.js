var send = [];
send[0] = 'hello';
document.addEventListener("mouseup", function(){
 	if(document.getSelection()){
         	send[1] = ""+document.getSelection();
         	console.log(send[1]);        
    }
  window.top.postMessage(send, '*')
  });
