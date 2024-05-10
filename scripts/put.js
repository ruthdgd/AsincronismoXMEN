import { editarCardDetalle } from "./get.js"

const formEditarPersonaje = document.getElementById("editar-card-descripcion")

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("boton-form") && event.target.id === "editado") {
      const idPersonaje = event.target.getAttribute("data-id")

      if (!idPersonaje) {
        console.error("No se proporcionó un ID de personaje.")
        return;
      }
      editarCardDetalle(idPersonaje)
      document.getElementById("editar-personaje-boton").addEventListener("click", () => {
          const namePersonaje = document.getElementById("name-personaje").value;
          const descripcionPersonaje = document.getElementById(
            "descripcion-personaje"
          ).value;
          const tipoPersonaje = document.getElementById(
            "tipo-personaje-form"
          ).value;
          const especiePersonaje =
            document.getElementById("tipo-especie-form").value;
          const categoriaPersonaje = document.getElementById(
            "tipo-categoria-form"
          ).value;
          const avatarPersonaje =
            document.getElementById("avatar-personaje").value;
          const nombreRealPersonaje = document.getElementById(
            "nombre-real-personaje"
          ).value;
          const edadPersonaje = document.getElementById("edad-personaje").value;

          fetch(
            `https://66230da83e17a3ac846e8339.mockapi.io/api/personaje/${idPersonaje}`,
            {
              method: "PUT",
              headers: {
                "content-Type": "application/json",
              },
              body: JSON.stringify({
                name: namePersonaje,
                descripcion: descripcionPersonaje,
                personaje: tipoPersonaje,
                especie: especiePersonaje,
                categoria: categoriaPersonaje,
                avatar: avatarPersonaje,
                nombreReal: nombreRealPersonaje,
                edad: edadPersonaje,
              }),
            }
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
              }
              return response.json();
            })
            .then((data) => {
              console.log("Personaje creado:", data);
            })
            .catch((error) => console.error(error));
        });
    }
  })
})



