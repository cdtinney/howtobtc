var ViewManager = {

    headerView: null,
    currentSection: null,
    
    initialize: function(headerView) {
        this.headerView = headerView;
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
    
        /* no more pages to display - trigger the completed event */
        if (nextPage.size() <= 0) {
            this.model.set("completed", true);
            return;
        }

        currPage.hide();
        nextPage.show();
      
    },
    
    getParentPageId: function(element) {
        return parseInt(element.closest('.section-page').attr('id'));
    }
    
}