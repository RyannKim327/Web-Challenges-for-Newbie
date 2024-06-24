
function chooseImage(e, id){
  id = document.getElementById(id)
  const files = e.files
  if(files.length > 0){
    const load = files[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      id.src = event.target.result
    }
    reader.readAsDataURL(load)
  }
}
