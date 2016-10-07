var cat          = document.getElementById('cat');
var counterField = document.getElementById('counter');
var clickCounter = 0;

cat.addEventListener('click', function() {
	clickCounter++;
	console.log(clickCounter);
	counterField.innerHTML = clickCounter;
}, false);