var List = function(cats) {
	this.cats      = cats;
	this.catHolder = null;
	this.named = 'sdf';

	this.render();
	this.bindListItemClickEvent();
};

List.prototype.render = function() {
	var root      = document.getElementById('root');
	var ul        = document.createElement('ul');
	var catHolder = document.createElement('div');

	catHolder.classList.add('cat-holder');
	
	this.cats.forEach(function(item, index) {
		var li = document.createElement('li');

		li.setAttribute('data-cat-id', index);
		li.innerText = item.name;
		ul.appendChild(li);
	});

	root.appendChild(ul);
	root.appendChild(catHolder);

	this.catHolder = catHolder;
};

List.prototype.bindListItemClickEvent = function() {
	var listItems = document.getElementsByTagName('li');
	var catHolder = document.getElementsByClassName('cat-holder')[0];

	[].forEach.call(listItems, function(item, index) {
		item.addEventListener('click', function() {
			var catId = item.getAttribute('data-cat-id');
			
			catHolder.innerHTML = '';
			catHolder.appendChild(this.cats[catId].catConteiner);

		}.bind(this), false);
	});
}