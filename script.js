var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	alert("¡Formulario enviado con éxito! Su mensaje será respondido tan pronto como sea posible.");
	form.reset();
});
