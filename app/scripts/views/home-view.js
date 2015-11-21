/* View - HomeView */

app.Views.HomeView = Backbone.View.extend({

    template: JST['app/scripts/templates/home.ejs'],
    el: '#contentContainer',

    events: {},

    initialize: function () {
        /* do nothing */
    },

    render: function () {
        
        this.$el.html(this.template({
            initialSectionId: this.initialSectionId  
        }));
        
        return this;
        
    },
    
    setInitialSectionId (id) {
        this.initialSectionId = id;
    }

});
