(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(next) {
    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
      // headers: {'Authorization': 'token ' + GITHUB_TOKEN},
      success: function(data) {
        repos.all = data;
      }
    }).done(next());
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
