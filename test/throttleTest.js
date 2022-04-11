const { throttle } = require('../dist/hysjUtils.min.js')
function test () {
  console.log(+new Date(), 'test')
}
const throttleFunc = throttle(test, 2000)
let i = 1
const timer = setInterval(() => {
  i = i + 1
  console.log(+new Date())
  throttleFunc()
  if (i > 5) {
    clearInterval(timer)
  }
}, 1000)
