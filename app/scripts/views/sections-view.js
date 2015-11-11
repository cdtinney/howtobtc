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
        },

        render: function () {        
            
            this.$el.html(this.template({
                sections: this.collection.models
            }));
            
            return this;
        }
    });

})();
