// $('h1').click(function(){
//   $(this).text("I was changed!")
// })

// KEY PRESS
$('input').eq(0).keypress(function(){
  if (event.which === 13){
    $('h3').toggleClass('turnBlue');
  }
})

// on()
$('h1').on('mouseenter', function(){
  console.log('here');
  $(this).toggleClass('turnBlue');
})


$('input').eq(1).on('click', function(){
  $('.container').fadeOut(3000)
})
