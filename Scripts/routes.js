page('/', projectsController.index,
projControl.fetchAll,
projControl.loadAll,
projControl.initIndexPage);

page('/about', aboutController.index);

page('*', function(){
  console.error("yo stuff was not here");
});

page();
