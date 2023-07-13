import addClass from "../Portion/addClass"
import removeClass from "../Portion/removeClass"

const checkDotInputs = (selector, selectorBtn) => {

      const Client = JSON.parse(localStorage.getItem('dataClient'))  

      let ClientLogin = null
   
      try {
          for (let item of Client) {
              ClientLogin = item.log;

              selector.addEventListener('input', (e) => {
               e.target.value = e.target.value.replace(/[.,=+;:?!* /]/g, '')
         
               removeClass(selector)
               selector.previousElementSibling.innerText = 'Your username'
         
               if (selector.value === ClientLogin && selectorBtn.value === 'Sign Up') {
                  addClass(selector)
                  selector.previousElementSibling.innerText = 'Имя занято'
               }
               })
           }
      } catch (e) {console.log('Ошибка', e.massage)}


}
export default checkDotInputs