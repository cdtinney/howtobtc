/* View - GettingStartedView */

app.Views.Sections.GettingStartedView = Backbone.View.extend({

    template: JST['app/scripts/templates/getting-started.ejs'],
    el: '#contentContainer',
   
    events: {
        "click .btn-prev" : "previousPage",
        "click .btn-next" : "nextPage"    
    },

    initialize: function () {
        this.render();   
    },

    render: function () {
    
        this.$el.html(this.template({
            title: this.model.attributes.title
        }));
        
        return this;
        
    },
    
    previousPage: function(event) {
        this.switchPage($(event.target), -1);
    },
    
    nextPage: function(event) {
        this.switchPage($(event.target), 1);
    },
    
    switchPage: function(element, direction) {
    
        var element = $(event.target);
        var pageId = this.getParentPageId(element);
        
        var currPage = $("#" + pageId);
        var nextPage = $("#" + (pageId + direction));
    
        if (nextPage.size() <= 0) return;

        currPage.hide();
        nextPage.show();
      
    },
    
    getParentPageId: function(element) {
        return parseInt(element.closest('.section-page').attr('id'));
    }

});
