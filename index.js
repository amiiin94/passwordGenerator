let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveBtn = document.getElementById("save-btn");

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()-=_+{}[];':/?<>,.`~";
  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";

  for (let index = 0; index < len; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
}

function savePassword() {
  // Copy the text inside the text field
  navigator.clipboard.writeText(password.value);
  alert("Password copied");
}
