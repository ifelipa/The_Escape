if (window.top == window.self){
    alert("iframe");
    var elements = document.querySelectorAll('link[rel=stylesheet]');
    for(var i=0;i<elements.length;i++){       
       console.log(elements[i].parentNode.removeChild(elements[i]))
    }

}
var send = [];
send[0] = 'hello';
document.addEventListener("mouseup", function(){
 	if(document.getSelection()){
         	send[1] = ""+document.getSelection();     
    }
  window.top.postMessage(send, '*')
  });
