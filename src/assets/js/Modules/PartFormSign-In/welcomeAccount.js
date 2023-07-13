import addClass from "../Portion/addClass"
import removeClass from "../Portion/removeClass"
import loading from "../Portion/loading"
import clearForm from "../Portion/clearForm"

const accountWelcome = (accountText, inputButton, yourUsername, password, haveAccount) => {


   const Client = JSON.parse(localStorage.getItem('dataClient'))
   let ClientLogin = null
   let ClientName = null
   let ClientPass = null


   for (let item of Client) {
      ClientName = item.name;
      ClientLogin = item.log;
      ClientPass = item.pass;
      
      let hasEr = false
      removeClass(yourUsername)
      yourUsername.nextElementSibling.innerText = 'Заполните поле Your username!'
      removeClass(password)
      password.nextElementSibling.innerText = 'Пароль должен содержать не менее 8 символов'

      if (!yourUsername.value) {
         hasEr = true
         yourUsername.nextElementSibling.innerText = 'Заполните поле Your username!'
         addClass(yourUsername)
      } else if (ClientLogin !== yourUsername.value) {
         hasEr = true
         yourUsername.nextElementSibling.innerText = 'Такой пользователь не зарегистрирован'
         addClass(yourUsername)
      }
      if (!password.value ) {
         hasEr = true
         password.nextElementSibling.innerText = 'Введите пароль'
         addClass(password)
      } else if (ClientPass !== password.value) {
         hasEr = true
         password.nextElementSibling.innerText = 'Неверный пароль'
         addClass(password)
      }
      if (!hasEr && ClientLogin === yourUsername.value && ClientPass === password.value ) {
         loading()
         clearForm()
         accountText.innerText = `Welcome, ${ClientName}!`
         accountText.nextElementSibling.remove()
         inputButton.value = 'Exit'
         yourUsername.previousElementSibling.remove()
         yourUsername.parentNode.removeChild(yourUsername)
         password.previousElementSibling.remove()
         password.remove()
         haveAccount.remove()
      }
   }


}
export default accountWelcome