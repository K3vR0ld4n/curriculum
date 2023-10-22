window.addEventListener('scroll', function() {
  const barraNavegacion = document.querySelector('.nav');
  const alturaDeseada = 500; // Ajusta la altura a tu preferencia

  if (window.scrollY >= alturaDeseada) {
    barraNavegacion.classList.add('nav--fixed');
  } else {
    barraNavegacion.classList.remove('nav--fixed');
  }
});
