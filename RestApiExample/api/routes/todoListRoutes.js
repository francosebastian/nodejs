'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/profiles')
        .get(todoList.list_all_profiles)
        .post(todoList.create_a_profile);

    app.route('/profiles/:profileId')
        .get(todoList.read_a_profile)
        .put(todoList.update_a_profile)
        .delete(todoList.delete_a_profile);
};