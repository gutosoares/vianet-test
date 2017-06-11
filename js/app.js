$(document).ready(function() {
  $('.destaques-link a').first().addClass('active');
  $('.destaques .destaques-container').first().addClass('active');

  $('.destaques-link a').click(function(e) {
    e.preventDefault();
    var destaqueId = $(this).attr('href');

    $('.destaques-link a, .destaques .destaques-container').removeClass('active');
    
    $(this).addClass('active');
    $(destaqueId).addClass('active');
  });

  $('.destaques-footer a').click(function(e) {
    e.preventDefault();
    $('#modal').fadeIn(300);
  });

  $('.close, #modal').click(function(e) {
    if(e.target !== this) {
      return;
    }
    $('#modal').fadeOut(100);
  });
});
