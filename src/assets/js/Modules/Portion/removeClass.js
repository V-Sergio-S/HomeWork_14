const removeClass = (item) => {

   item.classList.remove('form__input--error')
   try {
      item.nextElementSibling.style.display = 'none'
   } catch (e) {console.log('Ошибка', e.massage)}
   try {
      item.previousElementSibling.classList.remove('form__input-label--error')
   } catch(e) {console.log('Ошибка', e.massage)}

}
export default removeClass