const { basicsSort } = require('../dist/hysjUtils.min.js')
const arr = [1, 4, 2, 6, 4]
console.log(basicsSort(arr, 'number'))
console.log(basicsSort(arr, 'number', 'desc'))
const arr1 = [new Date('2020'), new Date('1997'), new Date('2022')]
console.log(basicsSort(arr1, 'date'))
console.log(basicsSort(arr1, 'date', 'desc'))
const arr2 = ['v', 'a', 'z']
console.log(basicsSort(arr2, ''))
console.log(basicsSort(arr2, '', 'desc'))
