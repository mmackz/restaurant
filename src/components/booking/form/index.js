import "./form.css";
import { DateInputs } from "./date-inputs";
import { TimeInputs } from "./time-inputs";

export const Form = (() => {
   const form = document.createElement("form");
   form.classList.add("form");

   // create name input
   const nameInput = document.createElement("input");
   nameInput.classList.add("wide-input");
   nameInput.type = "text";
   nameInput.name = "name";
   nameInput.placeholder = "Name";
   nameInput.setAttribute("required", "");
   nameInput.setAttribute("spellcheck", "false");
   form.append(nameInput);

   nameInput.addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
         e.target.classList.add("active-input");
      } else {
         e.target.classList.remove("active-input");
      }
   });

   // create email input
   const emailInput = document.createElement("input");
   emailInput.classList.add("wide-input");
   emailInput.type = "email";
   emailInput.name = "email";
   emailInput.placeholder = "Email";
   nameInput.setAttribute("spellcheck", "false");
   form.append(emailInput);

   emailInput.addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
         e.target.classList.add("active-input");
      } else {
         e.target.classList.remove("active-input");
      }
   });

   // append date inputs
   form.append(DateInputs);

   // append time inputs
   form.append(TimeInputs);

   return form;
})();
