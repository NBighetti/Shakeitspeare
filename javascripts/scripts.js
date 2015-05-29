//load poem
$(document).ready(function(){

  $('#poem').on('click', function(){
    $.ajax({
      url:'http://ShakeItSpeare.com/api/poem',
      success: function(poemData){
        console.log(poemData.poem);
        $('#poem').text(poemData.poem);
      }
    })
  })


//sound
        // var audioElement = document.createElement('audio');
        // audioElement.setAttribute('/sounds/pour.mp3', 'audio.mp3');
        // audioElement.setAttribute('autoplay', 'autoplay');
        // //audioElement.load()
        //
        // $.get();
        //
        // audioElement.addEventListener("load", function() {
        //     audioElement.play();
        // }, true);
        //
        // $('.play').click(function() {
        //     audioElement.play();
        // });
        //
        // $('.pause').click(function() {
        //     audioElement.stop();
        // });
    });
