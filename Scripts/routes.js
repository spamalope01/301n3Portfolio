page('/',  projectsController.index);
page('/about', aboutController.index);
page('*', function(){
  console.error("yo stuff was not here");
});

page();
