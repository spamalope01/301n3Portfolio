(function(module){


  var projControl = {};
  var booksView = {};


  // projControl.navDisplayToggle = function() {
  //   $('.globalNav').on('click', 'li', function() {
  //     $('.tab-content').hide();
  //     $('#' + $(this).data('content')).show();
  //   });
  //
  //   $('.globalNav .tab:first').click();
  // };

  projControl.navBurgerShow = function() {
    $('.icon-menu').on('click', function() {
      $('nav ul').toggle();
    });
  };

  projControl.initIndexPage = function() {
    Projects.all.forEach(function(a){
      $('#workDone').append(a.toHtml());
    });
  };

  booksView.initBookInfo = function() {
    Books.select.forEach(function(a){
      console.log(Books.select);
      $('.thingsToKnow').append(a.toHtml());
    });
  };

  $(document).ready(function() {
    // projControl.navDisplayToggle();
    projControl.navBurgerShow();
    // Projects.fetchAll();
  });
  module.projControl = projControl;
  module.booksView = booksView;
})(window);
