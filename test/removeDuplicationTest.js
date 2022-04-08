const hyUtils = require('../dist/hy_utils.min.js')
const arr = [1, 2, '3', 1, '2', '3']
console.log(hyUtils.basicsRemoveDuplication(arr))
const newArr = [
  { id: 111, name: '张三' },
  { id: 222, name: '李四' },
  { id: 333, name: '王五' },
  { id: 111, name: '张三' }
]
console.log(hyUtils.complexRemoveDuplication(newArr, 'id'))
