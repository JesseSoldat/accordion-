$('h2#first').on('click', function(){
  // console.log('test');
  $('#firstWrapper p').toggleClass('hide').addClass('show');
})

$('h2#second').on('click', function(){
  $('#secondWrapper p').toggleClass('hide').addClass('show');
})

$('h2#third').on('click', function(){
  $('#thirdWrapper p').toggleClass('hide').addClass('show');
})