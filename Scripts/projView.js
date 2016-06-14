var projControl = {};

projControl.navDisplayToggle = function() {
  $('.globalNav').on('click', 'li', function() {
    console.log('navToggle');
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  // $('.globalNav .tab:first').click();
};

$(document).ready(function() {
  projControl.navDisplayToggle();
});
