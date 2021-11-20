let form = document.querySelector("form");
let firstName = document.querySelector(".firstname-container");
let lastName = document.querySelector(".lastname-container");
let email = document.querySelector(".email-container");
let password = document.querySelector(".password-container");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  // check first name
  if (isEmpty(firstName.querySelector("input").value)) {
    valid = false;

    firstName.classList.add("error");
  } else {
    firstName.classList.remove("error");
  }

  // check last name
  if (isEmpty(lastName.querySelector("input").value)) {
    valid = false;

    lastName.classList.add("error");
  } else {
    lastName.classList.remove("error");
  }

  // check email
  if (!isEmailValid(email.querySelector("input").value)) {
    valid = false;

    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  // check password
  if (isEmpty(password.querySelector("input").value)) {
    valid = false;

    password.classList.add("error");
  } else {
    password.classList.remove("error");
  }

  if (valid) {
    form.submit();
  }
});

// checks if string is empty
function isEmpty(s) {
  if (s.length == 0) {
    return true;
  }
  return false;
}

// checks if email is valid
function isEmailValid(e) {
  let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(e);
}
