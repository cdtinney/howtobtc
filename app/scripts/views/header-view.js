/* View - HeaderView */

app.Views.HeaderView = Backbone.View.extend({

    template: JST['app/scripts/templates/header-template.ejs'],
    title: 'HowToBTC',    
    el: $("#headerContainer"),
    
    events: {},
    
    currentView: null,
    
    initialize: function () {   
    
        this.listenTo(this.collection, 'nextSection', this.nextSection);
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
        
        /* cleanup current section view */
        this.closeCurrentSection();
        
        /* create the home view */
        var home = new app.Views.HomeView();
        home.setInitialSectionId(this.collection.at(0).id);
        home.render();
        
        /* clear active tab */
        this.setActiveSection();
        
        /* set home tab to active */
        $('#home').addClass('active');
        
    },
    
    renderSection: function (id) {
    
        /* cleanup current section view */
        this.closeCurrentSection();
    
        /* search the collection for a model with a matching ID */
        var section = this.collection.get(id);
        if (section == undefined) {
            return;
        }
    
        /* create and render the new view */
        var view = section.attributes.view;                
        if (view != undefined){                
            this.currentView = new view({ model: section });     
            this.currentView.render(); 
        }
        
        /* set the selected section to active in the header */
        this.setActiveSection(id);
        
    },
    
    setActiveSection: function(id) {
        
        $('nav li, #home').removeClass('active');        
        if (id) {
            $('nav li#' + id).addClass('active');
        }
    
    },
    
    nextSection: function(currentSection) {
        
        /* move to the next section, if possible */
        var index = this.collection.indexOf(currentSection);
        var next = this.collection.at(index + 1);
        if (next != undefined) {        
        
            /* update the URL - router will handle view change */
            Backbone.history.navigate("#section/" + next.id, {trigger: true, replace: true});    
            
        }
    
    },
    
    closeCurrentSection: function() {
        
        /* clean up the current view */
        if (this.currentView != undefined && this.currentView.cleanup) {
            this.currentView.cleanup();
            this.currentView = undefined;
        }
    
    }
    
});
