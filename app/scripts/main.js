/* App - global */

window.app = {

    Models: {},
    Collections: {},
    Views: { Sections: {} },
    Router: null,
    
    init: function () {       
        
        // Initialize the router
        new this.Router();
        
    }
    
};

$(document).ready(function () {
    app.init();
});
