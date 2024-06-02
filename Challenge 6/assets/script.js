function userMiddleware (next) {
  return async function (username, password) {
    if(username == "" || password == ""){
      return alert("This must not be empty");
    }
    return await next(username, password)
  }
}

function checkCredentials(username, password){
  if(username == "test" && password == "test"){
    alert("Logged in")
  }else{
    alert("Error")
  }
}

document.getElementById("form").onsubmit = () => {
  const username = document.getElementById("username")
  const password = document.getElementById("password")
  const middleware = userMiddleware(checkCredentials)
  middleware(username.value, password.value)
} 
