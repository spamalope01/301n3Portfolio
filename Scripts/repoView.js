(function(module) {
  var repoView = {};

  var repoShow = function() {
    var $about = $('.about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

    repoView.index = function() {
      var render = Handlebars.compile($('#gHub').html());
      repoShow();
      console.log('compiled the handlebars');

      $('#repos ul').append(
        repos.with('name').map(render)
      );
    };

  module.repoView = repoView;
})(window);
