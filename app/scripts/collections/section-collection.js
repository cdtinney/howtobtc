/*global app, Backbone*/

app.Collections = app.Collections || {};

(function () {
    'use strict';

    app.Collections.SectionCollection = Backbone.Collection.extend({
    
        localStorage: new Backbone.LocalStorage('SectionCollection'),
    
        initialize: function() {            
            this.model = app.Models.SectionModel;
            this.populate();
        },
        
        populate: function() {
        
            this.create(new app.Models.SectionModel({
                id: 'section-one',
                title: 'Introduction'
            }));        
        
            this.create(new app.Models.SectionModel({
                id: 'section-two',
                title: 'Section Two'
            }));       
        
        }

    });

})();
