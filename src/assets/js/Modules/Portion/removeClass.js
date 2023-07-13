const removeClass = (item) => {

   item.classList.remove('form__input--error')
   try {
      item.nextElementSibling.style.display = 'none'
   } catch{}
   try {
      item.previousElementSibling.classList.remove('form__input-label--error')
   } catch{}

}
export default removeClass