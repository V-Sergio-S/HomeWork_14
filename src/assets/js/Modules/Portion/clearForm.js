
const clearForm = () => {

   const input = document.querySelectorAll('.form__input')

      input.forEach(item => {
         item.value = null
      })
}
export default clearForm