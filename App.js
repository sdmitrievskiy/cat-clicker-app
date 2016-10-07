//let do counter first
var makeCounter = function() {
	var counter = 0;

	var counterConteiner = document.createElement('h1');
	var root = document.getElementById('root');

	counterConteiner.innerText = 'Количество кликов по кошакам: ' + counter;
	root.appendChild(counterConteiner);

	return function() {
		counter++;
		counterConteiner.innerText = 'Количество кликов по кошакам: ' + counter;
	}
};
var counter = makeCounter();

//lets do cat
var Cat = function(name, imgSrc) {
	this.name         = name;
	this.imgSrc       = imgSrc;
	this.catConteiner = null; 

	this.render();
	this.bindClickEvent();
};

Cat.prototype.render = function() {

	var root         = document.getElementById('root');
	var catConteiner = document.createElement('div');
	var catImage     = document.createElement('img');
	var catName      = document.createElement('h2');

	catName.innerText = this.name;
	catImage.setAttribute('src', this.imgSrc);

	catConteiner.appendChild(catName);
	catConteiner.appendChild(catImage);

	root.appendChild(catConteiner);

	this.catConteiner = catConteiner;
};

Cat.prototype.bindClickEvent = function() {
	this.catConteiner.addEventListener('click', function() {
		counter();
	}, false);
};

var Cat1 = new Cat('Bekki', 'cat1.jpg');
var Cat2 = new Cat('Marusya', 'cat2.jpg');