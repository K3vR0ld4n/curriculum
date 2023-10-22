window.addEventListener('scroll', function() {
  const barraNavegacion = document.querySelector('.nav');
  const alturaDeseada = 500; // Ajusta la altura a tu preferencia

  if (window.scrollY >= alturaDeseada) {
    barraNavegacion.classList.add('nav--fixed');
  } else {
    barraNavegacion.classList.remove('nav--fixed');
  }
});

document.getElementById("form_contact").addEventListener("submit", function (event) {
  event.preventDefault(); 
  alert("Formulario enviado exitosamente."); 
  document.getElementById("form_contact").reset();
});
