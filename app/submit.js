const form = document.getElementById("form");
const close = document.getElementById("success_close");
const showSuccess = document.getElementById("success_container");

// Manejo de formulario
function handleSubmit(e) {
  e.preventDefault();
  const infoUser = {
    name: e.target.name.value,
    surname: e.target.surname.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };
  console.log("El formulario fue enviado");
  console.log(infoUser);
  // Limpiamos los inputs
  e.target.name.value = "";
  e.target.surname.value = "";
  e.target.email.value = "";
  e.target.message.value = "";

  showSuccess.style.opacity = "100";
  showSuccess.style.transform = "translateY(-0.5rem)";
  showSuccess.style.transition = "transform 1s";
}
form.addEventListener("submit", handleSubmit);

// Cerrar el pop up
close.addEventListener("click", () => {
  showSuccess.style.opacity = "0";
  showSuccess.style.transform = "translateY(0.5rem)";
});
