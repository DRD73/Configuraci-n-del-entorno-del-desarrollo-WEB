// Muestra u oculta el ejemplo de código HTML5
const boton = document.getElementById("btnEjemplo");
const ejemplo = document.getElementById("ejemplo");

boton.addEventListener("click", function () {
  const oculto = ejemplo.hidden;
  ejemplo.hidden = !oculto;
  boton.textContent = oculto ? "Ocultar ejemplo de código" : "Ver ejemplo de código";
  boton.setAttribute("aria-expanded", String(oculto));
});
