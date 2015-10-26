//card clickEvent
$('.card').on('click', flipCard)

function flipCard(evt){
  console.log('card clicked')
  //add toggle from white to color for indiv cards
}

//assign colors to cards
  //rowOne
$('div.rowOne .card:eq(0)').css('background', 'blue')
$('div.rowOne .card:eq(1)').css('background', 'red')
$('div.rowOne .card:eq(2)').css('background', 'green')
$('div.rowOne .card:eq(3)').css('background', 'orange')
  //rowTwo
$('div.rowTwo .card:eq(0)').css('background', 'blue')
$('div.rowTwo .card:eq(1)').css('background', 'lime')
$('div.rowTwo .card:eq(2)').css('background', 'olive')
$('div.rowTwo .card:eq(3)').css('background', 'brown')
  //rowThree
$('div.rowThree .card:eq(0)').css('background', 'tan')
$('div.rowThree .card:eq(1)').css('background', 'orange')
$('div.rowThree .card:eq(2)').css('background', 'tan')
$('div.rowThree .card:eq(3)').css('background', 'red')
  //rowFour
$('div.rowFour .card:eq(0)').css('background', 'lime')
$('div.rowFour .card:eq(1)').css('background', 'green')
$('div.rowFour .card:eq(2)').css('background', 'brown')
$('div.rowFour .card:eq(3)').css('background', 'olive')


//reset button
