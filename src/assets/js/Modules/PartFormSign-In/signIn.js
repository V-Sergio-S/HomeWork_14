
const signIn = (accountText, inputButton, fullName, eMail, repeat, checkbox, haveAccount) => {

          accountText.innerText = 'Log in to the system'
          inputButton.value = 'Sign In'
          fullName.previousElementSibling.remove()
          fullName.parentNode.removeChild(fullName)
          eMail.previousElementSibling.remove()
          eMail.remove()
          repeat.previousElementSibling.remove()
          repeat.remove()
          checkbox.nextElementSibling.remove()
          checkbox.remove()
          haveAccount.innerText = 'Registration'
}
export default signIn