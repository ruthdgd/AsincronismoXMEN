import { irAtras, filtroXmen, filterByCategories, filterBySpecies, filterByLevel, xpinner} from "./main.js"
const cardPersonajeInicio = document.getElementById("card-personaje-incio")
const cardPersonajeDescripcion = document.getElementById("card-personaje-descripcion")
const formEditarPersonaje = document.getElementById("editar-card-descripcion")
const filtroTipoXmen = document.getElementById("tipo-xmen")
const filtroTipoespecie = document.getElementById("tipo-enemigo")
const filtroTipoNivel = document.getElementById("tipo-nivel")
let personajes = []

fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje")
  .then(result => result.json())
  .then(result => {
    personajes = result
    let parametro = window.location.search
    let parametroPersonaje = new URLSearchParams(parametro)
    const idDeDetalle = parametroPersonaje.get("idDetalle")
    let traerPersonajeDetalle = personajes.find(personaje => personaje.id == idDeDetalle)
    xpinner()
    imprimirCard(personajes, crearCard, cardPersonajeInicio)
    filtroXmen()
    filtroTipoXmen.addEventListener("change", () => {
      xpinner()
      cardPersonajeInicio.innerHTML = ""
     let filtroPorCategoria = filterByCategories(personajes, filtroTipoXmen)
      imprimirCard(filtroPorCategoria, crearCard, cardPersonajeInicio)
    })
    filtroTipoespecie.addEventListener("change", () => {
      xpinner()
      cardPersonajeInicio.innerHTML = ""
      let filtroPorEspecie = filterBySpecies(personajes, filtroTipoespecie)
      imprimirCard(filtroPorEspecie, crearCard, cardPersonajeInicio)
    })
    filtroTipoNivel.addEventListener("change", () => {
      xpinner()
      cardPersonajeInicio.innerHTML = ""
      let filtroPorNivel = filterByLevel(personajes, filtroTipoNivel)
      imprimirCard(filtroPorNivel, crearCard, cardPersonajeInicio)
    })
    if (traerPersonajeDetalle) {
      cardPersonajeInicio.classList.add("hidden")
      xpinner()
      cardPersonajeDescripcion.classList.remove("hidden")
      crearCardDetalle(traerPersonajeDetalle, cardPersonajeDescripcion)
      const botonEditado = document.getElementById("editado")
      const formEditado = document.getElementById("formEditado")
      botonEditado.addEventListener("click", () => {
        xpinner()
        formEditado.classList.remove("hidden")
        formEditarPersonaje.classList.remove("hidden")
      })
      irAtras()
    }
  })
  .catch((error) => console.error(error))
  
  //***************************FUNCIONES**************************
export const crearCard = (propiedadCard) => {
  return ` <div class="card-s">      
             <p class="card-name">${propiedadCard.name}</p>   
              <img class="card-img" src="${propiedadCard.avatar}" alt="">                  
              <div class="card-tags">
                <h6 class="card-tags-text">${propiedadCard.personaje}</h6>
                <h6 class="card-tags-text">${propiedadCard.especie}</h6>
                <h6 class="card-tags-text">${propiedadCard.categoria}</h6>
              </div>
            <div class="boton-div">
              <a href="./index.html?idDetalle=${propiedadCard.id}" class="boton-form">Detalle</a>
            </div>
          </div>`
}
export const imprimirCard = (caracters, creadorCard, container) =>{
  let contador = ""
  for (let creador of caracters) {
    contador += creadorCard(creador)
  }
  container.innerHTML += contador
}

export const crearCardDetalle = (propiedadCard, tarjetaDeDetalle) =>{
   return tarjetaDeDetalle.innerHTML = `<div class="card-postal">
          <div class="card-l-img-box">
            <button class="boton-form boton-volver" id="boton-form">Volver atrás</button>
            <img class="card-img" id="card-img" src= "${propiedadCard.avatar}" alt=""> 
          </div>
          <div class="card-description">        
            <h3>${propiedadCard.name}</h3>    
            <h5>Descripcion</h5>
            <p>${propiedadCard.descripcion}</p>
            <h5>Nombre real: ${propiedadCard.nombreReal}</h5>
            <h5 id="edad-personaje">edad: ${propiedadCard.edad}</h5>      
            <div class="card-tags">
              <h6 class="card-tags-text">${propiedadCard.personaje}</h6>
              <h6 class="card-tags-text">${propiedadCard.especie}</h6>
              <h6 class="card-tags-text">${propiedadCard.categoria}</h6>
            </div>  
            <div class="card-boton"> 
              <button class="boton-form" id="borrado" data-id="${propiedadCard.id}">Borrar</button>
              <button class="boton-form editar" id="editado" data-id="${propiedadCard.id}">Editar</button>
            </div>            
          </div>
          </div>`        
}

export const obtenerValoresDeFormulario = (formularioId) => {
  const form = document.getElementById(formularioId);
  const formData = new FormData(form)
  const valoresFormulario = {}

  formData.forEach((value, key) => {
    valoresFormulario[key] = value
  })
  return valoresFormulario;
}
