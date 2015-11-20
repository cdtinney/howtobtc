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
            'section/:id': 'section'
        },
        
        home : function() {       
            console.log('[router] home');            
            this.view.render();            
        },
        
        section: function(id) {
            console.log('[router] section id = ' + id);
            this.view.renderSection(id);
            
        }
       
});