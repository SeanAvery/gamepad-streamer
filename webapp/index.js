// WebRTC data channel
// Gamepad Controller
let gamepad
let counter = 0
const gameLoop = () => {
  counter++
  if (!gamepad) {
    return;
  }
  if (counter > 1000) {
    return;
  }
  console.log(gamepad)
  gameLoop()
}
window.addEventListener('gamepadconnected', e => {
  console.log('gamepad connected')
  gamepad = navigator.getGamepads()[e.gamepad.index]
  console.log('gamepad', gamepad)
  gameLoop()
})
