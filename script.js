//card clickEvent
$('.card').on('click', flipCard)
answer=[]
function flipCard(evt){
  $(this).toggleClass('card')
  console.log('className= ' + this.className)
  answer.push(this.className)
  console.log(answer)
 if (answer.length<2) {
   //second click
 }
//compare two clicked cards. if background-colors are equal, alert('match')
 else if (answer[0]==answer[1]) {
   console.log("a match")
   answer.length=0
   } else {
//not equal, alert('try again.')
   console.log("not a match")
   answer.length=0
//change both to white
 }
}

//reset button to restart game
$('button').on('click', gameReset)

function gameReset(evt){
  $('#grid').children().addClass('card')
  console.log('Playing again? Good luck!')
}

//bonus: shuffle colors on reset
