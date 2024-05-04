async function data1(){
  return await fetch("./assets/todo.json").then(r => {
    return r.json()
  }).then(r => {
     return r
  }).catch(e => {
    return e
  })
}

const data = () => {
  const d =  JSON.parse(localStorage.getItem("todo"))
  if(d) return d
  return { "data": [] }
}

const updateData = (newData) => {
  localStorage.setItem("todo", JSON.stringify(newData))
}

const input = document.getElementById("name")
const lists = document.getElementById("todos")

function reload(){
  const list1 = data()
  const list = list1['data']
  for(let i = 0; i < list.length; i++){
    const todo = list[i]
    const parent = document.createElement("div")
    const title = document.createElement("h3")
    const content = document.createElement("p")

    parent.classList.add("todo")

    title.textContent = todo['title']
    content.textContent = todo['content']

    parent.appendChild(title)
    parent.appendChild(content)
    lists.appendChild(parent)
    
    parent.addEventListener("click", () => {
      if(confirm("Confirmation", "Is this update?")){
        const form = document.getElementById("form")
        const title = document.getElementById("name")
        const content = document.getElementById("content")
        
        title.value = todo['title']
        content.value = todo['content']

        form.addEventListener("submit", () => {
          list1['data'][i]['title'] = title.value
          list1['data'][i]['content'] = content.value
          updateData(list1)
        })
      }else{
        
      }
    })
  }
  return list1
}
 
function update () {
  const d = reload()
  console.log(d)
  const form = document.getElementById("form")
  const title = document.getElementById("name")
  const content = document.getElementById("content")

  form.addEventListener("submit", () => {
    d['data'].push({
      "title": title.value,
      "content": content.value
    })
    alert("Data was saved")
    updateData(d)
    update()
  })
}

update()
