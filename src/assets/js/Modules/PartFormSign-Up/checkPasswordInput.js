import addClass from "../Portion/addClass"
import removeClass from "../Portion/removeClass"

const checkPassword = (selector) => {

   const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/

   function isEmailValid(value) {
      return passwordRegexp.test(value)
  }
  
  function onInput() {
     if (isEmailValid(selector.value)) {
      removeClass(selector)
      selector.previousElementSibling.innerText = 'Password'
     } else {
      addClass(selector)
      selector.previousElementSibling.innerText = 'Добавте: один спец-символ и заглавную букву'
     }
  }
  
  selector.addEventListener('input', onInput)

}
export default checkPassword