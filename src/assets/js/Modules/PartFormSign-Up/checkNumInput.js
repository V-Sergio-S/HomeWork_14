
const checkNumInput = (selector) => {

   selector.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[0-9.,=+:;?!_/]/g, '')
      })

}
export default checkNumInput