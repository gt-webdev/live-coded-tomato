function init() {
	addClickHandlers();
}

function addClickHandlers() {
	var buttonsDiv = document.getElementById("pomodoro-selection");
	var buttons = buttonsDiv.children;
	Array.prototype.forEach.call(buttons, function(button) {
		button.onclick = function(event) {
			var specificButton = event.target;
			var timeSelected = +specificButton.innerText;
			localStorage["pomodoro-selection"] = timeSelected;
		}
	});
}

document.addEventListener('DOMContentLoaded', init);
