var btn;
var counter;
var tempBtn;
var presBtn;

function file(name, counter){
}

function setFileName(obj){ 
	file = new Object;
	file.name=obj.value;
	btn=document.createElement("BUTTON");
	var t=document.createTextNode(file.name);
	btn.appendChild(t);
	document.body.appendChild(btn);
	btn.setAttribute("onclick","changeButtons()");
	file.counter =0;
}

function changeButtons(){
	console.log(file.counter+" "+file.name);
	if(file.counter==0){
		initButtons();
		document.body.appendChild(tempBtn);
		document.body.appendChild(presBtn);
		file.counter=1;
	}
	else{
		document.body.removeChild(tempBtn);
		document.body.removeChild(presBtn);
		file.counter=0;
	}
}

function initButtons(){
	tempBtn = document.createElement("BUTTON");
	var t=document.createTextNode("temperature");
	tempBtn.appendChild(t);
	presBtn = document.createElement("BUTTON");
	t=document.createTextNode("pressure");
	presBtn.appendChild(t);
}
