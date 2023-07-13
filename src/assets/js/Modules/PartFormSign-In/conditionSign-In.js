import addClass from "../Portion/addClass"
import removeClass from "../Portion/removeClass"

const conditionSignIn = (yourUsername, password) => {

   let hasErr = false

            
   if (!yourUsername.value  && yourUsername.value.length < 3) {
      hasErr = true
      addClass(yourUsername)
   } else {
      removeClass(yourUsername)
   }

   if (!password.value && password.value.length < 8) {
      hasErr = true
      addClass(password)
   } else {
      removeClass(password)
   }

   if (!hasErr) {
      return true
   }
}
export default conditionSignIn