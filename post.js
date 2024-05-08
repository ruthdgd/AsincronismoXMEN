const nombrePersonaje = document.getElementById("name-personaje")
const descripcionPersonaje = document.getElementById("descripcion-personaje")
const tipoPersonaje = document.getElementById("tipo-personaje-form")
const especiePersonaje = document.getElementById("tipo-especie-form")
const categoriaPersonaje = document.getElementById("tipo-categoria-form")
const avatarPersonaje = document.getElementById("avatar-personaje")
const nRealPersonaje = document.getElementById("nombre-real-personaje")
const edadPersonaje = document.getElementById("edad-personaje")


fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje"),
  {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "",
      avatar: "",
      descripcion: "",
      nombreReal: "",
      edad: "",
      categoria: "",
      personaje: "",
      especie: "",
      id: ""
    })
  }
  .then((result) => result.json)
  .then((result) => {

  })
  .catch(console.error(error))

//*****************FUNCIONES**************************

const completarPersonaje = () =>{
  
}