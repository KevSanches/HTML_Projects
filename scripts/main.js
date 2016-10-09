var image = document.querySelector('img');

image.onclick = function() {
	var src = image.getAttribute('src');
	if (src === 'images/600_65.jpg') {
		image.setAttribute('src', 'images/tp.jpg');
	}
	if (src === 'images/tp.jpg'){
		image.setAttribute('src', 'images/600_65.jpg');
	}
}