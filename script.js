//card clickEvent
$('.card').on('click', flipCard)
answer=[]
tile=[]
function flipCard(evt){
  $(this).toggleClass('card')
  console.log('className= ' + this.className)
  answer.push(this.className)
  tile.push(this)
  console.log(answer)
 if (answer.length<2) {
   //second click
 }
//compare two clicked cards. if background-colors are equal, alert('match')
 else if (answer[0]==answer[1]) {
   console.log('a match')
   alert('a match')
   answer.length=0
   tile=[]
   } else {
//not equal, alert('try again.')
   console.log('not a match')
   alert('not a match')
   answer.length=0
   //change both to white
   $(tile[0]).addClass('card')
   $(tile[1]).addClass('card')
   tile=[]
 }
}

//reset button to restart game
$('button').on('click', gameReset)

function gameReset(evt){
  $('#grid').children().addClass('card')
  console.log('Playing again? Good luck!')
  alert('playing again? good luck!')
}

//bonus: shuffle colors on reset
