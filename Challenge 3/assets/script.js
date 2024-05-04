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

let update_ = false

const input = document.getElementById("name")
const lists = document.getElementById("todos")

function reload(){
  lists.innerHTML = ""
  const list1 = data()
  const list = list1['data']
  for(let i = 0; i < list.length; i++){
    const todo = list[i]
    const parent = document.createElement("div")
    const title = document.createElement("h3")
    const content = document.createElement("p")

    parent.classList.add("todo")
    if(todo['done']){
      parent.classList.add("done")
    }
    title.textContent = todo['title']
    content.textContent = todo['content']

    parent.appendChild(title)
    parent.appendChild(content)
    lists.appendChild(parent)
    
    parent.addEventListener("click", () => {
      const _ = parseInt(prompt("1. Edit\n2. Update", ""))
      update_ = true
      switch(_){
        case 1:
          const form = document.getElementById("form")
          const title = document.getElementById("name")
          const content = document.getElementById("content")
        
          title.value = todo['title']
          content.value = todo['content']

          form.addEventListener("submit", () => {
            list1['data'][i]['title'] = title.value
            list1['data'][i]['content'] = content.value
            if(update_){
              updateData(list1)
              update_ = false
            }
          })
        break
        case 2:
          if(update_){
            list1['data'][i]['done'] = true
            updateData(list1)
            update_ = false
          }
        break
      }
      reload()
    })
  }
  return list1
}
 
function update () {
  const d = reload()
  const form = document.getElementById("form")
  const title = document.getElementById("name")
  const content = document.getElementById("content")

  form.addEventListener("submit", () => {
    if(!update_){
      d['data'].push({
        "title": title.value,
        "content": content.value,
        "done": false
      })
      alert("Data was saved")
      updateData(d)
      update()
    }
  })
}

update()
