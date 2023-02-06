function changelight(){
	if (light == "on"){
		lightcode = "<style>body{background-color: #505050; color: white; transition-duration: 1s;}header{background-color: #505050; transition-duration: 1s;}</style>";
		light = "off"
	} else if (light == "off"){
		lightcode = "<style>body{background-color: white; color: black; transition-duration: 1s;}header{background-color: white; transition-duration: 1s;}</style>";
		light = "on"
	}
	document.getElementById("styleinsert").innerHTML=lightcode;
}

light = "on"
lightcode = "<style>body{background-color: white; color: black; transition-duration: 2s;}header{background-color: white; transition-duration: 1s;}</style>";
document.getElementById("styleinsert").innerHTML=lightcode;