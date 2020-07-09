const a = document.getElementById('disp')
const jin = "陣内智則"
let cur = ""

const addchar = function(){
	const c = jin[ Math.floor(Math.random()*(jin.length)) ]
	cur += c
	a.appendChild(document.createTextNode(c+" "))
}

const control = function(){
	addchar()
	if( cur.endsWith("陣内智則") ){
		clearInterval(rep)
	}
}

const intv = 75
const rep = setInterval( control, intv )
