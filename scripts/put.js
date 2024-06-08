const formDeEditar = document.getElementById("formEditado")
let personajes = [];

fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje")
  .then(result => result.json())
  .then(result => {
    personajes = result
    console.log(personajes)

    const urlParams = new URLSearchParams(window.location.search)
    const idDePersonaje = urlParams.get("idDetalle")
    const traerPersonaje = personajes.find(personaje => personaje.id == idDePersonaje)

    if (traerPersonaje) {
      console.log(traerPersonaje)
      editarCardDetalle(traerPersonaje, formDeEditar)
    }
    
    const editButton = document.getElementById("editar-personaje-boton");
    editButton.addEventListener("click", async () => {
      const updatedData = {
        name: formDeEditar.querySelector("#name-personaje").value,
        descripcion: formDeEditar.querySelector("#descripcion-personaje").value,
        avatar: formDeEditar.querySelector("#avatar-personaje").value,
        nombreReal: formDeEditar.querySelector("#nombre-real-personaje").value,
        edad: formDeEditar.querySelector("#edad-personaje").value,
        personaje: formDeEditar.querySelector("#tipo-personaje-form").value,
        especie: formDeEditar.querySelector("#tipo-especie-form").value,
        categoria: formDeEditar.querySelector("#tipo-categoria-form").value,
      };

      try {
        const response = await fetch(
          `https://66230da83e17a3ac846e8339.mockapi.io/api/personaje/${idDePersonaje}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Character edited successfully!");
      } catch (error) {
        console.error("Error editing character:", error);
      }
    });
  })
.catch((error) => console.error(error));

export const editarCardDetalle = (datos, formDeEditar ) => {
    formDeEditar.innerHTML = `<form class="create hidden" id="formEditado" action="">
         <label for="name-personaje">Nombre del Personaje</label>
         <input type="text" id="name-personaje" value="${datos.name}">
         <label for="descripcion-personaje">Descripción</label>
         <input type="text" id="descripcion-personaje" value="${datos.descripcion}">
         <div class="search">
           <div class="search-box">
             <label for="tipo-personaje-form">Personaje</label>  
             <select class="search-s" name="personaje" id="tipo-personaje-form">
               <option value="unset">Buscar por...</option>
               <option value="X-MEN">X-MEN</option>
               <option value="Villano">Villano</option>         
             </select>
           </div>
           <div class="search-box">
             <label for="tipo-especie-form">Especie</label>
             <select class="search-s"  name="especie" id="tipo-especie-form">
               <option value="unset">Buscar por...</option>
               <option value="Humano">Humano</option>
               <option value="Mutantes">Mutante</option>
               <option value="Robot">Robot</option>               
             </select>
           </div>
           <div class="search-box">
             <label for="tipo-categoria-form">Categoría</label>
             <select class="search-s" name="Categoria" id="tipo-categoria-form">
               <option value="unset">Buscar por...</option>
               <option value="Omega">Omega</option>
               <option value="Alfa">Alfa</option>
               <option value="Beta">Beta</option>
               <option value="Gamma">Gamma</option>
               <option value="Delta">Delta</option>
               <option value="Epsilon">Epsilon</option>
               <option value="Sin Categoria">Sin Categoria</option>
             </select>
           </div>
         </div>
         <h3 class="create-title">Detalles del Personaje</h3>
         <label for="avatar-personaje">Imagen del Personaje</label>
         <input type="text" id="avatar-personaje" value="${datos.avatar}">
         <label for="nombre-real-personaje">Nombre real del Personaje</label>
         <input type="text" id="nombre-real-personaje" value="${datos.nombreReal}">
         <label for="edad-personaje">Edad</label>
         <input type="number" id="edad-personaje" value="${datos.edad}">
         <div class="card-boton">
           <button class="boton-form" id="cancelar-personaje">Cancelar</button>
           <button class="boton-form" id="editar-personaje-boton" data-id="${datos.id}">Editar personaje</button>
         </div>
       </form>`
 }



