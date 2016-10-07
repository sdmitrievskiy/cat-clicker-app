//lets do cat
var Cat = function(name, imgSrc) {
	this.name         = name;
	this.imgSrc       = imgSrc;
	this.catConteiner = document.createElement('div');
	this.clickCounter = 0; 

	this.render();
	this.bindClickEvent();
};

Cat.prototype.render = function() {
	this.catConteiner.innerHTML = '';

	var catImage       = document.createElement('img');
	var catName        = document.createElement('h2');
	var catCounterInfo = document.createElement('h3');

	catName.innerText = this.name;
	catImage.setAttribute('src', this.imgSrc);
	catCounterInfo.innerText = 'Количество кликов по этому кошаку: ' + this.clickCounter;

	this.catConteiner.appendChild(catName);
	this.catConteiner.appendChild(catCounterInfo);
	this.catConteiner.appendChild(catImage);
};

Cat.prototype.bindClickEvent = function() {
	this.catConteiner.addEventListener('click', function() {
		this.clickCounter++;
		this.render();
	}.bind(this), false);
};