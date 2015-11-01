//card clickEvent
$('.card').on('click', flipCard)
answer=[] // remember to use var
tile=[]
function flipCard(evt){
  $(this).toggleClass('card')
  console.log('className= ' + this.className) // remove debug code before submitting in the future.
  answer.push(this.className)
  tile.push(this) // consider using one variable to store your data. i.e. can you remove the `answer` array?
  console.log(answer)
 if (answer.length<2) {
   //second click
   //can you remove this conditional entirely?
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
   // nice!
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
// Check out this blog post - https://css-tricks.com/snippets/jquery/shuffle-dom-elements/
