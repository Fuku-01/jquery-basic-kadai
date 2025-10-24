$(function(){
  $('#change-cole').on('click',function(){
    $('#target').css('color', 'red');
  });
  $('#change-text').on('click',function(){
    $('#target').css('color', 'red');
    $('#target').text('HELLO!');
  });
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
    $('#target').css('color','red');
    $('#target').text('HELLO!');
  });
});