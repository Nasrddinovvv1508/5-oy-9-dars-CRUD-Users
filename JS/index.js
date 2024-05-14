import { createUserRow } from "./functions.js";

// Button
let addUserBtn = document.getElementById(`add-user`);
let btnSave = document.getElementById('btn-save');
let btnReset = document.getElementById('btn-reset');

// Elements
let form = document.querySelector(`#form`);
let tbody = document.querySelector(`tbody`);
let formSection = document.querySelector(`.form-section`);
let overlay = document.getElementById(`overlay`);
export let countID = 1;

// inputs
let name = document.getElementById(`name`);
let email = document.getElementById(`email`);
let telNumber = document.getElementById(`tel-number`);
let userImg = document.getElementById(`user-img`);


// functions
let addHiddenClass = () => {
    formSection.classList.add('hidden');
    overlay.classList.add('hidden');
}

let removeHiddenClass = () => {
    formSection.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


// Events
addUserBtn.addEventListener(`click`, () => {
    removeHiddenClass();
});

overlay.addEventListener(`click`, function () {
    addHiddenClass()
})

btnSave.addEventListener(`click`, function (e) {
    e.preventDefault();
    tbody.innerHTML += createUserRow();
    countID++;

    addHiddenClass();
    form.reset();
})