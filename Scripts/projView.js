var projControl = {};


projControl.navDisplayToggle = function() {
  $('.globalNav').on('click', 'li', function() {
    console.log('navToggle');
    $('.tab-content').hide();
    console.log($(this).data('content'));
    $('#' + $(this).data('content')).show();
  });

  $('.globalNav .tab:first').click();
};

projControl.navBurgerShow = function() {
  $('.icon-menu').on('click', function() {
    $('nav ul').toggle();
  });
};

projControl.initIndexPage = function() {
  console.log('initIndexPage is running');
  Projects.all.forEach(function(a){
    $('#workDone').append(a.toHtml());
  });
};

$(document).ready(function() {
  projControl.navDisplayToggle();
  projControl.navBurgerShow();
  // projControl.initIndexPage();
  Projects.fetchAll();
});
