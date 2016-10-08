var CatsJSON = '[{"id": "1","name": "Бекки 1","image": "images/cat1.jpg","clickCount": "0"},{"id": "2","name": "Бекки 2","image": "images/cat2.jpg","clickCount": "0"},{"id": "3","name": "Бекки 3","image": "images/cat3.jpg","clickCount": "0"},{"id": "4","name": "Бекки 4","image": "images/cat4.jpg","clickCount": "0"},{"id": "5","name": "Бекки 5","image": "images/cat5.jpg","clickCount": "0"}]';

var ModelCat = {
	init: function() {
		this.cats = JSON.parse(CatsJSON);
	},
	setCurrentCat: function(currentCatId) {
		this.currentCatId = currentCatId;
	},
	getCurrentCat: function() {
		var currentCatId = this.currentCatId;

        var currentCat = this.cats.filter(function(cat) {
            return (cat.id === currentCatId);
        });

        return currentCat[0];
	},
	getCatsList: function() {
		return this.cats;
	},
	incrementCurrenCatCounter: function() {
		var currentCatId = this.currentCatId;

		var currentCat = this.cats.filter(function(cat) {
            return (cat.id === currentCatId);
        });

        currentCat[0].clickCount++;

	}	
};