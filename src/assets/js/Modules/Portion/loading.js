
const loading = () => {

      document.body.classList.add('loaded__hiding')
      setTimeout(function () {
          document.body.classList.add('loaded')
          document.body.classList.remove('loaded__hiding')
      }, 1000)
      setTimeout(function () {
        document.body.classList.remove('loaded')
        }, 1100)


}
export default loading