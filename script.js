//card clickEvent
$('.card').on('click', flipCard)



function flipCard(evt){
  console.log('card clicked')
  //add toggle from white to color for indiv cards
  $(this).toggleClass('cardColor')
}


conCards: [$('#grid').children().eq(0),
           $('#grid').children().eq(1),
           $('#grid').children().eq(2),
           $('#grid').children().eq(3),
           $('#grid').children().eq(4),
           $('#grid').children().eq(5),
           $('#grid').children().eq(6),
           $('#grid').children().eq(7),
           $('#grid').children().eq(8),
           $('#grid').children().eq(9),
           $('#grid').children().eq(10),
           $('#grid').children().eq(11),
           $('#grid').children().eq(12),
           $('#grid').children().eq(13),
           $('#grid').children().eq(14),
           $('#grid').children().eq(15),]


//these disappear because i need to *add* the color class, not toggle .card
function cardColor(squareValues){
  //assign colors to cards
    //rowOne
  $('div.rowOne .card:eq(0)').addClass('blue')
  $('div.rowOne .card:eq(1)').addClass('red')
  $('div.rowOne .card:eq(2)').addClass('green')
  $('div.rowOne .card:eq(3)').addClass('orange')
    //rowTwo
  $('div.rowTwo .card:eq(0)').addClass('blue')
  $('div.rowTwo .card:eq(1)').addClass('lime')
  $('div.rowTwo .card:eq(2)').addClass('olive')
  $('div.rowTwo .card:eq(3)').addClass('brown')
    //rowThree
  $('div.rowThree .card:eq(0)').addClass('tan')
  $('div.rowThree .card:eq(1)').addClass('orange')
  $('div.rowThree .card:eq(2)').addClass('tan')
  $('div.rowThree .card:eq(3)').addClass('red')
    //rowFour
  $('div.rowFour .card:eq(0)').addClass('lime')
  $('div.rowFour .card:eq(1)').addClass('green')
  $('div.rowFour .card:eq(2)').addClass('brown')
  $('div.rowFour .card:eq(3)').addClass('olive')
}


//reset button
//button clickEvent
$('button').on('click', reset)
function reset(evt){
  $('div.rowOne .card:eq(0)').removeClass('blue')
}
