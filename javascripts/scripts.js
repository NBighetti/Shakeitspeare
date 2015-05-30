//load poem
$(document).ready(function(){
  $('#poem').on('click', function(){
    $.ajax({
      url:'http://ShakeItSpeare.com/api/poem',
      success: function(poemData){
        console.log(poemData.poem);
        $('#poem').empty();
        $('#poem').append('<p></p>');
        $('p').text(poemData.poem);
      }
    })
  })

});
