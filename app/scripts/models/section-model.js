/* Model - SectionModel */

app.Models.SectionModel = Backbone.Model.extend({

    defaults: {
        id: '',
        title: '',
        child: null,
        completed: false,
    }
    
});
