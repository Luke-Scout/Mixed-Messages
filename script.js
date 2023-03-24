function generateNewRandomNumber(num) {
	return Math.floor(Math.random() * num);
}

let messagesObjects = {
	shouldDo: [
		"Mow the lawn",
		"Wash your dog",
		"Do the dishes",
		"Mop the floors",
		"Dust the house",
	],
	haveDone: ["Making breakfast", "Meal preping", "Grocery shopping"],
	wantToDo: ["Go on a cruise", "Go to Rome", "Go to Japan"],
};

let personalMessage = [];
for (let i = 0; i < Object.keys(messagesObjects).length; i++) {
	let messageIndex = generateNewRandomNumber(messagesObjects[Object.keys(messagesObjects)[i]].length);
	let messageItem = Object.keys(messagesObjects)[i];
	switch (messageItem) {
		case "shouldDo":
			personalMessage.push(
				`You should ${messagesObjects[messageItem][messageIndex]} soon.`
			);
			break;
		case "haveDone":
			personalMessage.push(
				`Congrats you finished ${messagesObjects[messageItem][messageIndex]}!`
			);
			break;
		case "wantToDo":
			personalMessage.push(
				`If you keep doing good you can ${messagesObjects[messageItem][messageIndex]}.`
			);
			break;
		default:
			personalMessage.push(
				"Either something went wrong, or there is not enough information."
			);
			break;
	}
}

function formatMessage() {
	let formattedMessage = personalMessage.join(" ");
	console.log(formattedMessage);
}
formatMessage();

