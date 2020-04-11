var button = document.getElementById("enterbutton");
var input = document.getElementById("inputitem");
var ol = document.querySelector("ol");

button.addEventListener("click",function(){
	if (input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ol.appendChild(li);
		input.value = "";
		}
	}
)

input.addEventListener("keypress",function(event){
	if (input.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ol.appendChild(li);
		input.value = "";
		}
	}
)