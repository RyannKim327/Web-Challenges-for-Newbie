window.onload = () => {
  let date = new Date()
  
  function reload(year, month){
    let __date = new Date([year, month + 1, 1])
    let _date = new Date(year, month + 1, 0)
    const base = document.createElement("div")
    base.classList.add("calendars")
    
    // TODO: To clear the entire text
    base.innerHTML = ""
    
    const dates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
    for(let i = 0; i < dates.length; i++){
      const p = document.createElement("p")
      p.classList.add("days")
      p.textContent = dates[i]
      base.appendChild(p)
    }

    for(let i = 0; i <= (_date.getDate() + __date.getDay()); i++){
      const p = document.createElement("p")
      if(i >= __date.getDay()){
        p.textContent = (i - __date.getDay()) + 1
        p.classList.add("dates")
      }
      base.appendChild(p)
    }

    document.getElementById("base-calendar").appendChild(base)
  }
  

  let year = date.getFullYear()
  for(let i = 0; i < 12; i++){
    reload(year, i)
  }
}
