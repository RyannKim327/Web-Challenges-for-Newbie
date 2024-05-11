const imgs = document.getElementById("imgs")

window.onload = () => {
  const imgs_list = [
    "https://i.pinimg.com/564x/9f/97/f4/9f97f4e185fa128f9033d1edb49289ee.jpg",
    "https://i.pinimg.com/736x/c2/36/74/c236747cd41f8a2605f8d6bfededb9ff.jpg",
    "https://i.pinimg.com/736x/9e/04/ac/9e04ac67d79713c00169e904f4ee0a2c.jpg",
    "https://i.pinimg.com/736x/fb/df/94/fbdf94b3c58c08ed5d265e9e06e946e5.jpg",
    "https://i.pinimg.com/736x/8d/3b/41/8d3b412b7ce3e9923bc8bc18a1da57ba.jpg",
    "https://i.pinimg.com/736x/b4/28/92/b42892b0e799874ee164e2c82afa5c66.jpg",
    "https://i.pinimg.com/736x/04/b6/9f/04b69ff3ea2480aa42c67156f39c600f.jpg"

  ]
  
  document.getElementById("bg").style.backgroundImage = `url(${imgs_list[0]})`
  for(let image of imgs_list){
    const img = document.createElement("img")
    img.src = image
    
    img.addEventListener("click", () => {
      document.getElementById("bg").style.backgroundImage = `url(${image})`
    })

    imgs.appendChild(img)
  }
}
