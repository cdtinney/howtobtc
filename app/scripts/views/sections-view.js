/* View - SectionsView */

app.Views.SectionsView = Backbone.View.extend({

    template: JST['app/scripts/templates/sections.ejs'],
    title: 'HowToBTC',    
    el: $("#headerContainer"),
    
    events: {},

    initialize: function () {   
        this.render();          
    },

    render: function () {        
        
        this.$el.html(this.template({
            title: this.title,
            sections: this.collection.models
        }));
        
        return this;
    },
    
    renderSection: function (id) {
    
        // Render the selected section
        var sections = this.collection.models;        
        for (var i=0; i<sections.length; i++) {
            
            if (sections[i].id == id) {
            
               new app.Views.SectionView({
                    model: sections[i]
               });
           
            }
        
        }
        
        // Set the selected section to active in the header
        this.selectSection(id);
        
    },
    
    selectSection: function(id) {
        
        $('nav li').removeClass('active');
        if (id) {
            $('nav li#' + id).addClass('active');
           
        }
    
    }
    
});
