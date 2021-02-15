function messageJava(){
	alert("I'm JavaScript!");
}

function calculateAge(b){
	let date = b.split(".");
	let now = new Date();
	let cYear = now.getFullYear();
	var cMonth = now.getMonth();
	var cDay = now.getDay();
	for (var i = 0; i < date.length - 1; i++) {
		date[i] = parseInt(date[i]);
	}
	age = cYear - date[2];
	if (cMonth + 1 > date[1] ){
		age++;
	}
	else if ((cMonth +1) == date[1] &&  cDay >= date[0]){
		age++;
	}else {
		age--;
	}
	return age;
}

function task21(){
	let name,admin;
	name = "Adilzhan";
	admin = name;
	alert(admin);
}

function task22() {
	let ourPlanet = "Earth";
	let currenUser = "Adilzhan";
}

function task23a() {
	const birthday = '22.05.2001';
	const age = calculateAge(birthday);
	alert(age);
}

function task23b() {
	const BIRTHDAY = '18.04.1982'
	const AGE = calculateAge(BIRTHDAY);
	alert(AGE);
}

function interaction() {
	let name = document.getElementById("input");
	alert(name.value);
}


function operators1() {
	let a =1, b =1; 
	let c = ++a;
	let d = b++;
	alert(a+','+b+','+c+','+d)
}

function operators2() {
	let a = 2;
	let x = 1 + (a *= 2);
	alert(x)
}

function operators3() {
	alert(""+1+0)
	alert(""-1+0)
	alert(true+false)
	alert(6/"3")
	alert("2"*"3")
	alert(4+5+"px")
	alert("$"+4+5)
	alert("4"-2)
	alert("4px" - 2)
	alert(" -9 "+ 5)
	alert(" -9 "-5)
	alert(null+1)
	alert(undefined+1)
	alert(" \t \n" - 2)
	


}

function operators4() {
	let a = prompt("First number?", 1);
	let b = prompt("Second number?", 2);
	alert(a + b);	
}

function comparision() {
	alert(5>4)
	alert("apple" > "pineapple")
	alert("apple" > "pineapple")
	alert("2" > "12")
	alert(undefined == null)
	alert(undefined === null)
	alert(null == "\n0\n")
	alert(null === +"\n0\n")

}

function ifstatement(){
	if ("0") {
 		alert( 'Hello' );}
}

function ifstatement2(){
	alert("What's the “official” name of JavaScript?");
	input = document.getElementById("input");
	if (input.value == "ECMAScript"){
		alert("RIGHT");
	}else {
		alert("You don't know? “ECMAScript”!");
	}
}

function ifstatement3(){
	let value = prompt("Type a number",0)
	if (value > 0) {
		alert(1);
	}else if (value < 0){
		alert(-1);
	}
	else {alert(0);}
}


function ifstatement4(){
	let message;
	let login = prompt("Insert Login","");
	message = (login == 'Employee') ? "Hello" :
	(login == "Director") ? "Greetings" :
	(login == "") ? "No login" :
	"";
	alert(message); 
}

function loperator1(){
	alert( null || 2 || undefined );
}

function loperator2(){
	alert( alert(1) || 2 || alert(3) );
}

function loperator3(){
	alert( 1 && null && 2 );
}

function loperator4(){
	alert( alert(1) && alert(2) );
}
function loperator5(){
	alert( null || 2 && 3 || 4 );
}
function loperator6(){
	let age = prompt("AGE", 0)
	if (age >14 && age<90){
		alert("Inclusively");
	} 
}
function loperator7(){
	let age = prompt("AGE", 0)
	if (! (age >14 && age<90)){
		alert("not Inclusively");
	}
}
function loperator3(){
	alert( 1 && null && 2 );
}
function loperator3(){
	alert( 1 && null && 2 );
}
function loperator3(){
	alert( 1 && null && 2 );
}