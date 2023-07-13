const addClass = (item) => {

   item.classList.add('form__input--error')
   try {
      
      item.nextElementSibling.style.display = 'block'
   } catch (e) {console.log('Ошибка', e.massage)}

   try {
      item.previousElementSibling.classList.add('form__input-label--error')
      
   } catch (e) {console.log('Ошибка', e.massage)}
}
export default addClass