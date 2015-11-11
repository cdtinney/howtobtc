/*global HowToBTC, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.Sections = Backbone.View.extend({

        template: JST['app/scripts/templates/sections.ejs'],

        tagName: '#test',

        id: '',

        className: '',

        events: {},

        initialize: function () {      
            this.render();
        },

        render: function () {
            /* TODO - Should "return" this, but it causes errors */
            this.$el.html(this.template(this.collection.toJSON()));
        }

    });

})();
