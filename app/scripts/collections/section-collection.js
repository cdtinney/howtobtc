/* Collection - SectionModel */

app.Collections.SectionCollection = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('SectionCollection'),

    initialize: function() {            
        this.model = app.Models.SectionModel;
        this.populate();
    },
    
    populate: function() {
    
        this.create(new app.Models.SectionModel({
            id: 'getting-started',
            title: 'Getting Started',
            view: app.Views.Sections.GettingStartedView
        }));        
    
        this.create(new app.Models.SectionModel({
            id: 'wallet',
            title: 'The Wallet'         
        }));    
    
        this.create(new app.Models.SectionModel({
            id: 'blockchain',
            title: 'The Blockchain'         
        }));       
    
        this.create(new app.Models.SectionModel({
            id: 'mining',
            title: 'Mining'         
        }));            
        
    }

});
