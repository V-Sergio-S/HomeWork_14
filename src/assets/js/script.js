
import validForm from "./Modules/validForm"

window.addEventListener('DOMContentLoaded', () => {
   "use strict"

   validForm('#formSubmit', '.form__agree', '#Full_Name', '#Your_username', '#E_mail', '#Password', '#Repeat_Password', '#form__btn', '.form-section__account', '[data-close]', '[data-account]')
   
});