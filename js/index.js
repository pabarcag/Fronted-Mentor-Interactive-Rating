import { changeColor } from "./modules/changeColor.js";
import { validation } from "./modules/validation.js";

const $d = document;

$d.addEventListener('DOMContentLoaded', (e)=>{
    changeColor('.input1', '.form__submit');
    changeColor('.input2', '.form__submit');
    changeColor('.input3', '.form__submit');
    changeColor('.input4', '.form__submit');
    changeColor('.input5', '.form__submit');

    validation('.form__submit', '.form__input', '.form', '.reverse', '.reverse__score');
})

















