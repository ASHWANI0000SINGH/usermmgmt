// let userName = document.getElementById("user_name");
// let userContact = document.getElementById("contact");
// let userEmail = document.getElementById("email");
// let userPassword = document.getElementById("password")

// const addSignUpForm = document.getElementById("addSignUpForm");
// const tableBody = document.getElementById("tableBody");

// // handler

// function handlerAddform(e) {
//     e.preventDefault();
//     const ID = Date.now();

//     let trTag = document.createElement("tr");
//     let nameTgTag = document.createElement("td");
//     let contactTgTag = document.createElement("td");
//     let emailTgTag = document.createElement("td");
//     let passwordTgTag = document.createElement("td");
//     let editTgTag = document.createElement("td");


//     nameTgTag.innerText = userName.value;
//     contactTgTag.innerText = userContact.value;
//     emailTgTag.innerText = userEmail.value;
//     passwordTgTag.innerText = userPassword.value;
//     editTgTag.innerHTML = ` X ${ID}  `;
//     editTgTag.style.color = "red";



//     trTag.appendChild(nameTgTag);
//     trTag.appendChild(contactTgTag);
//     trTag.appendChild(emailTgTag);
//     trTag.appendChild(passwordTgTag);
//     trTag.appendChild(editTgTag);


//     tableBody.append(trTag)


//     let allUsers = [];

//     if (localStorage.getItem("users")) {
//         allUsers = JSON.parse(localStorage.getItem("users"));

//     }

//     let newUser = {
//         id: ID,
//         name: userName.value,
//         contact: userContact.value,
//         email: userEmail.value,
//         password: userPassword.value,
//     }

//     allUsers.push(newUser);
//     localStorage.setItem("users", JSON.stringify(allUsers));

// }

// function deleteuser(e) {
//     const ID = e.id;
//     e.parentElement.parentElement.remove();
// }


// //event listener
// addSignUpForm.addEventListener("submit", handlerAddform)


// //onload
// window.onload = function() {
//     let allUsers = []
//     if (this.localStorage.getItem("users")) {
//         allUsers = JSON.parse(this.localStorage.getItem("users"));

//         allUsers.forEach(user => {
//             let trTag = document.createElement("tr");
//             let nameTgTag = document.createElement("td");
//             let contactTgTag = document.createElement("td");
//             let emailTgTag = document.createElement("td");
//             let passwordTgTag = document.createElement("td");
//             let editTgTag = document.createElement("td");

//             nameTgTag.innerText = user.name;
//             contactTgTag.innerText = user.contact;
//             emailTgTag.innerText = user.email;
//             passwordTgTag.innerText = user.password;
//             editTgTag.innerHTML = ` X    `;
//             editTgTag.style.color = "red";

//             trTag.appendChild(nameTgTag);
//             trTag.appendChild(contactTgTag);
//             trTag.appendChild(emailTgTag);
//             trTag.appendChild(passwordTgTag);
//             trTag.appendChild(editTgTag);


//             tableBody.append(trTag)

//         })
//     }
// }