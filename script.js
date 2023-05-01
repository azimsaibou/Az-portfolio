let moon = document.querySelector(".bx-moon");
let nav = document.querySelector("nav")

function balancerCouleur(){
	if(moon.classList.contains("bx-moon")){
		moon.classList.replace("bx-moon", "bx-sun");
		document.body.classList.add("active");
		nav.classList.add("active")
	}else{
		moon.classList.replace("bx-sun", "bx-moon");
		document.body.classList.remove("active")
		nav.classList.remove("active")
	}
}



moon.addEventListener("click", balancerCouleur);