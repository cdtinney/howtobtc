/*global app, $*/

(function(){

    window.app = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        init: function () {            
            new this.Views.SectionsView({
                collection: new this.Collections.SectionCollection()
            });
        }
    };

    $(document).ready(function () {
        'use strict';
        app.init();
    });

})();
