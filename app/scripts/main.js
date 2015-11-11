/*global app, $*/

(function(){

    window.app = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        init: function () {            
            new this.Views.Sections({
                collection: new this.Collections.Sections()
            });
        }
    };



    $(document).ready(function () {
        'use strict';
        app.init();
    });

})();
