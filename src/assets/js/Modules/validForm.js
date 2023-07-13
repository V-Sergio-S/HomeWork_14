

const validForm = (formSelector,checkboxSelector,nameSelector, userNameSelector, eMailSelector, passwordSelector, repeatSelector, btnSelector, textSelector, btnAgreeSelector, haveAccountSelector) => {

   const form = document.querySelector(formSelector),
         fullName = document.querySelector(nameSelector),
         yourUsername = document.querySelector(userNameSelector),
         eMail = document.querySelector(eMailSelector),
         password = document.querySelector(passwordSelector),
         repeat = document.querySelector(repeatSelector),
         checkbox = document.querySelector(checkboxSelector),
         btn = document.querySelector(btnSelector),
         text = document.querySelector(textSelector),
         agreeBtn = document.querySelector(btnAgreeSelector),
         haveAccount = document.querySelector(haveAccountSelector)





   const validCondition =  (e) => {
      stopDefAction(e)
      conditions(fullName, yourUsername, eMail, password, repeat, checkbox, btn)
   }



   function handleClick() {

      form.removeEventListener('submit', validCondition, handleClick)
      form.removeEventListener('submit', signWelcome, handleClick)
   
   }



   form.addEventListener('submit', validCondition, handleClick)
   

}
export default validForm