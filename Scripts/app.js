var myProj = [];


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
  // $(function () {
  console.log('start function');
  var $templateScript = $('#myWork').html();
  var theTemplate = Handlebars.compile($templateScript);
  var compiledHtml = theTemplate(oldProjects);
  $('#workDone').append(compiledHtml);
  return theTemplate(this);
};


myProj.forEach(function(a){
  $('#workDone').append(a.toHtml());
});

navDisplayToggle = function() {
  $('#globalNav').on('click', 'li', function() {
    console.log('navToggle');
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('.globalNav .tab:first').click();
};

navBurgerShow = function() {
  $('.icon-menu').on('click', function() {
    $('nav ul').toggle();
  });
};





$(document).ready(function() {
  navDisplayToggle();
  Projects.prototype.toHtml();
  navBurgerShow();
});
