let imgs = []
let points = []
const imageSrc = ["img_1.jpg", "img_2.jpg", "img_3.jpg"]
function show(position){
	const images = document.getElementById("img")
	for(let i in imageSrc){
		const img = document.createElement("img")
		const point = document.createElement("span")
		img.src = `assets/${imageSrc[i]}`
		img.classList.add("in")
		point.textContent = parseInt(i)+ 1
		if(position != 0){
			img.style.display = `none`
		}
		if(position == 0){
			point.style.backgroundColor = "#333333"
			point.style.color = "white"
		}else{
			point.style.backgroundColor = "#ffffff"
			point.style.color = "black"
		}
		images.appendChild(img)
		imgs.push(img)
		width = img.width

		points.push(point)
		document.getElementById("points").appendChild(point)
	}
}

window.onload  = () => {
	let position = 0
	show(position)
	setInterval(() => {
		for(let i in imgs){
			imgs[i].classList.remove("out")
			imgs[i].classList.add("in")
		}
		if(position < imageSrc.length - 1){
			position++
			imgs[position - 1].classList.remove("in")
			imgs[position - 1].classList.add("out")
			setTimeout(() => {
				imgs[position - 1].style.display = "none"
			}, 250)
			imgs[position - 1].classList.add("in")
			points[position - 1].style.backgroundColor = "white"
			points[position - 1].style.color = "black"
		}else{
			imgs[imageSrc.length - 1].classList.add("out")
			setTimeout(() => {
				imgs[imageSrc.length - 1].style.display = "none"
			}, 250)
			imgs[imageSrc.length - 1].classList.add("in")
			points[imageSrc.length - 1].style.backgroundColor = "white"
			points[imageSrc.length - 1].style.color = "black"
			position = 0
		}
		imgs[position].classList.remove("out")
		setTimeout(() => {
			imgs[position].classList.add("in")
			imgs[position].style.display = "block"
		}, 750)
		for(let x = 0; x < 3; x++){
			if(position == (x - 1)){
				points[(position % 3) + 1].style.backgroundColor = "#333333"
				points[(position % 3) + 1].style.color = "white"
			}else{
				points[position].style.backgroundColor = "#ffffff"
				points[position].style.color = "black"
			}
		}
	}, 2500);
}
