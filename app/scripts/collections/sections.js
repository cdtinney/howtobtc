/*global Test, Backbone*/

Test.Collections = Test.Collections || {};

(function () {
    'use strict';

    Test.Collections.Sections = Backbone.Collection.extend({

        model: Test.Models.Sections

    });

})();
