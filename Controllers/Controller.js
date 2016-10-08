var Controller = {
	init: function() {
		ModelCat.init();
		ViewList.init();
		ViewList.render( ModelCat.getCatsList() );
		ViewCat.init();
	},
	changeCat: function(newCatId) {
		ModelCat.setCurrentCat(newCatId);
		ViewCat.render( ModelCat.getCurrentCat() );
	},
	incrementCounter: function() {
		ModelCat.incrementCurrenCatCounter();
		ViewCat.render( ModelCat.getCurrentCat() );
	}
};