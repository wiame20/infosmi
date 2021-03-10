var start  = document.getElementById('start')
start.addEventListener('click',quizScript)

var qs = document.getElementById('qs')
var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var a3 = document.getElementById('a3')
a1.addEventListener('click',quizScript)
a2.addEventListener('click',quizScript)
a3.addEventListener('click',quizScript)

var i = 1
function quizScript(){
	start.style.display = "none"
	document.getElementById("quiz_content").style.display = "inline"
	qs.textContent = qss[i]
	a1.textContent = a1s[i]
	a2.textContent = a2s[i]
	a3.textContent = a3s[i]
	i++
	if(i >5){
		document.getElementById("quiz_content").style.display = "none"
		document.getElementById('thanks').style.display = "inline"
		document.getElementById('answers').style.display = "inline"
		document.getElementById('thanks').style.opacity = "1"
	}

}

const qss = {
	1 :'La language C est une language de niveau ...',
	2 :"Est ce que le meme code assembleur peut s'executer pour toute les machines?",
	3 :"Dont ou le temps d'exécution est court?",
	4 :"À l'époque, Quelle est la langage de compilation de C?  ",
}
console.log(qss[1])
const a1s = {
	1:'Bas',
	2:'Oui',
	3:'Compiler',
	4:'B',
	5:'mooooy',
}

const a2s = {
	1:"Haut",
	2:'Non',
	3:'Interpreter',
	4:'A',
}

const a3s = {
	1:'Moyen',
	2:':>',
	3:'Les mêmes',
	4:'Go',
}