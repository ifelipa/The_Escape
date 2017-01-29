var send = [];
send[0] = 'hello';
window.top.postMessage(send, '*')
 document.addEventListener("mouseup", function(){
 	if(document.getSelection()){
         	var txt = document.getSelection();
          send[1] = txt; 
         	console.log("s"+send[1]);        
    		}
  });
