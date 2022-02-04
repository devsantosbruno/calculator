require('jquery')
require('bootstrap')
require('@fortawesome/fontawesome-free')

let display = []

$('#reset').click(function () {
  $('#valueCalc').val(' ')
  display = []
  console.clear()
})

$('.number').click(function () {
  let numberClicked = Number($(this).text())
  $('#valueCalc').val(numberClicked)

  console.log(Number($(this).text()))
})
