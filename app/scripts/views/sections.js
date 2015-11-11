/*global HowToBTC, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.Sections = Backbone.View.extend({

        template: JST['app/scripts/templates/sections.ejs'],
        el: 'section',
        id: 'test',
        events: {},

        initialize: function () {      
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
