/*global HowToBTC, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.Sections = Backbone.View.extend({

        template: JST['app/scripts/templates/sections.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
