// 防抖 停止执行后多久执行
export const debounce = (func, delay = 200) => {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, delay)
  }
}
