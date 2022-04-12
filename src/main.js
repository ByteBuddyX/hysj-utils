import cardiacResuscitation from './cardiacResuscitation/index'
import { basicsRemoveDuplication, complexRemoveDuplication } from './removeDuplication/index'
import { debounce } from './utils/debounce'
import { throttle } from './utils/throttle'
import { basicsSort } from './sort/index'
export default {
  cardiacResuscitation,
  basicsRemoveDuplication,
  complexRemoveDuplication,
  throttle,
  debounce,
  basicsSort
}
