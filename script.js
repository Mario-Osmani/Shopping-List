function checkDriverAge(age){

if (Number(age) < 18) {
	return("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	return("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	return("Congratulations on your first year of driving. Enjoy the ride!");
}
}

//var database = [
//	{
//		username: "andrei",
//		password: "supersecret"
//	},
//	{
//		username: "sally",
//		password: "123"
//	},
//	{
//		username: "ingrid",
//		password: "777"
//	}
//];
//var newsfeed = [
//	{
//		username: "username1",
//		timeline : "Timeline data for username1"
//	}, 
//	{
//		username: "username2",
//		timeline : "Timeline data for username2"
//	},
//	{
//		username: "username3",
//		timeline : "Timeline data for username3"
//	}
//];
//
//var userNamePrompt = prompt("What's your username?");
//var passwordPrompt = prompt("What's your password?");
//
//function isUserValid(username , password){
//	for ( var i=0 ; i < database.length ; i++ ){
//		if(database[i].username === username &&
//			database[i].password === password ){
//				return true;
//}
//	}
//	return false;
//}
//function signIn(username,password) {
//	if(isUserValid(username,password)){
//		console.log(newsfeed);
//	} else{
//		alert("Sorry , wrong username and password");
//	}
//	}
//
//signIn (userNamePrompt,passwordPrompt);

//var todos = [
	//"clean room",
	//"brush teeth",
	//"exercise",
	//"study javascript",
	//"eat healthy"
//];

//for (var i=0 ; i < todos.length ; i++){
	//todos[i ] = todos[i]+ "!";
//}


//var counterOne =10 ;
//while (counterOne >0 ) {
	//console.log(counterOne);
   // counterOne--; 
//}
//var counterTwo = 10 
//do{
//	console.log (counterTwo);
//	counterTwo--;
//} while(counterTwo>10);


//function logTodos (todo , i ){
//	console.log(todo , i);
//}

//todos.forEach(logTodos);

//var button = document.getElementsByTagName("button")[0];
//button.addEventListener("click", function(){
//	console.log("Click!!");
//})

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", function(){
		li.classList.toggle("done");	
		})
	
		var Deletebutton = document.createElement("button");
		Deletebutton.textContent = "Delete";
		Deletebutton.style.marginLeft = "20px";
		
		li.appendChild(Deletebutton); 
		
		Deletebutton.addEventListener("click",nodisplay);
	input.value = "";
}

button.addEventListener("click", function () {
	if (inputLength()>0){
		createListElement();
}
})

input.addEventListener("keypress", function (event) {
	if (inputLength()>0 &&  event.key=== "Enter"){
	createListElement();
}
})

function addDone(li){
li.addEventListener("click", function(){
	li.classList.toggle("done");	
	})
}

var lis = document.querySelectorAll("li");
lis.forEach( addDone);

for (i=0 ; i<lis.length ; i++){
	var Deletebutton = document.createElement("button");
    Deletebutton.textContent = "Delete";
    Deletebutton.style.marginLeft = "20px";
	
	lis[i].appendChild(Deletebutton); 
	
	Deletebutton.addEventListener("click",nodisplay);
}

function nodisplay(event) {
	var li = event.target.parentNode;
	li.classList.add("delete");
};




