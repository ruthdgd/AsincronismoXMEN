const botonCrearPersonaje = document
  .getElementById("crear-personaje-boton")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const nombrePersonaje = document
      .getElementById("name-personaje-form")
      .value.trim();
    const descripcionPersonaje = document
      .getElementById("descripcion-personaje-form")
      .value.trim();
    const tipoPersonaje = document
      .getElementById("tipo-de-personaje-form")
      .value.trim();
    const especiePersonaje = document
      .getElementById("tipo-de-especie-form")
      .value.trim();
    const categoriaPersonaje = document
      .getElementById("tipo-de-categoria-form")
      .value.trim();
    const avatarPersonaje = document
      .getElementById("avatar-personaje-form")
      .value.trim();
    const nRealPersonaje = document
      .getElementById("nombre-real-personaje-form")
      .value.trim();
    const edadPersonaje = document
      .getElementById("edad-personaje-form")
      .value.trim();

    if (
      !nombrePersonaje ||
      !descripcionPersonaje ||
      tipoPersonaje === "unset" ||
      especiePersonaje === "unset" ||
      categoriaPersonaje === "unset" ||
      !avatarPersonaje ||
      !nRealPersonaje ||
      !edadPersonaje
    ){
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de crear el personaje.",
      });
      return;
    }

    Swal.fire({
      title: `¿Estás seguro de que deseas crear el personaje?`,
      showDenyButton: true,
      confirmButtonText: `Crear`,
      denyButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            "https://66230da83e17a3ac846e8339.mockapi.io/api/personaje",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
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
              }),
            }
          );

          window.location.reload();
          document
            .getElementById("form-personaje-nuevo")
            .classList.add("hidden");
          document
            .getElementById("card-personaje-inicio")
            .classList.remove("hidden");
        } catch (error) {
          console.error("Error al crear el personaje: ", error);
        }
      }
    });
  });
