/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.Section = Backbone.View.extend({

        template: JST['app/scripts/templates/section.ejs'],

        el: 'div',
        className: 'section',

        events: {
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
