// skrypt dotyczy znikania poszczególnych elem/tagów navigacji po jego kliknięciu w wersji mobilnej, po wcześniejszym przejściu by kotwice do danego tagu

document.addEventListener("DOMContentLoaded", function () {
	// czyli po urochumieniu html i css mają się uruchomić scrypty w JS. Ten zapis ma tak wyglądać
	
	const navigItems = document.querySelectorAll(".nav-link")
	// qSAll bo jest 6 a linków z tą klasą
	const navList = document.querySelector(".navbar-collapse")
	// musi być .navbar-collapse a nie np ta poniżej czyli navbar-nav gdyż w devtoolsach widać ze w tej klasie ...collapse pojawia się i znika .show przy click burger-icon
	const nav = document.querySelector(".navbar")//całe pudełko nav

	//pasek navigacji
	function addShadow() {
		if (window.scrollY >= 200) {
			// czyli zejdziesz na osi Y w dół o ponad 200px
			nav.classList.add("shadow-bg")
		} else {
			nav.classList.remove("shadow-bg")
		}
		console.log(window.scrollY);
	}
	
	navigItems.forEach((item) =>
	item.addEventListener("click", () => navList.classList.remove("show"))//show - klasa bootstrap
	)
	// item to każdy link z .nav-link. A sam kod tzn jego wywołanie powoduje że po każdym click jednego z linków chowa się pasek navigacji

	window.addEventListener("scroll", addShadow)
	// przy scrolowaniu , przy zbliżaniu się do navigacji zaciemnia się pasek navigacji i dzięki temu nasz navbar z HOME itp jest dalej jasno widoczny
})