const johnny = require('johnny-five')
const board = new johnny.Board()
var servo,led,sensor,light

board.on('ready', () => {
  var config = {
    pin: 'A0',
    freq: 50
  }

  sensor = new johnny.Sensor(config)

  sensor.on('change', () => {
    light = sensor.scaleTo(0,180)
  })

  led = new johnny.Led(13)
  led.on()

  servo = new johnny.Servo(10)
  servo.to(0)

  moveServo()
})

function moveServo() {
  console.log("Light: " + light)

  if(light != null) {
    servo.to(light)
  }

  setTimeout(moveServo,1000)
}
