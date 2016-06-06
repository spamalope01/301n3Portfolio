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
  var $newProject = $('section.template').clone();
  $newProject.removeClass('template');
  console.log('i cloned it');
  $newProject.attr('data-category', this.category);
  $newProject.attr('data-author', this.author);
  $newProject.find('.projectTitle').text(this.title);
  $newProject.find('.clientName').text(this.client);
  $newProject.find('.devDate').text(this.published);
  $newProject.find('.projectDescription').html(this.description);
  $newProject.find('.techUsed').text(this.tech);
  $newProject.find('.imageProj').html(this.image);
  $newProject.append('<hr>');
  return $newProject;
  console.log($newProject);
};

oldProjects.forEach(function(ele) {
  myProj.push(new Projects(ele));
});

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

$(document).ready(function() {
  navDisplayToggle();
});
