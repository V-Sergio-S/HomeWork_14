
import checkNumInput from "./PartFormSign-Up/checkNumInput"
import checkDotInput from "./PartFormSign-Up/checkDotInput"
import checkMailInput from "./PartFormSign-Up/checkMailInput"
import checkPassword from "./PartFormSign-Up/checkPasswordInput"
import checkRepeat from "./PartFormSign-Up/checkRepeat"
import signIn from "./PartFormSign-In/signIn"
import accountWelcome from "./PartFormSign-In/welcomeAccount"
import conditions from "./PartFormSign-Up/conditionSign-Up"
import loading from "./Portion/loading"
import clearForm from "./Portion/clearForm"

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


   checkNumInput(fullName)
   checkDotInput(yourUsername, btn)
   checkMailInput(eMail)
   checkPassword(password)
   checkRepeat(repeat, password)


   const validCondition =  (e) => {
      stopDefAction(e)
      conditions(fullName, yourUsername, eMail, password, repeat, checkbox, btn)
   }

   const haveAccountLink = (e) => {
      stopDefAction(e)
      if (haveAccount.innerText === 'Already have an account?') {
         try {
            signIn(text, btn, fullName, eMail, repeat, checkbox, haveAccount)
         } catch{}
         loading()
      } else {
         try {
            location. reload()
         } catch{}
         loading()

      }
   } 

   function handleClick() {

      form.removeEventListener('submit', validCondition, handleClick)
      form.removeEventListener('submit', signWelcome, handleClick)
   
   }

   function stopDefAction(e) {
      e.preventDefault();
   }

   function signWelcome (e) {
      stopDefAction(e)
      if (haveAccount.innerText === 'Registration') {
         try {
            accountWelcome(text, btn, yourUsername, password, haveAccount)
         } catch{}
      }
   }

   function exitAccount () {
      if (btn.value == 'Exit') {
         loading()
         location. reload()
      }
   }

   function haveAccountBtn () {
      clearForm()
      try {
         signIn(text, btn, fullName, eMail, repeat, checkbox, haveAccount)
      } catch{}
      loading()
   }

   form.addEventListener('submit', validCondition, handleClick)
   
   agreeBtn.addEventListener('click', haveAccountBtn)

   haveAccount.addEventListener('click', haveAccountLink)

   form.addEventListener('submit', signWelcome, handleClick)

   btn.addEventListener('click', exitAccount,)
}
export default validForm