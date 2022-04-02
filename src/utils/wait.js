exports.wait = (time) => new Promise(resove => {
    setTimeout(() => resove(), time)
})

