function init() {
	addMessageListeners();
	startTimer();
}

function startTimer() {
	chrome.runtime.sendMessage({"command": "startTimer"},
		function(response) {
			console.log(response.message);
		});
}

function addMessageListeners() {
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.command === "updateTime") {
				var time = request.time;
				document.getElementById("time").innerText = time;
			}
	});
}

document.addEventListener('DOMContentLoaded', init);