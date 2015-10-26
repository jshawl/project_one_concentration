//card clickEvent
$('.card').on('click', flipCard)



function flipCard(evt){
  console.log('card clicked')
  //add toggle from white to color for indiv cards
  $(this).toggleClass('cardColor')
}

conCards: [$('#grid').children().eq(0).addClass('blue'),
           $('#grid').children().eq(1).addClass('red'),
           $('#grid').children().eq(2).addClass('green'),
           $('#grid').children().eq(3).addClass('orange'),
           $('#grid').children().eq(4).addClass('blue'),
           $('#grid').children().eq(5).addClass('lime'),
           $('#grid').children().eq(6).addClass('olive'),
           $('#grid').children().eq(7).addClass('brown'),
           $('#grid').children().eq(8).addClass('tan'),
           $('#grid').children().eq(9).addClass('orange'),
           $('#grid').children().eq(10).addClass('tan'),
           $('#grid').children().eq(11).addClass('red'),
           $('#grid').children().eq(12).addClass('lime'),
           $('#grid').children().eq(13).addClass('green'),
           $('#grid').children().eq(14).addClass('brown'),
           $('#grid').children().eq(15).addClass('olive'),]



//reset button
//button clickEvent
$('button').on('click', reset)
function reset(evt){
  $('div.rowOne .card:eq(0)').removeClass('cardColor')
}
