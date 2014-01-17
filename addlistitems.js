
$(document).ready(function() {

$('form').submit(function(e){
    e.preventDefault();
	addItems();
});

$('input').keypress(function(e){
    if(e.keyCode == 13){
	    e.preventDefault();/*FOR SHOPPING LIST BUT NOT FOR HOT-COLD HTML INTERACE, I NEED PREVENT DEFAULT LINE IN ORDER FOR CODE TO WORK. WHY IS THAT?*/
        addItems();
    }
});

$('li').dblclick(function() {
      
      $(this).empty();
	  
	  
  });



});

	
/*$('input').keypress(function(e){
    if(e.keyCode == 13){
	    
       e.preventDefault(); //with or without this line, it doesn't work
	   return addItems();
    }
});

$('input').keypress(function(event){
		
		if(event.which == 13){
			event.preventDefault();
}
});*/

function addItems() {

var listform = document.getElementById("myList");
var input = listform.elements[0].value; //input from text box

if (/^\s+/.test(input)|| input == "") 
   alert("Please enter an item and do not include spaces before the item.");
   /*document.getElementById("livelist").innerHTML += "<p>Please enter an item</p>";*/
else
document.getElementById("livelist").innerHTML += "<li><input type='checkbox'/><label>" + input + "</label></li>";


} //end addItems function

