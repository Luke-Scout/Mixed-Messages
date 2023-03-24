function generateNewRandomNumber(num) {
	return Math.floor(math.random() * num);
}
// generates new random number with-in 0-num when called
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
for (let i = 0; i < messagesObjects.length; i++) {
	let messageIndex = messagesObjects[i].length;
	let messageItem = messagesObjects[i];
	switch (messageItem) {
		case "shouldDo":
			personalMessage.push(
				`You should ${messagesObjects[i][messageIndex]} right now.`
			);
		case "haveDone":
			personalMessage.push(
				`Congrats you finished ${messagesObjects[i][messageIndex]}!`
			);
		case "wantToDo":
			personalMessage.push(
				`If you keep doing good you can ${messagesObjects[i][messageIndex]}.`
			);
		default:
			personalMessage.push(
				"Either something went wrong, or there is not enough information."
			);
	}
}

function formatMessage() {
	let formattedMessage = personalMessage.join("/ ");
	console.log(formattedMessage);
}
formatMessage();
