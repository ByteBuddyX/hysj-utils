export const basicsRemoveDuplication = (array) => Array.from(new Set(array))
export const complexRemoveDuplication = (array, id) => {
  const map = new Map()
  return array.reduce((cur, next) => {
    if (!map.has(next[id])) {
      map.set(next[id], true)
      cur.push(next)
    }
    return cur
  }, [])
}
