Matchcounter = 0;
Matchcounterforanswer = 0;
Match2counter = 0;
Match2counterforanswer = 0;
Match3counter = 0;
Match3counterforanswer = 0;
Match4counter = 0;
Match4counterforanswer = 0;

let MatchAnswer1 = document.querySelector("#matching1id");
let MatchAnswerfor1 = document.querySelector("#matching1idchoice");
let MatchAnswer2 = document.querySelector("#matching2id");
let MatchAnswerfor2 = document.querySelector("#matching2idchoice");
let MatchAnswer3 = document.querySelector("#matching3id");
let MatchAnswerfor3 = document.querySelector("#matching3idchoice");
let MatchAnswer4 = document.querySelector("#matching4id");
let MatchAnswerfor4 = document.querySelector("#matching4idchoice");

MatchAnswer1.addEventListener("click", matchinganswers);
MatchAnswerfor1.addEventListener("click", changingmatchanswers);
MatchAnswer2.addEventListener("click", matchinganswers2);
MatchAnswerfor2.addEventListener("click", changingmatchanswers2);
MatchAnswer3.addEventListener("click", matchinganswers3);
MatchAnswerfor3.addEventListener("click", changingmatchanswers3);
MatchAnswer4.addEventListener("click", matchinganswers4);
MatchAnswerfor4.addEventListener("click", changingmatchanswers4);

let Matchingitem1update = document.getElementById("matching1numberorder");
let Matchingitem2update = document.getElementById("matching2numberorder");
let Matchingitem3update = document.getElementById("matching3numberorder");
let Matchingitem4update = document.getElementById("matching4numberorder");

let points = 0;

let wrong = "Status: Incorrect";
let right = "Status: Correct";

Reordercounter = 0;
Reordercounter1 = 0;
Reordercounter2 = 0;
Reordercounter3 = 0;

let ReorderAnswer1 = document.querySelector("#reorderanswer2");
let ReorderAnswer2 = document.querySelector("#reorderanswer1");
let ReorderAnswer3 = document.querySelector("#reorderanswer3");
let ReorderAnswer4 = document.querySelector("#reorderanswer4");

ReorderAnswer2.addEventListener("click", AnswerClick1Active);
ReorderAnswer1.addEventListener("click", AnswerClick2Active);
ReorderAnswer3.addEventListener("click", AnswerClick3Active);
ReorderAnswer4.addEventListener("click", AnswerClick4Active);

let listitem1update = document.getElementById("reorderanswer1");
let listitem2update = document.getElementById("reorderanswer2");
let listitem3update = document.getElementById("reorderanswer3");
let listitem4update = document.getElementById("reorderanswer4");

function AnswerClick1Active() {
	Listitem1 = document.getElementById("reorderanswer1").innerHTML;
	if (document.getElementById("reorderanswer1").innerHTML) {
		Reordercounter = 1;
		arrange_1();
	}
}

function AnswerClick2Active() {
	Listitem2 = document.getElementById("reorderanswer2").innerHTML;
	if (document.getElementById("reorderanswer2").innerHTML) {
		Reordercounter1 = 1;
		arrange_1();
	}
}

function AnswerClick3Active() {
	Listitem3 = document.getElementById("reorderanswer3").innerHTML;
	if (document.getElementById("reorderanswer3").innerHTML) {
		Reordercounter2 = 1;
		arrange_1();
	}
}

function AnswerClick4Active() {
	Listitem4 = document.getElementById("reorderanswer4").innerHTML;
	if (document.getElementById("reorderanswer4").innerHTML) {
		Reordercounter3 = 1;
		arrange_1();
	}
}

function arrange_1() {
	if (Reordercounter === 1 && Reordercounter1 === 1) {
		listitem2update.innerHTML = Listitem1;
		listitem1update.innerHTML = Listitem2;
		Reordercounter = 0;
		Reordercounter1 = 0;
		Reordercounter2 = 0;
		Reordercounter3 = 0;
	} 
	
	if (Reordercounter === 1 && Reordercounter2 === 1) {
		listitem3update.innerHTML = Listitem1;
		listitem1update.innerHTML = Listitem3;
		Reordercounter = 0;
		Reordercounter1 = 0;
		Reordercounter2 = 0;
		Reordercounter3 = 0;
	} 
	
	if (Reordercounter1 === 1 && Reordercounter2 === 1) {
		listitem3update.innerHTML = Listitem2;
		listitem2update.innerHTML = Listitem3;
		Reordercounter = 0;
		Reordercounter1 = 0;
		Reordercounter2 = 0;
		Reordercounter3 = 0;
	} 
	
	if (Reordercounter === 1 && Reordercounter3 === 1) {
		listitem4update.innerHTML = Listitem1;
		listitem1update.innerHTML = Listitem4;
		Reordercounter = 0;
		Reordercounter1 = 0;
		Reordercounter2 = 0;
		Reordercounter3 = 0;
	} 
	
	if (Reordercounter1 === 1 && Reordercounter3 === 1) {
		listitem4update.innerHTML = Listitem2;
		listitem2update.innerHTML = Listitem4;
		Reordercounter = 0;
		Reordercounter1 = 0;
		Reordercounter2 = 0;
		Reordercounter3 = 0;
	} 
	
	if (Reordercounter2 === 1 && Reordercounter3 === 1) {
		listitem4update.innerHTML = Listitem3;
		listitem3update.innerHTML = Listitem4;
		Reordercounter = 0;
		Reordercounter1 = 0;
		Reordercounter2 = 0;
		Reordercounter3 = 0;
	} 
}

function matchinganswers() {
	if (document.getElementById("matching1id").innerHTML) {
		Matchcounter = 1;
		Match2counter = 0;
		Match3counter = 0;
		Match4counter = 0;
		answerchange();
	}
}

function matchinganswers2() {
	if (document.getElementById("matching2id").innerHTML) {
		Matchcounter = 0;
		Match2counter = 1;
		Match3counter = 0;
		Match4counter = 0;
		answerchange();
	}
}

function matchinganswers3() {
	if (document.getElementById("matching3id").innerHTML) {
		Matchcounter = 0;
		Match2counter = 0;
		Match3counter = 1;
		Match4counter = 0;
		answerchange();
	}
}

function matchinganswers4() {
	if (document.getElementById("matching4id").innerHTML) {
		Matchcounter = 0;
		Match2counter = 0;
		Match3counter = 0;
		Match4counter = 1;
		answerchange();
	}
}

function changingmatchanswers() {
	Matchitemfor1= document.getElementById("matching1numberorderchoice").innerHTML;
	if (document.getElementById("matching1idchoice").innerHTML) {
		Matchcounterforanswer = 1;
		Match2counterforanswer = 0;
		Match3counterforanswer = 0;
		Match4counterforanswer = 0;
		answerchange();
	}
}

function changingmatchanswers2() {
	Matchitemfor2= document.getElementById("matching2numberorderchoice").innerHTML;
	if (document.getElementById("matching2idchoice").innerHTML) {
		Matchcounterforanswer = 0;
		Match2counterforanswer = 1;
		Match3counterforanswer = 0;
		Match4counterforanswer = 0;
		answerchange();
	}
}

function changingmatchanswers3() {
	Matchitemfor3= document.getElementById("matching3numberorderchoice").innerHTML;
	if (document.getElementById("matching3idchoice").innerHTML) {
		Matchcounterforanswer = 0;
		Match2counterforanswer = 0;
		Match3counterforanswer = 1;
		Match4counterforanswer = 0;
		answerchange();
	}
}

function changingmatchanswers4() {
	Matchitemfor4= document.getElementById("matching4numberorderchoice").innerHTML;
	if (document.getElementById("matching4idchoice").innerHTML) {
		Matchcounterforanswer = 0;
		Match2counterforanswer = 0;
		Match3counterforanswer = 0;
		Match4counterforanswer = 1;
		answerchange();
	}
}

function answerchange() {
	if (Matchcounter === 1 && Matchcounterforanswer === 1) {
		Matchingitem1update.innerHTML = Matchitemfor1;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Matchcounter === 1 && Match2counterforanswer === 1) {
		Matchingitem1update.innerHTML = Matchitemfor2;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Matchcounter === 1 && Match3counterforanswer === 1) {
		Matchingitem1update.innerHTML = Matchitemfor3;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Matchcounter === 1 && Match4counterforanswer === 1) {
		Matchingitem1update.innerHTML = Matchitemfor4;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match2counter === 1 && Matchcounterforanswer === 1) {
		Matchingitem2update.innerHTML = Matchitemfor1;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match2counter === 1 && Match2counterforanswer === 1) {
		Matchingitem2update.innerHTML = Matchitemfor2;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	}
	
	if (Match2counter === 1 && Match3counterforanswer === 1) {
		Matchingitem2update.innerHTML = Matchitemfor3;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match2counter === 1 && Match4counterforanswer === 1) {
		Matchingitem2update.innerHTML = Matchitemfor4;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match3counter === 1 && Matchcounterforanswer === 1) {
		Matchingitem3update.innerHTML = Matchitemfor1;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match3counter === 1 && Match2counterforanswer === 1) {
		Matchingitem3update.innerHTML = Matchitemfor2;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match3counter === 1 && Match3counterforanswer === 1) {
		Matchingitem3update.innerHTML = Matchitemfor3;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match3counter === 1 && Match4counterforanswer === 1) {
		Matchingitem3update.innerHTML = Matchitemfor4;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match4counter === 1 && Matchcounterforanswer === 1) {
		Matchingitem4update.innerHTML = Matchitemfor1;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match4counter === 1 && Match2counterforanswer === 1) {
		Matchingitem4update.innerHTML = Matchitemfor2;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match4counter === 1 && Match3counterforanswer === 1) {
		Matchingitem4update.innerHTML = Matchitemfor3;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
	
	if (Match4counter === 1 && Match4counterforanswer === 1) {
		Matchingitem4update.innerHTML = Matchitemfor4;
		Matchcounter = 0;
		Matchcounterforanswer = 0;
		Match2counter = 0;
		Match2counterforanswer = 0;
		Match3counter = 0;
		Match3counterforanswer = 0;
		Match4counter = 0;
		Match4counterforanswer = 0;
	} 
}

function disable_button() {
	document.getElementById ("buttonusage").disabled = true;
	document.getElementById ("Sticks").disabled = true;
	document.getElementById ("Core").disabled = true;
	document.getElementById ("Ram2").disabled = true;
	document.getElementById ("PSU").disabled = true;
	document.getElementById ("SSD").disabled = true;
	document.getElementById ("Mac").disabled = true;
	document.getElementById ("Paste").disabled = true;
	document.getElementById ("Coding").disabled = true;
	document.getElementById ("Graphic Processing").disabled = true;
	document.getElementById ("Short-term").disabled = true;
	document.getElementById ("no").disabled = true;
	document.getElementById ("yes").disabled = true;
	document.getElementById ("Files").disabled = true;
	document.getElementById ("Pads").disabled = true;
	document.getElementById ("Window").disabled = true;
	document.getElementById ("buttonusage").disabled = true;
}

function Submit(){
	if (document.querySelector('#yes').checked) {
		document.getElementsByClassName("status")[0].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[0].innerHTML = wrong;
		document.getElementsByClassName("answer")[0].innerHTML = "Answer is: yes";
	}
	
	if (document.querySelector('#Short-term').checked) {
		document.getElementsByClassName("status")[1].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[1].innerHTML = wrong;
		document.getElementsByClassName("answer")[1].innerHTML = "Answer is: Store and acess short-term data";
	}
	
	if (document.querySelector('#Sticks').checked) {
		document.getElementsByClassName("status")[2].innerHTML = wrong;
		document.getElementsByClassName("answer")[2].innerHTML = "Answer is: Thermal Paste, cooling pads";
	} else if (document.querySelector('#Paste').checked && document.querySelector('#Pads').checked) {
		document.getElementsByClassName("status")[2].innerHTML = right;
		points+=2;
	} else {
		document.getElementsByClassName("status")[2].innerHTML = wrong;
		document.getElementsByClassName("answer")[2].innerHTML = "Answer is: Thermal Paste, cooling pads";
	}
	
	if (document.querySelector('#SSD').checked || document.querySelector('#PSU').checked) {
		document.getElementsByClassName("status")[3].innerHTML = wrong;
		document.getElementsByClassName("answer")[3].innerHTML = "Answer is: CPU, Ram";
	} else if (document.querySelector('#Ram2').checked && document.querySelector('#Core').checked) {
		document.getElementsByClassName("status")[3].innerHTML = right;
		points+=2;
	} else {
		document.getElementsByClassName("status")[3].innerHTML = wrong;
		document.getElementsByClassName("answer")[3].innerHTML = "Answer is: CPU, Ram";
	}
	
	if (document.getElementById("Mac").value === "Apple" || document.getElementById("Mac").value ==="apple") {
		document.getElementsByClassName("status")[4].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[4].innerHTML = wrong;
		document.getElementsByClassName("answer")[4].innerHTML = "Answer is: Apple";
	}
	
	if (document.getElementById("Window").value === "Microsoft" || document.getElementById("Window").value ==="microsoft") {
		document.getElementsByClassName("status")[5].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[5].innerHTML = wrong;
		document.getElementsByClassName("answer")[5].innerHTML = "Answer is: Microsoft";
	}
	
	if (Matchingitem1update.innerHTML === "1.") {
		document.getElementsByClassName("status")[6].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[6].innerHTML = wrong;
		document.getElementsByClassName("answer")[6].innerHTML = "Answer is: 1.";
	}
	
	if (Matchingitem2update.innerHTML === "3.") {
		document.getElementsByClassName("status")[7].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[7].innerHTML = wrong;
		document.getElementsByClassName("answer")[7].innerHTML = "Answer is: 3.";
	}
	
	if (Matchingitem3update.innerHTML === "4.") {
		document.getElementsByClassName("status")[8].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[8].innerHTML = wrong;
		document.getElementsByClassName("answer")[8].innerHTML = "Answer is: 4.";
	}
	
	if (Matchingitem4update.innerHTML === "2.") {
		document.getElementsByClassName("status")[9].innerHTML = right;
		points+=1;
	} else {
		document.getElementsByClassName("status")[9].innerHTML = wrong;
		document.getElementsByClassName("answer")[9].innerHTML = "Answer is: 2.";
	}
	
	if (listitem1update.innerHTML  === "CPU") {
		document.getElementsByClassName("status")[10].innerHTML = right;
		points+=1;
	} else if (listitem1update.innerHTML  != "CPU") {
		document.getElementsByClassName("status")[10].innerHTML = wrong;
		document.getElementsByClassName("answer")[10].innerHTML = "Answer is: CPU";
	}
	
	if (listitem2update.innerHTML  === "RAM") {
		document.getElementsByClassName("status")[11].innerHTML = right;
		points+=1;
	} else if (listitem2update.innerHTML  != "RAM") {
		document.getElementsByClassName("status")[11].innerHTML = wrong;
		document.getElementsByClassName("answer")[11].innerHTML = "Answer is: RAM";
	}
	
	if (listitem3update.innerHTML  === "SSD") {
		document.getElementsByClassName("status")[12].innerHTML = right;
		points+=1;
	} else if (listitem3update.innerHTML  != "SSD") {
		document.getElementsByClassName("status")[12].innerHTML = wrong;
		document.getElementsByClassName("answer")[12].innerHTML = "Answer is: SSD";
	}
	
	if (listitem4update.innerHTML  === "GPU") {
		document.getElementsByClassName("status")[13].innerHTML = right;
		points+=1;
	} else if (listitem4update.innerHTML  != "SSD") {
		document.getElementsByClassName("status")[13].innerHTML = wrong;
		document.getElementsByClassName("answer")[13].innerHTML = "Answer is: GPU";
	}
	
	let percentunround = points/16*100;
	let percentage = Math.round(percentunround);
	
	document.getElementsByClassName("pointholder")[0].innerHTML = "points: " + points.toString() + "/16";
	document.getElementsByClassName("pointholder")[1].style.textAlign = "center";
	document.getElementsByClassName("pointholder")[1].innerHTML = percentage.toString() +"%";
	
	if (points <= 7) {
		alert("You have failed the computer quiz. Try again next time!");
	} else if (points == 14 || points == 15) {
		alert("You have aquired an execptional score! Good Job!");
	} else if (points == 16) {
		alert("You have aquired a perfect score! Well done!");
	} else if (points => 8 < 14) {
		alert("You have passed the computer quiz! Congrats!");
	}
	
	disable_button();
}