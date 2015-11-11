/*global HowToBTC, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.Sections = Backbone.View.extend({

        template: JST['app/scripts/templates/sections.ejs'],

        el: 'body',

        id: '',

        className: '',

        events: {},

        initialize: function () {      
            this.render();
        },

        render: function () {
            return this.$el.html(this.template());
        }

    });

})();
