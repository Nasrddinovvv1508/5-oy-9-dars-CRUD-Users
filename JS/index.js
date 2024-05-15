import { createUserRow, getData } from "./functions.js";

// Button
let addUserBtn = document.getElementById(`add-user`);
let btnSave = document.getElementById('btn-save');
let btnReset = document.getElementById('btn-reset');
let updateBtn = document.querySelectorAll(`.update`);


// Elements
let form = document.querySelector(`#form`);
let tbody = document.querySelector(`tbody`);
let formSection = document.querySelector(`.form-section`);
let overlay = document.getElementById(`overlay`);
let tr = document.querySelectorAll(`tr`);
export let countID = 1;

// inputs
let inputs = document.querySelectorAll(`input`);
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

    // add users to UI and localStorage
    let user = {
        name: name.value,
        email: email.value,
        telNumber: telNumber.value,
        userImg: userImg.value,
        userID: Date.now(),
    }

    tbody.innerHTML += createUserRow(user);
    countID++;

    let data = getData();

    data.push(user);
    localStorage.setItem('users', JSON.stringify(data));

    addHiddenClass();
    form.reset();


    // click delete btn
    let deleteBtn = document.querySelectorAll(`.delete`);

    deleteBtn.forEach((btn) => {
        btn.addEventListener(`click`, function () {
            btn.parentNode.parentNode.remove();
        });
    })

    // console.log(deleteBtn);
});


btnReset.addEventListener(`click`, function (e) {
    e.preventDefault();
    form.reset();
})


let countFocus;
let currentInput;

inputs.forEach((input) => {
    countFocus = 1;
    input.addEventListener(`focus`, () => {
        if (countFocus > 1) {
            currentInput.parentNode.parentNode.firstElementChild.style.color = ``;
            currentInput.parentNode.firstElementChild.style.color = ``
            currentInput.parentNode.style.borderBottomColor = ``;
        }

        currentInput = input;
        currentInput.parentNode.parentNode.firstElementChild.style.color = `#3336e0`;
        currentInput.parentNode.firstElementChild.style.color = `#3336e0`
        currentInput.parentNode.style.borderBottomColor = `#3336e0`;
        countFocus++;
    })
});


document.addEventListener(`DOMContentLoaded`, function () {
    let data = getData();

    data.forEach((user) => {
        tbody.innerHTML += createUserRow(user);
        countID++;
    });

    let deleteBtn = document.querySelectorAll(`.delete`);

    deleteBtn.forEach((btn) => {
        btn.addEventListener(`click`, function () {

            let data = getData();
            let id = btn.parentNode.parentNode.getAttribute(`data-id`);
            let newdata = data.filter((user) => {
                return user.userID != id;
            });

            localStorage.setItem('users', JSON.stringify(newdata));

            let data2 = getData();
            data2.forEach((user) => {
                tbody.innerHTML += createUserRow(user);
            });
        });
    })
});

