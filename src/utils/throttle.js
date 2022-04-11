// 节流 定期之内只执行一次
export const throttle = (func, delay = 200) => {
  let flag = true
  return () => {
    if (flag) {
      setTimeout(() => {
        func()
        flag = true
      }, delay)
    }
    flag = false
  }
}
