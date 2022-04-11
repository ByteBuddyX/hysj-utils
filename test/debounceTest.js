const { debounce } = require('../dist/hysjUtils.min.js')

function test () {
  console.log(+new Date(), 'test')
}
const debounceFunc = debounce(test, 5000)
let i = 1
const timer = setInterval(() => {
  i = i + 1
  console.log(+new Date())
  debounceFunc()
  if (i > 5) {
    clearInterval(timer)
  }
}, 1000)
