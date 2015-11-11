/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.SectionsView = Backbone.View.extend({

        template: JST['app/scripts/templates/sections.ejs'],
        
        el: 'div',
        className: 'container',
        id: 'sections',
        
        events: {
        },

        initialize: function () {      
            this.render();            
            this.initializeSections();
        },
        
        initializeSections: function() {
            this.collection.create(new app.Models.SectionModel({
                title: 'Section One'
            }));        
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

})();
