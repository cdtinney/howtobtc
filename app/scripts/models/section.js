/*global HowToBTC, Backbone*/

app.Models = app.Models || {};

(function () {

    'use strict';

    app.Models.Section = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: false
        }
        
    });

})();
