'use strict';

$(document).on('ready', function(){
  $('form.wufoo').on('submit', function(e){
    var $email = $('.wufoo input[type="email"]'),
        $submit = $('.wufoo input[type="submit"]'),
        $form = $('form.wufoo'),
        $messages = $('.wufoo .messages');

    if ($email.val() === ""){
      e.preventDefault();
      $messages.empty().append('<label>An email address is required.</label>');
      $submit.blur();
      return false;
    }
  });
});