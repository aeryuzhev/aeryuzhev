/*Смена изображения по клику по изображению*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/rick_and_morty_1.png') {
    myImage.setAttribute('src', 'images/rick_and_morty_2.png');
  } else {
    myImage.setAttribute('src', 'images/rick_and_morty_1.png');
  }
}

/*Смена пользователя по нажатию кнопки*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('.userName');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if (myName) {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Current user: ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();  
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Current user: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}