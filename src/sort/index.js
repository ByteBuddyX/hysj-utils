const numSort = (array, order) => {
  return array.sort((a, b) => {
    return order === 'asc' ? a - b : b - a
  })
}
const dateSort = (array, order) => {
  return array.sort((a, b) => {
    const x = +new Date(a)
    const y = +new Date(b)
    return order === 'asc' ? x - y : y - x
  })
}

const engSort = (array, order) => {
  return order === 'asc' ? array.sort() : array.sort().reverse()
}
// type支持number time 英文
export const basicsSort = (array, type, order = 'asc') => {
  switch (type) {
    case 'number':
      return numSort(array, order)
    case 'date':
      return dateSort(array, order)
    default:
      return engSort(array, order)
  }
}

export const complexSort = (array) => {
  return array.sort()
}
