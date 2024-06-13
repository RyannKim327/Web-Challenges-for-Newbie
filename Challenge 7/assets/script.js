function $(element){
  // INFO: This is to get the element easily
  // # -> id
  // . -> class
  return document.querySelector(element)
}

function generate_password(){
  const length = Math.floor(Math.random() * 4) + 8
  const lowercase_characters = "abcdefghijklmnopqrstuvwxyz"
  const uppercase_characters = lowercase_characters.toLowerCase()
  const number_characters = "0123456789"
  const special_characters = "_-+="
  const characters = lowercase_characters + uppercase_characters + number_characters + special_characters

  var password = ""
  for(let i = 0; i < length; i++){
    const random = Math.floor(Math.random() * characters.length)
    password += characters[random]
  }    
  return password
}

function show_password(id){
  if(id.type === "password"){
    id.type = "text"
  }else{
    id.type = "password"
  }
}

window.onload = () => {
  // INFO: After the window or page is load, everything here starts.
  
  const shopaw = $("#shopaw")
  shopaw.classList.add("nf-fa-eye")
  $("#password").value = generate_password()
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
