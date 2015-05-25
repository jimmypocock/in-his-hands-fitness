'use strict';

$(document).on('ready', function(){
  $('form.wufoo').on('submit', function(e){
    var $email = $(this).find('input[type="email"]'),
        $submit = $(this).find('input[type="submit"]'),
        $messages = $(this).find('.messages');

    if ($email.val() === ''){
      e.preventDefault();
      $messages.empty().append('<p class="error">An email address is required.</p>');
      $submit.blur();
      return false;
    }
  });
});