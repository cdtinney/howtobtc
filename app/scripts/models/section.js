/*global HowToBTC, Backbone*/

app.Models = app.Models || {};

(function () {
    'use strict';

    app.Models.Section = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
