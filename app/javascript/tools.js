$(function(){
  $('#btn1').click(function(){
    var obj = $('#d1').clone();
    $('#d1').after(obj);
  });
});