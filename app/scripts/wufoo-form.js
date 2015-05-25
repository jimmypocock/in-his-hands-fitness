'use strict';

$(document).on('ready', function(){
  $('form.wufoo').on('submit', function(e){
    var $email = $('.wufoo input[type="email"]'),
        $submit = $('.wufoo input[type="submit"]'),
        $messages = $('.wufoo .messages');

    if ($email.val() === ''){
      e.preventDefault();
      $messages.empty().append('<p class="error">An email address is required.</p>');
      $submit.blur();
      return false;
    }
  });
});