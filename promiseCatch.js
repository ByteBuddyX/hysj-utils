const randomPromise = () => {
    return new Promise((resove, reject) => {
        const random = Math.random()
        if (random > 0.9) resove(`成功${random}`)
        reject(`失败${random}`)
    })
}

const await = (time) => new Promise(resove => {
    setTimeout(() => resove(), time)
})

const eachPromise = () => {
    return randomPromise()
    .catch(e => {
        console.log(e, 'randomPromiseCatch')
        return await(500).then(eachPromise)
    })
}

eachPromise()
    .then((val) => console.log(val))
    .catch(e => console.log(e, 'eachPromisecatch'))
