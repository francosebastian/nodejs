'use strict';
module.exports = function (app) {
    var courseController = require('../controllers/courseController.js');
    var profileController = require('../controllers/profilesController');
    var userController = require('../controllers/userController');

    //Course Controller
    app.route('/courses')
        .get(courseController.list_all_courses)
        .post(courseController.create_a_course);

    app.route('/courses/:course_id')
        .get(courseController.read_a_course)
        .put(courseController.update_a_course)
        .delete(courseController.delete_a_course);

    // Profiles Routes
    app.route('/profiles')
        .get(profileController.list_all_profiles)
        .post(profileController.create_a_profile);

    app.route('/profiles/:profile_id')
        .get(profileController.read_a_profile)
        .put(profileController.update_a_profile)
        .delete(profileController.delete_a_profile);

    //User Controller
    app.route('/users')
        .get(userController.list_all_profiles)
        .post(userController.create_a_user);

    app.route('/users/:user_id')
        .get(userController.read_a_user)
        .put(userController.update_a_user)
        .delete(userController.delete_a_user);
};