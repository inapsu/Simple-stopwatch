
		const HoursContainer = document.getElementById("hours");
		const MinutesContainer = document.getElementById("minutes");
		const SecondsContainer = document.getElementById("seconds");
		const MillisecondsContainer = document.getElementById("milliseconds");

		const start = document.getElementById("start");
		const stop = document.getElementById("stop");
		const reset = document.getElementById("reset");
		const audio = document.getElementById("ticking");

		let hours = 00;
		let minutes = 00;
		let seconds = 00;
		let milliseconds = 00;
		let interval;

		//Check if is in mobile or not :

		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			document.getElementById("timer").style.fontSize = "2rem";
			console.log("Running in mobile")
		}
		else {
			console.log("Running in desktop")
		}

		// Timer :

		const startTimer = () =>{
			clearInterval(interval);
			interval = setInterval(startWatch, 10);
		}

		const stopTimer = () =>{
			clearInterval(interval);
		}

		const resetTimer = () =>{
			hours = 0;
			minutes = 0;
			seconds = 0;
			milliseconds = 0;

			HoursContainer.innerHTML = "00";
			MinutesContainer.innerHTML = "00";
			SecondsContainer.innerHTML = "00";
			MillisecondsContainer.innerHTML = "00";
			clearInterval(interval);
		}		

		function startWatch() {
			milliseconds++;
			if (milliseconds < 9){
				MillisecondsContainer.innerHTML = `0${milliseconds}`;
			}
			else if (milliseconds > 99) {
				if (document.getElementById("sound").checked) {
					audio.play();
				}
				milliseconds = 0;
				MillisecondsContainer.innerHTML = "00";
				seconds++;

			}
			else {
				MillisecondsContainer.innerHTML = milliseconds;
			}


			if (seconds < 10){
				SecondsContainer.innerHTML = `0${seconds}`;
			}
			else if (seconds > 59){
				seconds = 0;
				SecondsContainer.innerHTML = "00";
				minutes++;
			}
			else{
				SecondsContainer.innerHTML = seconds;
			}


			if (minutes < 10) {
				MinutesContainer.innerHTML =`0${minutes}`;
			}
			else if (minutes > 59 ) {
				minutes = 0;
				MinutesContainer.innerHTML = "00";
				hours++;
			}
			else {
				MinutesContainer.innerHTML = minutes;
			}


			if (hours < 10) {
				HoursContainer.innerHTML = `0${hours}`;
			}
			else {
				HoursContainer.innerHTML = hours;
			}

		}

		start.addEventListener("click", startTimer);
		stop.addEventListener("click", stopTimer);
		reset.addEventListener("click", resetTimer);

		// Settings

		function openSettings() {
			var sc = document.getElementById("settings");
			if (sc.style.display === "none") {
				sc.style.display = "block";
			}
			else {
				sc.style.display = "none"
			}

		}