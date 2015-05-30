
$(document).ready(function(){

// INSTRUCTS USER TO CLICK TO SHOW POEM
  $('#welcome').on('click', function(){
    $('#welcome').hide();
    getPoem();
    $('#poem').show();
  });

// DISPLAYS SPEACH BUBBLE AND POEM
  $('#poem').on('click', function(){
    getPoem();
  })

// REMOVES CLASS FROM SHAKESPEARE TO MAINTAIN DOC. STRUCTURE
  window.setTimeout(function(){
    $('img').removeClass("animated slideInUp");
  }, 1000)
});


//=====================================AJAX CALL TO GET POEM
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
