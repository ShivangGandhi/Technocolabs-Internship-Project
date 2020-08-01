//Boolean indicating the when they registered
let early = true;

//runner age
let runnerAge = 18;

//racetime
let raceTime = "";

//random racenumber
let raceNumber = Math.floor(Math.random() * 1000);

//generating raceNumber for adults
if(runnerAge > 18 & early === true){
	raceNumber += 1000;
}

if(runnerAge > 18 & early === true){
	raceTime = "9:30 am";
	console.log("You will run at " + raceTime + " and your race number is " + raceNumber);
}

else if(runnerAge > 18 & early === false){
	raceTime = "11:00 am";
	console.log("You will run at " + raceTime + " and your race number is " + raceNumber);
}

else if(runnerAge === 18){
	console.log("Please see the registration desk.");
}

else{
	raceTime = "12:30 pm";
	console.log("You will run at " + raceTime + " and your race number is " + raceNumber);
}

