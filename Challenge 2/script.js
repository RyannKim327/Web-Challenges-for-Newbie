function createFormat(sudoku){
  let startCharacter = 97
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      // let display = document.createElement("label")
      // let input = document.createElement("input")
      
      // input.type = "number"
      // input.id = `${97 + i}-${97 + j}`
      // input.max = 9
      // input.min = 1
      // input.style.width = "100%"
      // input.style.height = "100%"
      // input.style.fontSize = "1.5rem"
      // input.style.textAlign = "center"
      // display.appendChild(input)
      // document.getElementById("sudoku").appendChild(display)
      let p = document.createElement("label")
      try{
        p.textContent = sudoku[i][j]
      }catch(e){
        p.textContent = "0"
      }
      document.getElementById("sudoku").appendChild(p)
    }
  }
}

function vertical(sudoku, p, n){
  let x = []
  for(let i = 0; i < sudoku.length; i++){
    x.push(sudoku[i][p])
  }
  return x.includes(n)
}

function createNumbers(){
  let sudoku = []
  for(let i = 0; i < 9; i++){
    let x = []
    for(let j = 0; j < 9; j++){
      let n = Math.floor(Math.random() * 9) + 1
      if(x.includes(n) || vertical(sudoku, j, n)){
        x.push(n)
      }
    }
    sudoku.push(x)
  }
  return sudoku
}

window.onload = () => {
  createFormat(createNumbers())
  console.log(createNumbers())
}
