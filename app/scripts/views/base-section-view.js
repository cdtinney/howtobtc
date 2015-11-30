/* View - BaseSectionView */

app.Views.Sections.BaseSectionView = Backbone.View.extend({

    el: '#contentContainer',
    imageElement: '#leftImg',
   
    events: {
        "click .btn-prev" : "previousPage",
        "click .btn-next" : "nextPage"    
    },

    render: function () {
    
        this.$el.html(this.template({
            title: this.model.attributes.title
        }));
        
        if (this.image) {
            $(this.imageElement).append('<img src="' + this.image + '" class="animated flip"/>');
        }
        
        return this;
        
    },
    
    cleanup: function() {
    
        /* remove elements from the DOM */
        $(this.el).empty();
        $(this.imageElement).empty();
        
        /* unbind and remove delegated events */
        this.unbind();
        this.undelegateEvents();
    
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
        
        var currPage = $(".section-page#" + pageId);
        var nextPage = $(".section-page#" + (pageId + direction));
    
        /* no more pages to display - trigger the nextSection event */
        if (nextPage.size() <= 0) {
            this.model.trigger('nextSection', this.model);
            return;
        }

        currPage.hide();
        nextPage.show();
      
    },
    
    getParentPageId: function(element) {
        return parseInt(element.closest('.section-page').attr('id'));
    }

});
