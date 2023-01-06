$(".button-container").click(function() {
	var audio_name = $(this).find('img').attr('alt');
	var audio = document.getElementById(audio_name);

	if (!audio.paused) {
	    audio.pause()
	    audio.currentTime = 0;
	 } else {
	    audio.play();
	 }

});