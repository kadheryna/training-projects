const workHours = document.getElementById("work-hours");
const previousWork = document.getElementById("previous-work");

const playHours = document.getElementById("play-hours");
const previousPlay = document.getElementById("previous-play");

const studyHours = document.getElementById("study-hours");
const previousStudy = document.getElementById("previous-study");

const exerciseHours = document.getElementById("exercise-hours");
const previousExercise = document.getElementById("previous-exercise");

const socialHours = document.getElementById("social-hours");
const previousSocial = document.getElementById("previous-social");

const selfCareHours = document.getElementById("selfCare-hours");
const previousSelfCare = document.getElementById("previous-selfCare");

const dailyButton = document.getElementById("daily-button");
const weeklyButton = document.getElementById("weekly-button");
const monthlyButton = document.getElementById("monthly-button");

let activeButton = weeklyButton;

const activitiesData = {
	work: {
		timeFrames: {
			daily: {
				current: 5,
				previous: 7,
			},
			weekly: {
				current: 32,
				previous: 36,
			},
			monthly: {
				current: 103,
				previous: 128,
			},
		},
	},

	play: {
		timeFrames: {
			daily: {
				current: 1,
				previous: 2,
			},
			weekly: {
				current: 10,
				previous: 8,
			},
			monthly: {
				current: 23,
				previous: 29,
			},
		},
	},

	study: {
		title: "Study",
		timeFrames: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 7,
			},
			monthly: {
				current: 13,
				previous: 19,
			},
		},
	},

	exercise: {
		title: "Exercise",
		timeFrames: {
			daily: {
				current: 1,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 5,
			},
			monthly: {
				current: 11,
				previous: 18,
			},
		},
	},
	social: {
		title: "Social",
		timeFrames: {
			daily: {
				current: 1,
				previous: 3,
			},
			weekly: {
				current: 5,
				previous: 10,
			},
			monthly: {
				current: 21,
				previous: 23,
			},
		},
	},
	selfCare: {
		title: "Self Care",
		timeFrames: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 2,
				previous: 2,
			},
			monthly: {
				current: 7,
				previous: 11,
			},
		},
	},
};

function updateActivityValues(type, message) {
	Object.keys(activitiesData).forEach(activity => {
		const timeFrames = activitiesData[activity].timeFrames[type];
		if (timeFrames && "current" in timeFrames && "previous" in timeFrames) {
			const current = timeFrames.current;
			const previous = timeFrames.previous;
			const currentElement = document.getElementById(`${activity}-hours`);
			const previousElement = document.getElementById(`previous-${activity}`);
			currentElement.innerText = `${current}hrs`;
			previousElement.innerText = `Last ${message} - ${previous}hrs`;
		}
	});
}

dailyButton.addEventListener("click", () => {
	updateActivityValues("daily", "day");
});

weeklyButton.addEventListener("click", () => {
	updateActivityValues("weekly", "week");
});
updateActivityValues("weekly", "week");

monthlyButton.addEventListener("click", () => {
	updateActivityValues("monthly", "month");
});
