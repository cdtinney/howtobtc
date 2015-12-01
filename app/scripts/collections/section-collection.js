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
            title: 'Wallet',
            view: app.Views.Sections.WalletView
        }));    
    
        this.create(new app.Models.SectionModel({
            id: 'transactions',
            title: 'Transactions',
            view: app.Views.Sections.TransactionsView       
        }));     
    
        this.create(new app.Models.SectionModel({
            id: 'blockchain',
            title: 'Blockchain',         
            view: app.Views.Sections.BlockchainView      
        }));       
    
        this.create(new app.Models.SectionModel({
            id: 'mining',
            title: 'Mining',
            view: app.Views.Sections.MiningView                 
        }));            
        
    }

});
