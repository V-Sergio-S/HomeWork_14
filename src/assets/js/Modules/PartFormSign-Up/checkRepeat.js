import addClass from "../Portion/addClass"
import removeClass from "../Portion/removeClass"

const checkRepeat = (repeatSelector, paswordSelector) => {

  
  function onInput() {
     if (repeatSelector.value === paswordSelector.value) {
      removeClass(repeatSelector)
      repeatSelector.previousElementSibling.innerText = 'Repeat Password'
     } else {
      addClass(repeatSelector)
      repeatSelector.previousElementSibling.innerText = 'Несовпадает!!!'
     }
  }
  
  repeatSelector.addEventListener('input', onInput)

}
export default checkRepeat