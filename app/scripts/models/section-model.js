/*global HowToBTC, Backbone*/

app.Models = app.Models || {};

(function () {

    'use strict';

    app.Models.SectionModel = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: false
        }
        
    });

})();
