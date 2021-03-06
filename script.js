const loopLength = document.getElementById("looplength");
const textarea = document.getElementById("text");
const rainbowCheck = document.getElementById("rainbow");
const loopsCheck = document.getElementById("loops");

function colorise() {
  const msg = textarea.innerText;
  textarea.innerHTML = "";
  var loopLengths = parseInt(loopLength.value);
  var spacePlaces = [];
  for (var i = 0; i < msg.length; i++) {
    if (msg[i] != " ") {
      var h;
      if (rainbowCheck.checked) {
        h = (359 * i) / (msg.length - 1);
      } else if (loopsCheck.checked) {
        h = ((i % loopLengths) * 359) / loopLengths;
      } else {
        h = Math.random() * 359;
      }

      var ndiv = document.createElement("div");
      ndiv.style.display = "inline-block";
      ndiv.style.color = "hsl(" + h + ",100% , 50%)";
      ndiv.innerText = msg[i];
      textarea.appendChild(ndiv);
    } else {
      textarea.append(" ");
    }
  }
}
function uncolorise() {
  const msg = textarea.innerText;
  textarea.innerHTML = msg;
  textarea.style.color = "white";
}
function copyText() {
	console.log('called');
	/* Get the text field */
 	var range = document.createRange();
	range.selectNode(textarea);
	window.getSelection().removeAllRanges(); // clear current selection
	
	console.log(range);
	
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges(); // to deselect
	
	
  /* Alert the copied text */
}