/* Model - SectionModel */

app.Models.SectionModel = Backbone.Model.extend({

    defaults: {
        id: '',
        title: '',
        view: null,
        completed: false,
    }
    
});
