'use strict';

// Display data on the dash board
function displayData(timeFrame) {
	// Fetch data from server
	fetch("./data.json")
		.then((response) => response.json())
		.then((data) => {
			const hoursLabels = document.querySelectorAll(".hours");
			const lastTrackLabels = document.querySelectorAll(".last-track");
			for (let i = 0; i < data.length; i++) {
				hoursLabels[i].innerHTML = "" + data[i]["timeframes"][timeFrame]["current"] + "hrs";
				lastTrackLabels[i].innerHTML = "Last " + timeFrame + " - " + data[i]["timeframes"][timeFrame]["previous"] + "hrs";
			}
		})
		.catch ((err) => alert("Data inaccessible."));
}

// Assign elements their respective events
function loadEvents() {
	let dailyTrackBtn = document.querySelector("#daily-btn");
	let weeklyTrackBtn = document.querySelector("#weekly-btn");
	let monthlyTrackBtn = document.querySelector("#monthly-btn");

	weeklyTrackBtn.checked = true;
	displayData("weekly");
	
	dailyTrackBtn.addEventListener("change", () => {
		displayData("daily");
	});

	weeklyTrackBtn.addEventListener("click", () => {
		displayData("weekly");
	});

	monthlyTrackBtn.addEventListener("click", () => {
		displayData("monthly");
	});
}

loadEvents();
