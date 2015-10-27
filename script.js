//card clickEvent
$('.card').on('click', flipCard)

function flipCard(evt){
  console.log('card clicked')
  // var click1=$(this).css('class')
  // var click2
  //add toggle from white to color for indiv cards
  $(this).toggleClass('card')

}

//compare two clicked cards. if background-colors are equal, alert nice, next move.  if not equal, alert try again and change both back to white
// (class1===blue) &&  (class2==blue)
//   alert(good match, pick another pair)
//
//   else {
//     alert(lousy memory, try agin!)
//     toggle cards back to white
//   }
//


//how to keep matched pairs from being toggled?

//alert 'winner, game over' when 8 pairs have been made

//reset button to restart game
$('button').on('click', gameReset)

function gameReset(evt){
  $('#grid').children().addClass('card')
  alert('Playing again, eh?')
}

//bonus: shuffle colors on reset
