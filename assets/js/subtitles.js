$(function(){
        /*
        Pick randomly from subtitles
        */
        var subtitles = [
	" Student . ^600 Learner . ^1200 Developer.",
	" I'm a human.^800 What's your story?",  
  " Student . ^600 Learner . ^1200 Developer."
        ];
        $(".element").typed({
          strings: ["", subtitles[Math.floor((Math.random() * subtitles.length))]],
          typeSpeed: 10,
          backDelay: 10,
        });
      });
function blinker() {
	$('.blinking').fadeOut(500);
	$('.blinking').fadeIn(500);
}
setInterval(blinker, 1000);
