const { cardiacResuscitation } = require('../../main')
// 模拟请求失败场景
const randomPromise = () => {
    return new Promise((resove, reject) => {
        const random = Math.random()
        if (random > 0.9) resove(`成功${random}`)
        reject(`失败${random}`)
    })
}

cardiacResuscitation(randomPromise, 500, 5)
    .then(val => console.log(val))
