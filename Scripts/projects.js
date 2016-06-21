// var myProj = [];
(function (module) {


  function Projects (proj){
    this.title = proj.title;
    this.client = proj.client;
    this.author = proj.author;
    this.published = proj.published;
    this.description = proj.description;
    this.tech = proj.tech;
    this.image = proj.image;
    this.category = proj.category;
  }

  Projects.prototype.toHtml = function() {
    var theTemplate = Handlebars.compile($('#myWork').html());
    return theTemplate(this);
  };

  Projects.all = [];

  Projects.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      Projects.all.push(new Projects(ele));
    });
  };


  Projects.fetchAll = function() {
    if (localStorage.rawData) {
      Projects.loadAll(JSON.parse(localStorage.rawData));
      projControl.initIndexPage();

    } else {
      $.getJSON('Data/projects.json', function(rawData) {
        Projects.loadAll(rawData);
        var cache = JSON.stringify(rawData);
        localStorage.setItem('rawData', cache);
        projControl.initIndexPage();
      });
    }
  };
  module.Projects = Projects;
})(window);
