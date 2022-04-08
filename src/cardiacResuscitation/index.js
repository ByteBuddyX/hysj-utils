import { wait } from '../utils/wait'
let i = 0
const cardiacResuscitation = (func, time = 500, times = 0) => {
  i++

  if (times) {
    if (times < i) {
      console.log(i)
      return '次数上限'
    }
  }
  return func()
    .catch(e => {
      // 配合测试用例可以借助这个注释debuger
      console.log(e, 'randomPromiseCatch')
      return wait(time).then(() => cardiacResuscitation(func, time, times))
    })
}
export default cardiacResuscitation
