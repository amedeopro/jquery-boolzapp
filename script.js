$(document).ready(function(){
  $('#newMessage').keypress(function(event){
    if (event.which == 13) {
      var nuovoMessaggio = $('#newMessage').val();

      var nuovoTemplateMessaggio = $('.templateMessage .new-message');

      var clear = $('.templateMessage .clear');

      nuovoTemplateMessaggio.text(nuovoMessaggio);

      $('.all-message-container').append(nuovoTemplateMessaggio);
      $('.all-message-container').append(clear);

      $('#newMessage').val('');
    }
  })
});
