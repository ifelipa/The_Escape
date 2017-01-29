window.top.postMessage('hello', '*')
 var txt='';
  window.addEventListener("mouseup", function(){
      console.log("1"+ document.getElementsByTagName(this).value);
 
 	if(document.getSelection()){ //Resto de navegadores
        	var sel = document.getSelection();
        	console.log("selec1"+sel);
   		}
 
  });
  
  document.addEventListener("mouseup", function(){
      console.log("2"+ document.getElementsByClassName("home-heading").value);
  
 	if(document.getSelection()){ //Resto de navegadores
         	var sel = document.getSelection();
         	console.log("selec2"+sel);
    		}

  });
