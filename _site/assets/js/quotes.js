
(function() {
  "use strict";
  var quotes = [
["Every second is a second chance",""],
["Every happiness is a hostage to fortune.","- Arthur Helps"],
["Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.","- Mother Teresa"],
["Sometimes it’s healthy to stop for a moment and look in the mirror and realize you have made it this far.",""],
["the lyf so short, the craft so long to lerne.","- Chaucer"],
["dubito, ergo cogito, ergo sum",""],
["It is never too late to be what you might have been.","- George Eliot"]
["You only live once, but if you do it right, once is enough.","- Mae West"],
["Start where you are. Use what you have. Do what you can.","- ArthurAshe"],
["Flowers bloom for no one but themselves. Be like a flower; bloom only for yourself and do not worry that you are different.","- Reverie Hippie"]
  ].sort(function() {
    return 0.5 - Math.random();
  }),
    quotesHTML = "";
    var i = 0;
    quotesHTML += "<br><h4 style =\"font-size: 1.3rem; margin-top: 6rem; margin-bottom: 6rem; line-height: 1.6; color: #7C909B;\">&ldquo;" + quotes[i][0] + "&rdquo; <em style = \"color: #3C4C55\"> " + quotes[i][1] + "</em></h4>";
    document.getElementById("quotes").innerHTML = quotesHTML;
}());

