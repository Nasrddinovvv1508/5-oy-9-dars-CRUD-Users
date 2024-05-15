import { countID } from "./index.js";

function createUserRow(user) {
    return `
    <tr class="text-center border-b-2 hover:bg-slate-300 hover:cursor-pointer">
        <td class="py-5">${countID}</td>
        <td class="flex justify-center">
            <img class="py-5" src="./Images/favicon-user.png" width="30" height="30" alt="pic">
        </td>
        <td>${user.name}</td>
        <td>
            <a href="mailto:${user.email}">${user.email}</a>
        </td>
        <td>
            <a href="tel:${user.telNumber}">
            ${user.telNumber}
            </a>
        </td>
        <td>
            <button id="update" class="text-blue-600">update</button>
            <button id="delete" class="text-red-600">delete</button>
        </td>
    </tr>
    `
}

function getData() {
    let data = [];

    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'));
    }

    return data;
}

export {createUserRow, getData};