var MainImage = document.querySelector('img');

MainImage.onclick = function() {
    var mySrc = MainImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      MainImage.setAttribute ('src','images/penta.png');
    } else {
      MainImage.setAttribute ('src','images/logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
