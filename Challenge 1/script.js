const url = [
	"https://picsum.photos/536/354",
	"https://picsum.photos/id/237/536/354",
	"https://picsum.photos/id/237/536/354"
]

window.onload = () => {
	const img = document.getElementById("img")
	let img1 = 0
	let past = img1
	for(let i = 0; i < url.length; i++){
		let im = document.createElement("i")
		im.classList.add("fa-circle")
		im.classList.add("fa-regular")
		im.style.color = "white" 
		im.id = `img_${i}`
		document.getElementById("imgs").appendChild(im)
	}
	img.style.backgroundImage = `url(${url[img1]})`
	document.getElementById(`img_${img1}`).classList.add("fa-solid")
	document.getElementById("prev").onclick = () => {
		img1--
		if(img1 < 0){
			img1 = url.length - 1
		}
		document.getElementById(`img_${past}`).classList.remove("fa-solid")
		console.log("prev " + img1)
		img.style.backgroundImage = `url(${url[img1]})`
		document.getElementById(`img_${img1}`).classList.add("fa-solid")
		past = img1
	}
	document.getElementById("nxt").onclick = () => {
		img1++
		if(img1 >= url.length){
			img1 = 0
		}
		document.getElementById(`img_${past}`).classList.remove("fa-solid")
		img.style.backgroundImage = `url(${url[img1]})`
		console.log("next " + img1)
		document.getElementById(`img_${img1}`).classList.add("fa-solid")
		past = img1
	}
	setInterval(() => {
		img1++
		if(img1 >= url.length){
			img1 = 0
		}
		document.getElementById(`img_${past}`).classList.remove("fa-solid")
		img.style.backgroundImage = `url(${url[img1]})`
		console.log("next " + img1)
		document.getElementById(`img_${img1}`).classList.add("fa-solid")
		past = img1
	}, 5000)
}