console.log('sourced');

$(document).ready(function(){
  console.log('doc ready');

  $('#addJoke').on('click', function () {
    console.log('in addJoke');

    var author = $('#authorIn').val();
    var joke = $('#jokeIn').val();
    var punchLine = $('#punchLineIn').val();
    console.log(author, joke, punchLine);

    var sentJoke = {authorOut: author, jokeOut: joke, punchLineOut: punchLine};
    console.log(sentJoke);

    $.ajax({
      type: 'POST',
      url: '/jokeSend',
      data: sentJoke,
      success: function (data) {
        console.log('in ajax call');

      }

    });

  });

  $('#tellJoke').on('click', function () {
    //console.log('in tellJoke');
    //call for a joke from the server
    $.ajax({
      type: 'POST',
      url: 'getJoke',
      success: function (data) {
        //console.log('in ajax getJoke');
        //console.log(data.whoseJoke);
        var authorDisplay = data.whoseJoke;
        var jokeDisplay = data.jokeQuestion;
        var punchLineDisplay = data.punchLine;
        //display joke
        $('.joke').html('<p>'+ jokeDisplay + '</p>');
        $('.jokeTeller').fadeOut(10, function(){
          $('.jokeTeller').html('<p>' + punchLineDisplay + '</p><p>-' + authorDisplay + '</p>');
        });
        $('.jokeTeller').fadeIn(8000);
      }//end success

    });//end ajax call for tellJoke

  });//end tellJoke button function


});//end doc ready




// var moveToNextStudent = setInterval(function(){
//   timer ++;
//   console.log(timer);
//   if (timer === 10){
//     timer = 0;
//   displayStudentsRight();
//   }
// }, 1000);
