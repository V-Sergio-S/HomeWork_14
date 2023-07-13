import addClass from "../Portion/addClass"
import removeClass from "../Portion/removeClass"

const checkMailInputs = (selector) => {
   const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

   function isEmailValid(value) {
      return emailRegexp.test(value)
  }
  
  function onInput() {
     if (isEmailValid(selector.value)) {
      removeClass(selector)
      selector.previousElementSibling.innerText = 'E-mail'
     } else {
      addClass(selector)
      selector.previousElementSibling.innerText = 'Некорректный e-mail'
     }
  }
  
  selector.addEventListener('input', onInput)
}
export default checkMailInputs