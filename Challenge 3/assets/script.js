const $ = (name) => {
  return document.querySelector(name)
}

const data = () => {
  // INFO: Data Storage
  const d =  JSON.parse(localStorage.getItem("todo"))
  if(d) return d
  return { "data": [] }
}

const updateData = (newData) => {
  localStorage.setItem("todo", JSON.stringify(newData))
}

// INFO: Global Variables
// NOTE: Pwede ding var, pero bet ko si let para let it go ganun
let update_ = false

const input = $("#name")
const lists = $("#todos")
const title_html = $("#title")

function reload(){

  // INFO: First is you need to clear the entire list before you generate a new lists for update
  lists.innerHTML = ""
  const list1 = data()
  const list = list1['data']

  list.map((todo) => {
    // INFO: Creation of new Element where it appends to the lists id
    const parent = document.createElement("div")
    const title = document.createElement("h3")
    const content = document.createElement("p")

    parent.classList.add("todo")
    if(todo['done']){
      parent.classList.add("done")
    }
    title.textContent = todo['title']
    content.innerHTML = todo['content'].replace(/\n/gi, "<br>")

    parent.appendChild(title)
    parent.appendChild(content)
    lists.appendChild(parent)
    
    parent.addEventListener("click", () => {

      // INFO: This prompt is to get the number from the user once the item is clicked.
      const _ = parseInt(prompt("1. Edit\n2. Update", ""))
      update_ = true

      switch(_){
        case 1: // TODO: Update the current data's value and information
          const form = $("#form")
          const title = $("#name")
          const content = $("#content")
        
          title.value = todo['title']
          content.value = todo['content']

          form.addEventListener("submit", () => {
            todo['title'] = title.value
            todo['content'] = content.value
            if(update_){
              updateData(list1)
              update_ = false
            }
          })
        break
        case 2: // TODO: Update the current data as done or finished
          if(update_){
            todo['done'] = true
            updateData(list1)
            update_ = false
          }
        break
      }
      reload()
    })
  })
  return list1
}

function validation(next){
  // INFO: This middleware is for validation if the values are all agreed or not.
  return async function(title, content){
    const regex_title = /([\w]+)/
    const regex_content = /([\w\W]+)/
    if(!regex_title.test(title) || !regex_content.test(content)){
      title_html.textContent = "Invalid arguments"
      setTimeout(() => {
        title_html.textContent = "Todo Lists"
      }, 5000)
      return // INFO: For those who don't know, this is just a termination of the program to avoid the next function to be trigger
    }
    return await next(title, content)
  }
}

function appendData(title, content){
  const _data = reload()
  _data['data'].push({
    "title": title,
    "content": content,
    "done": false
  })
  title_html.textContent = "New Data Added"

  updateData(_data)
  update()
  
  setTimeout(() => {
    title_html.textContent = "Todo Lists"
  }, 5000)
}

function update () {
  // INFO: This update is the responsible for the web to see the lists.
  const form = $("#form")
  const title = $("#name")
  const content = $("#content")

  form.addEventListener("submit", () => {
    if(!update_){
      const append_data = validation(appendData)
      append_data(title.value, content.value)
    }
  })
  reload()
}

update()
