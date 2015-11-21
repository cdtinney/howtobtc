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
    
    renderHome: function() {
        
        $("#contentContainer").empty();
        var home = new app.Views.HomeView();
        home.setInitialSectionId(this.collection.at(0).id);
        home.render();
        
    },
    
    renderSection: function (id) {
    
        // Search the collection for a model with a matching ID
        var section = this.collection.get(id);
        if (section == undefined) {
            return;
        }
               
        // Clear the content of the previous section
        $("#contentContainer").empty();
    
        // Add content of the new section
        var view = section.attributes.view;                
        if (view != null){                
           new view( { model: section } );                
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
