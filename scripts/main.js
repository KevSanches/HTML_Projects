var image = document.querySelector('img');
var button = document.querySelector('button');
var heading = document.querySelector('h1');


image.onclick = function() {
	var src = image.getAttribute('src');
	if (src === 'images/600_65.jpg') {
		image.setAttribute('src', 'images/tp.jpg');
	}
	if (src === 'images/tp.jpg'){
		image.setAttribute('src', 'images/600_65.jpg');
	}
}

function Set_User_Name() {
	var userName = prompt('Please, enter your name');
	localStorage.setItem('name', userName);
	heading.textContent = 'The Police is cool, ' + userName;
}

if (!localStorage.getItem('name')) {
	Set_User_Name();
}

button.onclick = function() {
	Set_User_Name();
}