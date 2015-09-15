Template.recipes_form.rendered = function() {
    $('#created_at').datepicker();$('#updated_at').datepicker();
};

Template.recipes_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(Recipes, field);
    },
    /* get current selected dropdown */
    selected: function(_id) {
        if (this._id === _id)
            return "selected";
    },
    
});