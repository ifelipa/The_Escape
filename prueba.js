var send = [];
send[0] = 'hello';
window.top.postMessage(send, '*')
 document.addEventListener("mouseup", function(){
 	if(document.getSelection()){
         	var s = document.getSelection();
         	console.log("sele "+s);
        
    		}

  });
