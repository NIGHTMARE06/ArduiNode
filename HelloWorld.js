const johnny = require('johnny-five')
const board = new johnny.Board()

board.on('ready', () => {
  var led = johnny.Led(11)

  led.blink(500)
})
