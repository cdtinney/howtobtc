/*global HowToBTC, Backbone, JST*/

HowToBTC.Views = HowToBTC.Views || {};

(function () {
    'use strict';

    HowToBTC.Views.Sections = Backbone.View.extend({

        template: JST['app/scripts/templates/sections.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
