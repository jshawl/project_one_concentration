
var oldAnswerGlobal = null

//card clickEvent
$('.card').on('click', flipCard)

function flipCard(evt){
    console.log('card clicked')
  $(this).toggleClass('card')
    console.log(this.className)
  var answer = this.className
  oldAnswerGlobal=null
    console.log('var answer= '+ answer)
    console.log('oldAnswerGlobal= '+ oldAnswerGlobal)
  if(oldAnswerGlobal !== null){
    if(answer == oldAnswerGlobal){
      alert("Nice match!")
    }else{
      alert("Not a match, try again.")
    }


  //add toggle from white to color for indiv cards
  $(this).toggleClass('card')
}
}

//compare two clicked cards. if background-colors are equal, alert('nice, next move.')  if not equal, alert('try again.') and change both back to white
// if ((class of firstCardClicked)==(class of secondCardClicked)){
//   alert('Nice match!')
//   // and 'deactivate' cards
// } else {
//   alert('Not a match. Try again.')
//   // and add .card back to both cards.
//   $('#grid').children(/*whatselector?*/).addClass('card')
// }


//reset button to restart game
$('button').on('click', gameReset)

function gameReset(evt){
  $('#grid').children().addClass('card')
  alert('Playing again? Good luck!')
}

//bonus: shuffle colors on reset
