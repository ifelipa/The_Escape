window.top.postMessage('hello', '*')
 var txt='';
 document.addEventListener("mouseup", function(){
 	if(document.getSelection()){ //Resto de navegadores
         	var sel = document.getSelection();
         	console.log("selec2"+sel);
    		}

  });
