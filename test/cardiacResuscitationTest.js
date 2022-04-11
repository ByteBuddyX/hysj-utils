const { cardiacResuscitation } = require('../dist/hysjUtils.min.js')
// 模拟请求失败场景
const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random()
    if (random > 0.9) resolve(`成功${random}`)
    else reject(`失败${random}`)
  })
}

cardiacResuscitation(randomPromise, 500)
  .then(val => console.log(val))
