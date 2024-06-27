const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const player = document.getElementById("player")
const bot = document.getElementById("bot")

let score_player = 5
let score_bot = 5

const items = [
  "fa-hand-back-fist",
  "fa-hand",
  "fa-hand-scissors"
]

function game(_player){
  // TODO: _player Defines for choice of the player
  const _bot = Math.floor(Math.random() * items.length)
  let mp = player.classList.value.match(/fa\-hand(.*)/gi) // , items[_player])
  let mb = bot.classList.value.match(/fa\-hand(.*)/gi) // , items[_bot])
  let _ = 0
  player.classList.remove(mp[0])
  bot.classList.remove(mb[0])
  
  player.classList.add("fa-hand-back-fist")
  bot.classList.add("fa-hand-back-fist")

  switch(_player){
    case 0: // INFO: Rock
      switch(_bot){
        case 0: // INFO: Rock
          _ = 0;
        break
        case 1: // INFO: Paper
          _ = 1
        break
        case 2: // INFO: Scissor
          _ = -1
        break
      }
    break
    case 1: // INFO: Paper
      switch(_bot){
        case 0: // INFO: Rock
          _ = -1;
        break
        case 1: // INFO: Paper
          _ = 0
        break
        case 2: // INFO: Scissor
          _ = 1
        break
      }
    break
    case 2: // INFO: Scissor
      switch(_bot){
        case 0: // INFO: Rock
          _ = 1;
        break
        case 1: // INFO: Paper
          _ = -1
        break
        case 2: // INFO: Scissor
          _ = 0
        break
      }
    break
  }
  
  mp = player.classList.value.match(/fa\-hand(.*)/gi) // , items[_player])
  mb = bot.classList.value.match(/fa\-hand(.*)/gi) // , items[_bot])
  document.getElementById("b-play").classList.add("p-anim")
  document.getElementById("b-bot").classList.add("b-anim")
  setTimeout(() => {
    document.getElementById("b-play").classList.remove("p-anim")
    document.getElementById("b-bot").classList.remove("b-anim")
    player.classList.remove(mp[0])
    bot.classList.remove(mb[0])
    player.classList.add(items[_player])
    bot.classList.add(items[_bot])
    score_player += (_ * -1)
    score_bot += _
    document.getElementById("score").textContent = `${score_player} < P : B > ${score_bot}`
  }, 2500)
}

rock.onclick = () => {
  game(0)
}

paper.onclick = () => {
  game(1)
}

scissor.onclick = () => {
  game(2)
}
