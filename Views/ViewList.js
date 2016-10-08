var ViewList = {
    init: function() {
        this.listConteiner = document.getElementById('list');

        this.listConteiner.onclick = function(event) {
            this.listItemClick(event);
        }.bind(this);
    },
    render: function(cats) {
        var listTemplate = '<ul>{catNames}<ul>';
        var catTemplate = "<li data-cat-id='{index}' >{name}</li>";

        var catsHtml = '';
        cats.forEach(function(cat, index){
            catsHtml += catTemplate.replace('{index}', cat.id)
                                   .replace('{name}', cat.name);
        });
        
        this.listConteiner.innerHTML = listTemplate.replace('{catNames}', catsHtml);      
    },
    listItemClick: function(event) {
            var clickedItem = event.target;
            var catToSetId = clickedItem.getAttribute('data-cat-id');

            Controller.changeCat(catToSetId);
    }
};    