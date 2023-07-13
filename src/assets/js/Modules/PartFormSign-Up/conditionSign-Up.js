import addClass from "../Portion/addClass"
import removeClass from "../Portion/removeClass"
import saveLocalstorage from "../Portion/saveLocalStorage"
import popup from "../Portion/popup"

const conditions = (fullName, yourUsername, eMail, password, repeat, checkbox, btn) => {



   let hasError = false

     
   try {
      if (!fullName.value  || fullName.value.length < 3) {
         hasError = true
         addClass(fullName)
      } else {
         removeClass(fullName)
      }
   } catch{}

      if (!yourUsername.value || yourUsername.value.length < 3 ) {
         hasError = true
         addClass(yourUsername)
      } else {
         removeClass(yourUsername)
      }

   try {
      if (!eMail.value || eMail.value.length < 6 ) {
         hasError = true
         addClass(eMail)
      } else {
         removeClass(eMail)
      }
   } catch{}

      if (!password.value && password.value.length < 8) {
         hasError = true
         addClass(password)
      } else {
         removeClass(password)
      }

   try {
      if (password.value !== repeat.value && repeat.value.length < 8) {
         hasError = true
         addClass(repeat)
      } else {
         removeClass(repeat)
      }
   } catch{}

   try {
      if (!checkbox.checked) {
         hasError = true
         checkbox.nextElementSibling.nextElementSibling.style.display = 'block'
      } else {
         checkbox.nextElementSibling.nextElementSibling.style.display = 'none'
      }
   } catch{}

      if (!hasError && btn.value === 'Sign Up' ) {

         saveLocalstorage(fullName, yourUsername, password) 
         popup('#layer', '[data-close]')
         }
}
export default conditions