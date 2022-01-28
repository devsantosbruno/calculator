require('jquery')
require('bootstrap')
require('@fortawesome/fontawesome-free')

$('#reset').click(function () {
  $('#valueCalc').val(' ')
  console.clear()
})

$('.number').click(function calcular() {
  $('#valueCalc').val(Number($(this).text()) + calcular())
  console.log(Number($(this).text()))
})
