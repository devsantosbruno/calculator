require('jquery')
require('bootstrap')
require('@fortawesome/fontawesome-free')

$('#reset').click(function () {
  $('#valueCalc').val(' ')
  console.clear()
})

$('.number').click(function () {
  let numberClicked = Number($(this).text())
  $('#valueCalc').val($('#valueCalc').val() + numberClicked)
})

$('.operator').click(function () {
  if ($(this).html().indexOf('+') != -1) {
    $('#valueCalc').val($('#valueCalc').val() + '+')
  } else if ($(this).html().indexOf('-') != -1) {
    $('#valueCalc').val($('#valueCalc').val() + '-')
  } else if ($(this).html().indexOf('X') != -1) {
    $('#valueCalc').val($('#valueCalc').val() + '*')
  } else if ($(this).html().indexOf('/') != -1) {
    $('#valueCalc').val($('#valueCalc').val() + '/')
  } else if ($(this).html().indexOf('.') != -1) {
    $('#valueCalc').val($('#valueCalc').val() + '.')
  }
})

$('#result').click(function () {
  $('#valueCalc').val(eval($('#valueCalc').val()))
})

$('#del').click(function () {
  const delet = $('#valueCalc').val().slice(0, -1)
  console.log($('#valueCalc').val(delet))
})
