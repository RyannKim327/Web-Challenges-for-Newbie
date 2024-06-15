function $(element){
  // INFO: This is to get the element easily
  // # -> id
  // . -> class
  return document.querySelector(element)
}

function generate_password(){
  const username = $("#username").value
  const length = username.length > 8 ? username.length : Math.floor(Math.random() * 4) + 8
  const lowercase_characters = "abcdefghijklmnopqrstuvwxyz"
  const uppercase_characters = lowercase_characters.toLowerCase()
  const number_characters = "0123456789_"
  const special_characters = {
    "a": "@",
    "b": "8",
    "e": "3",
    "g": "9",
    "h": "#",
    "i": "!",
    "l": "1",
    "o": "0",
    "s": "$"
  }
  const characters = lowercase_characters + uppercase_characters + number_characters + Object.values(special_characters).join("")

  var password = ""
  if(username.length >= 5){
    // TODO: To genereate a password based on their username for them to easily remember it.
    for(let i = 0; i < username.length; i++){
      const s = Math.floor(Math.random() * 3)
      const t = Object.keys(special_characters)
      if((s % 2) == 0 && t.includes(username[i])){
        password += special_characters[username[i]]
      }else{
        password += username[i]
      }
    }
    if(password.length < 8){
      password += "|"
      const l = Math.floor(Math.random() * 8) + 8
      for(let i = password.length; i < l; i++){
        const r = Math.floor(Math.random() * characters.length)
        password += characters[r]
      }
    }
  }

  if(password.length <= 8 || username == password){
    // TODO: Generate a random password if the username is less than 8 characters and also equal to the username
    password = ""
    for(let i = 0; i < length; i++){
      const random = Math.floor(Math.random() * characters.length)
      password += characters[random]
    }
  }
  return password.replace(/\s/gi, "_")
}

function show_password(id){
  if(id.type === "password"){
    id.type = "text"
  }else{
    id.type = "password"
  }
}

function validation(){
  const username = $("#username")
  const password = $("#password")
  const retype = $("#retype")
  
  const _username = username.parentElement
  const _password = password.parentElement
  const _retype = retype.parentElement

  if(username.value.length < 4){
    _username.style.borderColor = "#ff0000"
    _username.style.color = "#ff0000"
    username.style.color = "#ff0000"
  }else{
    _username.style.borderColor = "#000000"
    _username.style.color = "#000000"
    username.style.color = "#000000"
  }

  if(password.value.length < 8){
    _password.style.borderColor = "#ff0000"
    _password.style.color = "#ff0000"
    password.style.color = "#ff0000"
  }else{
    _password.style.borderColor = "#000000"
    _password.style.color = "#000000"
    password.style.color = "#000000"
  }
  
  if(password.value != retype.value){
    _retype.style.borderColor = "#ff0000"
    _retype.style.color = "#ff0000"
    retype.style.color = "#ff0000"
  }else{
    _retype.style.borderColor = "#000000"
    _retype.style.color = "#000000"
    retype.style.color = "#000000"
  }

}

window.onload = () => {
  // INFO: After the window or page is load, everything here starts.
  
  const shopaw = $("#shopaw")
  shopaw.classList.add("nf-fa-eye")
  $("#password").value = generate_password()
  $("#password").onselect = () => {
    $("#password").selectionStart = 0
    $("#password").selectionEnd = 0
  }
  validation()
  $("#username").onkeyup = () => {
    $("#password").value = generate_password()
    validation()
  }

  $("#password").onkeyup = () => {
    validation()
  }
  
  $("#retype").onkeyup = () => {
    validation()
  }

  shopaw.addEventListener("click", () => {
    show_password($("#password"))
    // NOTE: The classList.value returns to a string which is the value of class in html
    // I used eye_slash, instead of eye because of the eye_slash still contains eye
    // So it won't work
    if(shopaw.classList.value.includes("nf-fa-eye_slash")){
      shopaw.classList.add("nf-fa-eye")
      shopaw.classList.remove("nf-fa-eye_slash")
    }else{
      shopaw.classList.add("nf-fa-eye_slash")
      shopaw.classList.remove("nf-fa-eye")
    }
  })
}
