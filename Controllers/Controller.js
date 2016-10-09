var Controller = {
	init: function() {
		ModelCat.init();
		ModelCat.setCurrentCat(1);

		ViewList.init();
		ViewList.render( ModelCat.getCatsList() );

		ViewCat.init();
		ViewCat.render( ModelCat.getCurrentCat() );

		ViewAdmin.init();
		ViewAdmin.render(false);
	},
	changeCat: function(newCatId) {
		ModelCat.setCurrentCat(newCatId);
		ViewCat.render( ModelCat.getCurrentCat() );
	},
	addNewCat: function(name, image, clickCount) {
		var newCatId = ModelCat.addNewCat(name, image, clickCount);
		ModelCat.setCurrentCat(newCatId);

		ViewList.render( ModelCat.getCatsList() );
		ViewCat.render( ModelCat.getCurrentCat() );
		ViewAdmin.render(false);
	},
	incrementCounter: function() {
		ModelCat.incrementCurrenCatCounter();
		ViewCat.render( ModelCat.getCurrentCat() );
	},
	showAdminMode: function() {
		ViewAdmin.render(true);
	},
	closeAdminMode: function() {
		ViewAdmin.render(false);
	}
};