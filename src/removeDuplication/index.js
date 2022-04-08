export const basicsRemoveDuplication = (array) => Array.from(new Set(array))
export const complexRemoveDuplication = (array, key) => {
  const map = new Map()
  return array.reduce((cur, next) => {
    if (!map.has(next[key])) {
      map.set(next[key], true)
      cur.push(next)
    }
    return cur
  }, [])
}
