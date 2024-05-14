import { countID } from "./index.js";

function createUserRow() {
    return `
    <tr class="text-center border-b-2 hover:bg-slate-300 hover:cursor-pointer">
        <td class="py-5">${countID}</td>
        <td class="flex justify-center">
            <img class="py-5" src="./Images/favicon-user.png" width="30" height="30" alt="pic">
        </td>
        <td>${form.name.value}</td>
        <td>
            <a href="mailto:${form.email.value}">${form.email.value}</a>
        </td>
        <td>
            <a href="tel:${form[`tel-number`].value}">
            ${form[`tel-number`].value}
            </a>
        </td>
        <td>
            <button class="text-blue-600">update</button>
            <button class="text-red-600">delete</button>
        </td>
    </tr>
    `
}

export {createUserRow};