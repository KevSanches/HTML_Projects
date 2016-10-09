var image = document.querySelector('img');

image.onclick = function() {
	var src = image.getAttribute('src');
	if (src === 'images/600_65.jpg') {
		image.setAttribute('src', 'images/tp.jpg');
	}
	else {
		image.setAttribute('src', '600_65.jpg');

	}
}