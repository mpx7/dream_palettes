const a = document.getElementById('disp')
const jin = "陣内智則"
let cur = ""

let addchar = function(){
	let c = jin[ Math.floor(Math.random()*(jin.length)) ]
	cur += c
	a.appendChild(document.createTextNode(c+" "))
}

let control = function(){
	addchar()
	if( cur.endsWith("陣内智則") ){
		clearInterval(rep)
	}
}

const intv = 150
let rep = setInterval( control, intv )
