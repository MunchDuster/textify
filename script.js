const loopLength = document.getElementById("looplength");
const textarea = document.getElementById("text");
const loopsCheck = document.getElementById("loops");
const txtColorButton = document.getElementById("coloring");
function colorise() {
  const msg = textarea.innerText;
  textarea.innerHTML = "";
  var loopLengths = parseInt(loopLength.value);
  var spacePlaces = [];

  const selected = document.querySelector('input[name="op"]:checked').value;

  switch (selected) {
    case "rainbow":
      for (var i = 0; i < msg.length; i++) {
        if (msg[i] != " ") {
          var h = (359 * i) / (msg.length - 1);
          var ndiv = document.createElement("div");
          ndiv.style.display = "inline-block";
          ndiv.style.margin = '0px';
          ndiv.style.color = "hsl(" + h + ",100% , 50%)";
          ndiv.innerText = msg[i];
          textarea.appendChild(ndiv);
        } else {
          textarea.append(" ");
        }
      }
      break;
    case "loops":
      for (var i = 0; i < msg.length; i++) {
        if (msg[i] != " ") {
          var h = ((i % loopLengths) * 359) / loopLengths;
          var ndiv = document.createElement("div");
          ndiv.style.display = "inline-block";
          ndiv.style.margin = '0px';
          ndiv.style.color = "hsl(" + h + ",100% , 50%)";
          ndiv.innerText = msg[i];
          textarea.appendChild(ndiv);
        } else {
          textarea.append(" ");
        }
      }
      break;
    case "random":
      for (var i = 0; i < msg.length; i++) {
        if (msg[i] != " ") {
          var h = Math.random() * 359;
          var ndiv = document.createElement("div");
          ndiv.style.display = "inline-block";
          ndiv.style.margin = '0px';
          ndiv.style.color = "hsl(" + h + ",100% , 50%)";
          ndiv.innerText = msg[i];
          textarea.appendChild(ndiv);
        } else {
          textarea.append(" ");
        }
      }
      break;
    case "color":
      textarea.innerHTML = msg;
      textarea.style.color = txtColorButton.value;
      break;
    default:
      alert("text coloring error.");
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
function hideshow(obj) {
  obj.style.display = obj.style.display == 'inline-block' ? 'none' : 'inline-block';
}
function setFont(fontinput) {
  var fontname = fontinput.innerText;
  var stylesheet = document.getElementById("fontheader");

  if (!document.fonts.check("16px " + fontname)) {
    addWarning(fontinput, "Could not load font");
  } else {
    stylesheet.href = "https://fonts.googleapis.com/css2?family=//" + fontname.replace(/ /i, '+') + '&display=swap';
    Array.from(document.getElementsByClassName("texter")).forEach((ele) => {
      ele.style.fontFamily = fontname;
    });
  }
  /*
  document.fonts.load("16px " + fontname).then((success) => {
    alert("duck");
     stylesheet.href = "https://fonts.googleapis.com/css2?family=//" + fontname.replace(/ /i, '+') + '&display=swap';
    Array.from(document.getElementsByClassName("texter")).forEach((ele) => {
      ele.style.fontFamily = fontname;
    });
   }, (error) => {
    alert(error);
   });
   */
  document.body.style.fontSize = document.getElementById("fontsize").value + 'px';
}
function addWarning(ele, msg) {
  var newdiv = document.createElement('div');
  newdiv.style.height = '30px';
  newdiv.style.width = 'max-content';
  newdiv.style.backgroundColor = '505000';
  newdiv.style.color = 'white';
  newdiv.innerText = msg;
  ele.parentNode.insertBefore(newdiv, ele.nextSibling);
  setTimeout(() => { ele.parentNode.removeChild(newdiv); }, 2000);
}
function setBGColor(colorinput) {
  if (isValidColor(colorinput.innerText)){
    Array.from(document.getElementsByClassName("texter")).forEach((ele) => {
      ele.style.backgroundColor = colorinput.innerText;
    });
  } else {
    addWarning(colorinput, "Could not set color");
  }
}
function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;

  // return 'false' if color wasn't assigned
  return s.color == strColor.toLowerCase();
}

var curSelected = null;
Array.from(document.getElementsByClassName("rowButton")).forEach((ele) => {
  ele.addEventListener('click', () => {
    if (curSelected != null) {
      if (curSelected != ele) {
        curSelected.click();
        curSelected = ele;
      } else {
        curSelected = null;
      }
    }else {
        curSelected = ele;
      }
  });
});
