(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = byeSpeaker;

})(window);
