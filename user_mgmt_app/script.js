// constUserData = ["ashwani", 7019615761, "singhashwanikumar793@gmail.com"];

// //1.add data
// constUserData.push("abcd", 1111, "a@xyz.com")

// //2.delete data

// //3. chnage data


// const userData = {
//     userData1: ["ashwani", 7019615761, "singhashwanikumar793@gmail.com"],
//     userData2: ["ash", 111, "xyz@gmail.com"],

// }

// const submit_button = document.getElementById("submit-button");
// let userName = document.getElementById("user_name");
// let userContact = document.getElementById("contact");
// let userEmail = document.getElementById("email");
// let userPassword = document.getElementById("password");
// let nameError = document.getElementById("name_error");
// let contactError = document.getElementById("contact_error");
// let emailError = document.getElementById("email_error");
// let passwordError = document.getElementById("password_error");
// let testData = document.getElementById("test-data");
// let containerBox = document.getElementById("container")

// submit_button.addEventListener("click", registerUser);

// function registerUser(event) {
//     event.preventDefault();

//     let isAllowed = true;
//     // validation

//     if (userName.value === "") {
//         console.log("input is empty");
//         isAllowed = false;
//         nameError.className = ".error";

//     } else {
//         console.log("input is not empty")
//     }


//     if (userContact.value === "") {
//         console.log("input is empty");
//         isAllowed = false;
//         contactError.className = ".error"


//     } else {
//         console.log("input is not empty")
//     }

//     if (userEmail.value === "") {
//         console.log("input is empty");
//         userEmail.style.borderColor = "red";
//         isAllowed = false;
//         emailError.className = ".error";


//     } else {
//         console.log("input is not empty")
//     }
//     if (userPassword.value === "") {
//         console.log("input is empty");
//         userPassword.style.borderColor = "red";
//         isAllowed = false;
//         passwordError.className = ".error";

//     } else {
//         console.log("input is not empty")
//     }



//     // email validation

//     const regExp =
//         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     console.log()
//     if (regExp.test(userEmail.value) === false) {
//         emailError.className = ".error";

//     } else {
//         //email is valid
//         userEmail.style.borderColor = "black";
//     }

//     // validation all true
//     if (isAllowed) {
//         //user allowed to register
//         if (localStorage.myUsers === undefined) {
//             localStorage.myUsers = JSON.stringify([]);

//         }
//         let users = JSON.parse(localStorage.myUsers);

//         //crete obj for user
//         let newUser = {
//             "name": userName.value,
//             "email": userEmail.value,
//             "contact": userContact.value,
//             "password": userPassword.value
//         };
//         users.push(newUser);


//         //updatelocal storage
//         localStorage.myUsers = JSON.stringify(users);

//         // localStorage.setItem("newUser".JSONstringify(newUser));

//         // geeting data from local stortage

//         // testData.innerHTML = localStorage.getItem("newUser");
//         console.log(localStorage.getItem("myUsers"));
//         let [name, email, contact, password] = JSON.parse(localStorage.getItem("myUsers"))
//         console.log(name, email, contact, password);






//         // destructuring daata

//         // console.log(JSON.stringify(localStorage.getItem("newUser")));

//         alert("your account created");


//         containerBox.innerHTML = "";
//         const html = `
//             <table>
//             <tr>
//                 <th>Sr</th>
//                 <th>Name</th>
//                 <th>Contact</th>
//                 <th>Email</th>

//             </tr>
//             <tr>
//                 <td>1</td>
//                 <td>  ${JSON.stringify(name)}</td>
//                 <td>  ${JSON.stringify(contact)}</td>
//                 <td>  ${JSON.stringify(email)}</td>
//             </tr>
//             <tr>
//             <td>1</td>
//             <td> </td>
//             <td> </td>
//             <td> </td>
//         </tr>
//         </table>`;

//         containerBox.insertAdjacentHTML("afterend", html)



//         // window.location = "login.html";
//     } else {
//         //user not allowed
//     }
// }

























// new 
const submit_button = document.getElementById("submit-button");
let userName = document.getElementById("user_name");
let userContact = document.getElementById("contact");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let nameError = document.getElementById("name_error");
let contactError = document.getElementById("contact_error");
let emailError = document.getElementById("email_error");
let passwordError = document.getElementById("password_error");
let testData = document.getElementById("test-data");
let containerBox = document.getElementById("container")




const addSignUpForm = document.getElementById("addSignUpForm");
const tableBody = document.getElementById("tableBody");

// handler

function handlerAddform(e) {
    e.preventDefault();
    const ID = Date.now();

    let trTag = document.createElement("tr");
    let nameTgTag = document.createElement("td");
    let contactTgTag = document.createElement("td");
    let emailTgTag = document.createElement("td");
    let passwordTgTag = document.createElement("td");
    let editTgTag = document.createElement("td");


    nameTgTag.innerText = userName.value;
    contactTgTag.innerText = userContact.value;
    emailTgTag.innerText = userEmail.value;
    passwordTgTag.innerText = userPassword.value;
    editTgTag.innerHTML = ` X ${ID}  `;
    editTgTag.style.color = "red";



    trTag.appendChild(nameTgTag);
    trTag.appendChild(contactTgTag);
    trTag.appendChild(emailTgTag);
    trTag.appendChild(passwordTgTag);
    trTag.appendChild(editTgTag);


    tableBody.append(trTag)


    let allUsers = [];

    if (localStorage.getItem("users")) {
        allUsers = JSON.parse(localStorage.getItem("users"));

    }

    let newUser = {
        id: ID,
        name: userName.value,
        contact: userContact.value,
        email: userEmail.value,
        password: userPassword.value,
    }

    allUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(allUsers));

}

function deleteuser(e) {
    const ID = e.id;
    e.parentElement.parentElement.remove();
}


//event listener
addSignUpForm.addEventListener("submit", handlerAddform)


//onload
window.onload = function() {
    let allUsers = []
    if (this.localStorage.getItem("users")) {
        allUsers = JSON.parse(this.localStorage.getItem("users"));

        allUsers.forEach(user => {
            let trTag = document.createElement("tr");
            let nameTgTag = document.createElement("td");
            let contactTgTag = document.createElement("td");
            let emailTgTag = document.createElement("td");
            let passwordTgTag = document.createElement("td");
            let editTgTag = document.createElement("td");

            nameTgTag.innerText = user.name;
            contactTgTag.innerText = user.contact;
            emailTgTag.innerText = user.email;
            passwordTgTag.innerText = user.password;
            editTgTag.innerHTML = ` X    `;
            editTgTag.style.color = "red";

            trTag.appendChild(nameTgTag);
            trTag.appendChild(contactTgTag);
            trTag.appendChild(emailTgTag);
            trTag.appendChild(passwordTgTag);
            trTag.appendChild(editTgTag);


            tableBody.append(trTag)

        })
    }
}