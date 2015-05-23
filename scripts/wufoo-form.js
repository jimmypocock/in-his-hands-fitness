$(document).on('ready', function(){


  $('form.wufoo').on('submit', function(e){

    var $email = $('.wufoo input[type="email"]'),
        $submit = $('.wufoo input[type="submit"]'),
        $form = $('form.wufoo'),
        $errors = $('.wufoo .errors');

    if ($email.val() === ""){
      e.preventDefault();
      $errors.append('<label>An email address is required.</label>');
      return false;
    } else {
      $email.remove();
      $submit.remove();
      $('.wufoo .row').append('<h4>Thank you for signing up. Please check your email for our response within 24 hours.</h4>');
    }
  });
});