/* View - SectionView */

app.Views.SectionView = Backbone.View.extend({

    template: JST['app/scripts/templates/section.ejs'],
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