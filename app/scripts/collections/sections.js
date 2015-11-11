/*global app, Backbone*/

app.Collections = app.Collections || {};

(function () {
    'use strict';

    app.Collections.Sections = Backbone.Collection.extend({
    
        initialize: function() {
            this.model = app.Models.Sections;
        }

    });

})();
