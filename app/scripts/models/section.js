/*global HowToBTC, Backbone*/

HowToBTC.Models = HowToBTC.Models || {};

(function () {
    'use strict';

    HowToBTC.Models.Section = Backbone.Model.extend({

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
