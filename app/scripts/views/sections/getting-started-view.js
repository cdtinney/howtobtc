/* View - GettingStartedView */

app.Views.Sections.GettingStartedView = Backbone.View.extend({

    template: JST['app/scripts/templates/getting-started.ejs'],
    el: '#contentContainer',
   
    events: {},

    initialize: function () {
        this.render();   
    },

    render: function () {
    
        this.$el.html(this.template({
            title: this.model.attributes.title
        }));
        
        return this;
        
    }

});
