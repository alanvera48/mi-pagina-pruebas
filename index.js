
// Nav
var l_home = document.getElementById('l_home');
var l_about = document.getElementById('l_about');
var l_skill = document.getElementById('l_skill');
var l_contact = document.getElementById('l_contact');
 

 window.onload = function(){
	l_home.style.transform = ('translateY(0)');
	l_about.style.transform = ('translateY(0)');
	l_skill.style.transform = ('translateY(0)');
	l_contact.style.transform = ('translateY(0)');
	
}
 	
// Nav


 atitle = document.getElementById('atitle');

function noshow(){
	atitle.style.opacity = ('0');
}

function show(){
	atitle.style.opacity = ('1');
}



setInterval(noshow,2000);
setInterval(show, 2500);


// function pepe(){
// 	let rol = window.pageYOffset;

	

// 	window.addEventListener('scroll', function() {

// 		console.log(window.pageYOffset);

// 	// 	if(rol < 650){
// 	// 	alert('hola');
// 	// }
			
// 		})
// }

// pepe();

// Slide

home = document.getElementById('li_home');
about = document.getElementById('li_about');
skill = document.getElementById('li_skill');
contact = document.getElementById('li_contact');


slihome = document.getElementById('home');
sliabout = document.getElementById('abourclo');
sliskill = document.getElementById('skill');
slicontact = document.getElementById('contact');
contenedor = document.getElementById('contenedor');



home.onclick=()=>{
	slihome.style.transform = ('translateX(0)');
	sliabout.style.transform = ('translateX(100%)');
	sliskill.style.transform = ('translateX(200%)');
	slicontact.style.transform = ('translateX(300%)');
	
	
}


about.onclick=()=>{
	slihome.style.transform = ('translateX(-100%)');
	sliabout.style.transform = ('translateX(0)');
	sliskill.style.transform = ('translateX(100%)');
	slicontact.style.transform = ('translateX(300%)');
	
	
}


skill.onclick=()=>{
	slihome.style.transform = ('translateX(-200%)');
	sliabout.style.transform = ('translateX(-100%)');
	sliskill.style.transform = ('translateX(0)');
	slicontact.style.transform = ('translateX(100%)');
	

}


contact.onclick=()=>{
	slihome.style.transform = ('translateX(-300%)');
	sliabout.style.transform = ('translateX(-200%)');
	sliskill.style.transform = ('translateX(-100%)');
	slicontact.style.transform = ('translateX(0)');

	
}


// Slide


// Lenguege

var es = document.getElementById('es');
var en = document.getElementById('en');
var active = document.getElementById('active');
	titulo2 = document.getElementById('h2');
	pabout = document.getElementById('pabout');
	h4 = document.getElementById('h4');
	h6 = document.getElementById('h6');
	h62 = document.getElementById('h62');


en.onclick =()=>{
	active.style.transform = ('translateX(100%)');
	active.classList.remove("ingles");
	active.classList.add("español");
	home.innerHTML = "Inicio";
	about.innerHTML = "Sobre mi";
	skill.innerHTML = "Conocimientos";
	contact.innerHTML = "Contactame";
	titulo2.innerHTML = "Hola a Todos";
	pabout.innerHTML = " Mi nombre es Alan Vera y soy desarrolador Front End.<br><br> Soy de Buenos Aires, Argentins. He estado trabajando de desarrolador desde el 2019, año en el que conoci este fantastico mundo. <br><br>Mi viaje, tu viaje comienza aca <br> Gracias por visitarme";
	h4.innerHTML= "Conocimientos";
	h6.innerHTML = "Podes encontrarme en :";
	h62.innerHTML = "Trabajemos juntos";
 }

es.onclick =()=>{
	active.style.transform = ('translateX(0)');
	active.classList.remove("español");
	active.classList.add("ingles");
	home.innerHTML = "Home";
	about.innerHTML = "About";
	skill.innerHTML = "Skill";
	contact.innerHTML = "Contact";
	titulo2.innerHTML = "Hi Everyone";
	pabout.innerHTML = "My name is Alan Vera and i am a Front end Developer.<br><br> I am from Buenos Aires, Argentina. I have been working in this area since 2019 when I discover this AWESOME WORLD. <br><br>My history and my journey, your journey star here¡ <br>Thanks for visit me¡";
	h4.innerHTML= "Skills";
	h6.innerHTML = "You can find me in:";
	h62.innerHTML = "Lets Work Together";
}

// Burger Toggle


