import loading from "./loading"
const popup = ( popupSelection, closeSelection) => {

   const popup = document.querySelector(popupSelection),
         close = document.querySelector(closeSelection)


            popup.classList.add('visible')
            document.body.style.overflow = 'hidden'
            document.body.style.margin = '0 17px 0 0'


         function removeClassPopup () {
            popup.classList.remove('visible')
            document.body.style.overflow = ''
            document.body.style.margin = '0'
            loading()
         }


         close.addEventListener('click', removeClassPopup)

}
export default popup