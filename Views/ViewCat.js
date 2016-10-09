var ViewCat = {
    init: function() {
        this.catConteiner = document.getElementById('cat');

        this.catConteiner.onclick = function(event) {
            if (event.target.tagName == 'IMG') {
                this.imageClick();
            }
        }.bind(this);
    },
    render: function(catData) {
        var template = "<h2>{name}</h2><p>{clickCount}</p><img src='{image}' />";

        var catView = template.replace( '{name}',       catData.name )
                              .replace( '{clickCount}', catData.clickCount )
                              .replace( '{image}',      catData.image );
        
        this.catConteiner.innerHTML = catView;                              
    },
    imageClick: function() {
        Controller.incrementCounter();
    }
};    