const botonCrearPersonaje= document.getElementById("crear-personaje-boton").addEventListener("click", async (event) => {
  event.preventDefault()
  Swal.fire({
    title: `¿Estas seguro de que deseas crear el personaje?`,
    showDenyButton: true,
    confirmButtonText: `Crear`,
    denyButtonText: `Cancelar`,
  }).then(async(result) => {
    if(result.isConfirmed){
        const nombrePersonaje = document.getElementById("name-personaje-form").value
        const descripcionPersonaje = document.getElementById("descripcion-personaje-form").value
        const tipoPersonaje = document.getElementById("tipo-de-personaje-form").value
        const especiePersonaje = document.getElementById("tipo-de-especie-form").value
        const categoriaPersonaje = document.getElementById("tipo-de-categoria-form").value
        const avatarPersonaje = document.getElementById("avatar-personaje-form").value
        const nRealPersonaje = document.getElementById("nombre-real-personaje-form").value
        const edadPersonaje = document.getElementById("edad-personaje-form").value
        try{
          const response = await fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje", {
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
          }),
        })
        const data = await response.json()
        console.log("Personaje creado", data)
        window.location.reload()
        document.getElementById("form-personaje-nuevo").classList.add("hidden")
        document.getElementById("card-personaje-inicio").classList.remove("hidden")     
        }  catch(error) {
            console.error("Error al crear el personaje: ", error)
          }   
    }
  })
           
})