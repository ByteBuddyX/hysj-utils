import cardiacResuscitation from './cardiacResuscitation/index'
import { basicsRemoveDuplication, complexRemoveDuplication } from './removeDuplication/index'
import { debounce } from './utils/debounce'
import { throttle } from './utils/throttle'
export default {
  cardiacResuscitation,
  basicsRemoveDuplication,
  complexRemoveDuplication,
  throttle,
  debounce
}
