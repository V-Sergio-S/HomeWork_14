const addClass = (item) => {

   item.classList.add('form__input--error')
   item.nextElementSibling.style.display = 'block'
   item.previousElementSibling.classList.add('form__input-label--error')
}
export default addClass