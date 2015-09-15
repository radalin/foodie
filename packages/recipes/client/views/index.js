Template.recipesIndex.helpers({

});

Template.recipesIndex.events = {
    'click #btnRemove': function(e) {
        e.preventDefault();
        var it = this._id;
        MeteorisAlert.confirm("confirm_remove", function() {
            Router.current().remove(it);
        });
    },
    /* sorting by parameter */
'click #btnSorttitle': function(e) {
MeteorisGridView.sort('title');
},
/* sorting by parameter */
'click #btnSortdesc': function(e) {
MeteorisGridView.sort('desc');
},
/* sorting by parameter */
'click #btnSortpreparation': function(e) {
MeteorisGridView.sort('preparation');
},
/* sorting by parameter */
'click #btnSortup_votes_count': function(e) {
MeteorisGridView.sort('up_votes_count');
},
/* sorting by parameter */
'click #btnSortcreated_at': function(e) {
MeteorisGridView.sort('created_at');
},
/* sorting by parameter */
'click #btnSortupdated_at': function(e) {
MeteorisGridView.sort('updated_at');
},

    'keyup #search': function(e, t) {
        e.preventDefault();
        Router.current().search(t);        
    },
    /* check all checkbox */
    'change #checkAll': function(e) {
        e.preventDefault();
        var checkboxes = $('.checkAll');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            checkboxes[i].checked = e.target.checked;
        }
    },
    /* remove all selected item */
    'click #btnRemoveAll': function(e) {
        e.preventDefault();
        var checkboxes = $('.checkAll');
        var checkedLength = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedLength++;
            }
        }

        if (checkedLength > 0) {
            MeteorisAlert.confirm("confirm_remove", function() {
                for (var i = 0; i < checkboxes.length; i++) {
                    // And stick the checked ones onto an array...
                    if (checkboxes[i].checked) {
                        Router.current().remove($(checkboxes[i]).val());
                    }
                }
            }, {count:checkedLength});
        } else {
            MeteorisFlash.set('danger', __("no_selection", "") + ".");
        }

        //set checkAll header to uncheck
        $('#checkAll').attr("checked", false);
    },
};