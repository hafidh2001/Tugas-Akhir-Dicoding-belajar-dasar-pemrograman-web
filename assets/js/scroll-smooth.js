// Scroll dengan langsung mengambil data keseluruhan pada TAG HTML "a"

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior : "smooth"
		});
	});
})
