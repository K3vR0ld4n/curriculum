window.addEventListener("scroll", function () {
  const navContainer = document.querySelector(".nav");
  const mainContainer = document.getElementById("main");
  const staticHeight = 500; // Ajusta la altura a tu preferencia

  if (window.scrollY >= staticHeight) {
    navContainer.classList.add("nav--fixed");
    mainContainer.style.marginTop = "65px";
  } else {
    navContainer.classList.remove("nav--fixed");
    mainContainer.style.marginTop = null;
  }
});





/*
document
  .getElementById("contact__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado exitosamente.");
    document.getElementById("contact__form").reset();
  });
  */
