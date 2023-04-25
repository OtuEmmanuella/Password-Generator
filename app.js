const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "/",
  "?",
]

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLength = 15

function generateRandomCharacters() {
  let randomChars = Math.floor(Math.random() * characters.length)
  return characters[randomChars]
}

function generateRandomPassword() {
  let password = ""
  for (let i = 0; i < passwordLength; i++) {
    password += generateRandomCharacters()
  }
  return password
}

function generatePassword() {
  passwordOne.textContent = generateRandomPassword()
  passwordTwo.textContent = generateRandomPassword()
}

function resetPassword() {
  passwordOne.textContent = ""
  passwordTwo.textContent = ""
}
