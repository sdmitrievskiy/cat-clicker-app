var ViewAdmin = {
    init: function() {
        this.adminConteiner = document.getElementById('admin');
        this.adminOpenBtn   = document.querySelector('#admin .admin__open-btn');

        this.adminForm      = document.querySelector('#admin form');
        this.adminCancelBtn = document.querySelector('#admin .admin__cancel-btn');
        this.adminSubmitBtn = document.querySelector('#admin .admin__submit-btn');

        this.adminFieldName       = document.querySelector('#admin input[name=name]');
        this.adminFieldImage      = document.querySelector('#admin input[name=image]');
        this.adminFieldClickCount = document.querySelector('#admin input[name=clickCount]');

        this.bindEvents();
    },
    render: function(visible) {
        if (visible) {
            this.adminForm.style.display = 'block';
        } else {
            this.adminForm.style.display = 'none';
        }
    },
    bindEvents: function() {
        this.adminOpenBtn.onclick = function() {
            Controller.showAdminMode();
        };

        this.adminCancelBtn.onclick = function(event) {
            event.preventDefault();
            Controller.closeAdminMode();
        };

        this.adminSubmitBtn.onclick = function(event) {
            event.preventDefault();

            var name       = this.adminFieldName.value;
            var image      = this.adminFieldImage.value;
            var clickCount = this.adminFieldClickCount.value;
            
            this.adminFieldName.value = '';
            this.adminFieldImage.value = '';
            this.adminFieldClickCount.value = '';

            Controller.addNewCat(name, image, clickCount);
        }.bind(this);
    }
};    