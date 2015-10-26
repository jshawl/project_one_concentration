//card clickEvent
$('.card').on('click', flipCard)

function flipCard(evt){
  console.log('card clicked')
  //add toggle from white to color for indiv cards
  $(this).toggle('blue')
}
//
// function changeColor(){
//   $('#grid').children().eq(0).removeClass('blue')
// }
//
// var conCards=
//     [$('#grid').children().eq(0).css('background-color','blue'),
//      $('#grid').children().eq(1).addClass('red'),
//      $('#grid').children().eq(2).addClass('green'),
//      $('#grid').children().eq(3).addClass('orange'),
//      $('#grid').children().eq(4).addClass('blue'),
//      $('#grid').children().eq(5).addClass('lime'),
//      $('#grid').children().eq(6).addClass('olive'),
//      $('#grid').children().eq(7).addClass('brown'),
//      $('#grid').children().eq(8).addClass('tan'),
//      $('#grid').children().eq(9).addClass('orange'),
//      $('#grid').children().eq(10).addClass('tan'),
//      $('#grid').children().eq(11).addClass('red'),
//      $('#grid').children().eq(12).addClass('lime'),
//      $('#grid').children().eq(13).addClass('green'),
//      $('#grid').children().eq(14).addClass('brown'),
//      $('#grid').children().eq(15).addClass('olive'),]

// function cardColor(){
//   for(i=0; i<conCards.length; i++) {
//     console.log(conCards[i])
//   }
//   }

//compare two clicked cards. if background-colors are equal, alert nice, next move.  if not equal, alert try again and change both back to white

//how to keep matched pairs from being toggled?

//alert 'winner, game over' when 8 pairs have been made

//reset button to restart game

//bonus: shuffle colors on reset
