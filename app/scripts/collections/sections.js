/*global app, Backbone*/

app.Collections = app.Collections || {};

(function () {
    'use strict';

    app.Collections.Sections = Backbone.Collection.extend({
    
        localStorage: new Backbone.LocalStorage('SectionCollection'),
    
        initialize: function() {            
            this.model = app.Models.Sections;
        }

    });

})();
