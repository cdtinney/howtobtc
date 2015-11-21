/* Primary router */

app.Router = Backbone.Router.extend({
    
        view: null,
        
        initialize: function() {
            
            // Initialize the SectionsView container
            this.view = new app.Views.SectionsView({
                collection: new app.Collections.SectionCollection()
            });
        
            // Begin monitoring routes (note: this needs to be done AFTER initializing the container view)
            Backbone.history.start();
            
        },
      
        routes: {
            '(/)' : 'home',
            'home' : 'home',
            'section/:id': 'section'      
        },
        
        home : function() {               
            this.view.renderHome();      
        },
        
        section: function(id) {
            this.view.renderSection(id);
        }
       
});