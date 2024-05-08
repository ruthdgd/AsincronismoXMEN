const botonCrearPersonaje= document.getElementById("crear-personaje-boton").addEventListener("click", () => {
        const nombrePersonaje = document.getElementById("name-personaje").value
        const descripcionPersonaje = document.getElementById("descripcion-personaje").value
        const tipoPersonaje = document.getElementById("tipo-personaje-form").value
        const especiePersonaje = document.getElementById("tipo-especie-form").value
        const categoriaPersonaje = document.getElementById("tipo-categoria-form").value
        const avatarPersonaje = document.getElementById("avatar-personaje").value
        const nRealPersonaje = document.getElementById("nombre-real-personaje").value
        const edadPersonaje = document.getElementById("edad-personaje").value

        fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nombrePersonaje,
            avatar: avatarPersonaje,
            descripcion: descripcionPersonaje,
            nombreReal: nRealPersonaje,
            edad: edadPersonaje,
            categoria: categoriaPersonaje,
            personaje: tipoPersonaje,
            especie: especiePersonaje,
            id: "",
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("HTTP error, status = " + response.status)
            }
            return response.json()
          })
          .then((data) => {
            console.log("Personaje creado:", data)
          })
          .catch((error) => console.error(error))         
      })