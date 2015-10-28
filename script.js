
var oldAnswerGlobal = null

//card clickEvent
$('.card').on('click', flipCard)

function flipCard(evt){
  $(this).toggleClass('card')
    console.log('className= ' + this.className)
  var answer = this.className
    console.log('var answer= '+ answer)
  oldAnswerGlobal='null'
    console.log('oldAnswerGlobal= '+ oldAnswerGlobal)
  if(oldAnswerGlobal !== null){
    if(answer == oldAnswerGlobal){
      console.log("Nice match!")
    }else{
      console.log("Not a match.")
      //add toggle from white to color for indiv cards
      // $(this).toggleClass('card')
    }

}
}

//compare two clicked cards. if background-colors are equal, alert('nice, next move.')  if not equal, alert('try again.') and change both back to white
// if ((class of firstCardClicked)==(class of secondCardClicked)){
//   alert('Nice match!')
//   // and 'deactivate' cards (by removing clickEvent from those?)
// } else {
//   alert('Not a match. Try again.')
//   // and add .card back to both cards.
//   $('#grid').children(/*whatselector?*/).addClass('card')
// }


//reset button to restart game
$('button').on('click', gameReset)

function gameReset(evt){
  $('#grid').children().addClass('card')
  console.log('Playing again? Good luck!')
}

//bonus: shuffle colors on reset
