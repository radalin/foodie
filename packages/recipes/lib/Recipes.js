/**
 * This Code was created on April 2014
 * If you find any bug, unreadable code, messy code, potential bug code, etc
 * Please contact me at:
 * Ega Radiegtya / radiegtya@yahoo.co.id / 085641278479
 */

Recipes = new Mongo.Collection("recipes");

var schemas = new SimpleSchema({
    title:{
type:String,
label: 'Title',
},
desc:{
type:String,
label: 'Description',
},
preparation:{
type:String,
label: 'Preparation',
},
up_votes_count:{
type:Number,
label: 'Upvotes',
optional: true,
},
created_at:{
type:Date,
label: 'Created',
optional: true,
},
updated_at:{
type:Date,
label: 'Last Updated',
optional: true,
},

            /* AUTOVALUE */
            appId: {
                type: String,
                label: "App Id",
                autoValue: function() {
                    if (this.isInsert)
                        return App.id;
                },
            },
    createdAt: {
        type: Date,
        label: "Created Date",
        autoValue: function() {
            if (this.isInsert)
                return new Date;
        },
        denyUpdate: true,
        optional: true
    },
    updatedAt: {
        type: Date,
        label: "Updated Date",
        autoValue: function() {
            return new Date();
        },
        optional: true
    },
    createdUserId: {
        type: String,
        label: "Created by",
        autoValue: function() {
            if (this.isInsert && !this.value)
                return this.userId;
        },
        denyUpdate: true,
        optional: true
    },
    updatedUserId: {
        type: String,
        label: "Updated by",
        autoValue: function() {
            if (!this.value)
                return this.userId;
        },
        optional: true
    },
});

Recipes.attachSchema(schemas);

Recipes.allow({
    insert: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'recipes', 'insert');
        return result;
    },
    update: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'recipes', 'update');
        return result;
    },
    remove: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'recipes', 'remove');
        return result;
    },
});

//activate groundDB for recipes collection to work offline
/* uncomment to use
 Ground.Collection(Recipes);
 */

/* register helper for default relations */
Recipes.helpers({
    
    createdUser: function() {
        return Meteor.users.findOne(this.createdUserId);
    },
    updatedUser: function() {
        return Meteor.users.findOne(this.updatedUserId);
    },
});
