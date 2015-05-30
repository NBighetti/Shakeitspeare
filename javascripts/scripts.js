//load poem
$(document).ready(function(){
  $('#welcome').on('click', function(){
    $('#welcome').hide();
    getPoem();
    $('#poem').show();
  });

  $('#poem').on('click', function(){
    getPoem();
  })

  window.setTimeout(function(){
    $('img').removeClass("animated slideInUp");
  }, 1000)
});


function getPoem(){
  $.ajax({
    url:'http://ShakeItSpeare.com/api/poem',
    success: function(poemData){
      console.log(poemData.poem);
      $('#poem').empty();
      $('#poem').append('<p></p>');
      $('p').text(poemData.poem);
    }
  });
}
