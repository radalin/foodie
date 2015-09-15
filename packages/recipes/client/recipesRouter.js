/* Recipes */
Router.route('recipes', function() {
    Router.go('recipesIndex');
});
Router.route('recipes/index/:limit?/', {
    name: 'recipesIndex',
    controller: RecipesController,
    action: 'index',
});
Router.route('recipes/insert/', {
    name: 'recipesInsert',
    controller: RecipesController,
    action: 'insert',
});
Router.route('recipes/update/:_id?', {
    name: 'recipesUpdate',
    controller: RecipesController,
    action: 'update',
});
Router.route('recipes/view/:_id?', {
    name: 'recipesView',
    controller: RecipesController,
    action: 'view',
});
/* EOF Recipes */