(function(module) {
  var projectsController = {};
  Projects.fetchAll(projControl.initIndexPage);
  projectsController.index = function() {
    $('.tab-content').hide();
    $('#home').show();

  };

  module.projectsController = projectsController;
})(window);
