function createFormat(){
  let startCharacter = 97
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      let display = document.createElement("label")
      let input = document.createElement("input")
      
      input.type = "number"
      input.id = `${97 + i}-${97 + j}`
      input.max = 9
      input.min = 1
      input.style.width = "100%"
      input.style.height = "100%"
      input.style.fontSize = "1.5rem"
      input.style.textAlign = "center"
      display.appendChild(input)
      document.getElementById("sudoku").appendChild(display)
    }
  }
}

function isInLine(sudoku, y, block, position, number){
  let inLine = false
  if(y.includes(number)){
    return true
  }else{
    
      for(let i = 0; i < 9; i++){
        let c = sudoku[i]
        if(c[0][block] == number || c[1][block] == number || c[2][block] == number || c[3][block] == number || c[4][block] == number || c[5][block] == number || c[6][block] == number || c[7][block] == number || c[8][block] == number){
          return true
        }
      }
    //}
  }
  return false
}

function createNumbers(){
  let sudoku = []
  for(let i = 0; i < 9; i++){
    let y = []
    for(let j = 0; j < 9; j++){
      let x = Math.floor(Math.random() * 9) + 1
      if(!isInLine(sudoku, y, j, i, x)){
        y.push(x)
      }else{
        j--
      }
    }
    sudoku.push(y)
  }
  return sudoku
}

window.onload = () => {
  createFormat()
  console.log(createNumbers())
}
