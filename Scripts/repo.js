(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/spamalope01/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + GITHUB_TOKEN},
      success: function(data) {
        repos.all = data;
      }
    });
    callback();
  };

  module.repos = repos;
})(window);
