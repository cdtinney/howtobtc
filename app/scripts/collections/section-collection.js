/* Collection - SectionModel */

app.Collections.SectionCollection = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('SectionCollection'),

    initialize: function() {            
        this.model = app.Models.SectionModel;
        this.populate();
    },
    
    populate: function() {
    
        this.create(new app.Models.SectionModel({
            id: 'introduction',
            title: 'Introduction',
            view: app.Views.Sections.GettingStartedView
        }));        
    
        this.create(new app.Models.SectionModel({
            id: 'wallet',
            title: 'The wallet'
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
