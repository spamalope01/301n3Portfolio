(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
      // headers: {'Authorization': 'token ' + GITHUB_TOKEN},
      success: function(data) {
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
