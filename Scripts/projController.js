(function(module) {
  var projectsController = {};
  // Projects.createTable();
  Projects.fetchAll(projControl.initIndexPage);

  projectsController.index = function() {
    $('.tab-content').hide();
    $('#home').show();

  };

  module.projectsController = projectsController;
})(window);
