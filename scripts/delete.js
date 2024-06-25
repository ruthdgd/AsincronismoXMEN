document.addEventListener("DOMContentLoaded", () => { 
  document.body.addEventListener("click", function (event) {   
    if (event.target.classList.contains("boton-form") && event.target.id === "borrado") {
      const idPersonaje = event.target.getAttribute("data-id")
      if (!idPersonaje) {
        console.error("No se proporcionó un ID de personaje.")
        return
      }
      Swal.fire({
        title: "¿Estás seguro de que deseas eliminar el personaje",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          fetch(`https://66230da83e17a3ac846e8339.mockapi.io/api/personaje/${idDePersonaje}`, {
                method: "DELETE",
                headers: {"Content-Type": "aplication/json"},                
              }).then((response) => {
                if (!response.ok) {
                  throw new Error ("Error en la respuesta del servidor: " + response.statusText)
                }
                return response.json()
              })
              .then(() => {
                window.location.href = "index.html"
              })
              .catch((error) => {
                console.error("Error al eliminar el personaje", error)
              })
        }
      })
         
    }
  })
})

