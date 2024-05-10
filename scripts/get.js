const cardPersonajeInicio = document.getElementById("card-personaje-incio")
const cardPersonajeDescripcion = document.getElementById("card-personaje-descripcion")
const formEditarPersonaje = document.getElementById("editar-card-descripcion")
let personajes = []

fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje")
  .then(result => result.json())
  .then(result => {
    // console.log(result)
    personajes = result
    console.log(personajes) 
    let parametro = window.location.search
    let parametroPersonaje = new URLSearchParams(parametro)
    const idParametro = parametroPersonaje.get("data-id")
    let traerPersonajeDetalle = personajes.find(personaje => personaje.id == idParametro)

    console.log(traerPersonajeDetalle)
    imprimirCard(personajes, crearCard, cardPersonajeInicio)
    imprimirCard(personajes, crearCardDetalle, cardPersonajeDescripcion)
    mostrarCardUnica(traerPersonajeDetalle, formEditarPersonaje)
  })
  .catch((error) => console.error(error))

//***************************FUNCIONES**************************
const crearCard = (propiedadCard) => {
  return ` <div class="card-s">      
             <p class="card-name">${propiedadCard.name}</p>   
              <img class="card-img" src="${propiedadCard.avatar}" alt="">                  
              <div class="card-tags">
                <h6 class="card-tags-text">${propiedadCard.personaje}</h6>
                <h6 class="card-tags-text">${propiedadCard.especie}</h6>
                <h6 class="card-tags-text">${propiedadCard.categoria}</h6>
              </div>
            <div class="boton-div">
              <button class="boton-form">Ver detalle</button>
            </div>
          </div>`
}

export const crearCardDetalle = (propiedadCard) =>{
  return `<div class="card-l-img-box">
            <button class="boton-form">Volver atrás</button>
            <img class="card-img" src= "${propiedadCard.avatar}" alt=""> 
          </div>
          <div class="card-description">        
            <h3>${propiedadCard.name}</h3>    
            <h5>Descripcion</h5>
            <p>${propiedadCard.descripcion}</p>
            <h5>Nombre real: ${propiedadCard.nombreReal}</h5>
            <h5>edad: ${propiedadCard.edad}</h5>      
            <div class="card-tags">
              <h6 class="card-tags-text">${propiedadCard.personaje}</h6>
              <h6 class="card-tags-text">${propiedadCard.especie}</h6>
              <h6 class="card-tags-text">${propiedadCard.categoria}</h6>
            </div>  
            <div class="card-boton"> 
              <button class="boton-form" id="borrado" data-id="${propiedadCard.id}">Borrar</button>
              <button class="boton-form" id="editado" data-id="${propiedadCard.id}"><a href="#editar-card-descripcion">Editar</a></button>
            </div>            
          </div>`
}

export const editarCardDetalle = (datos) => {
  return `<form class="create" action="">
        <label for="name-personaje">Nombre del Personaje</label>
        <input type="text" id="name-personaje" value="${datos.name}">
        <label for="descripcion-personaje">Descipción</label>
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
              <option value="Mutantes">Mutantes</option>
              <option value="Robot">Robot</option>               
            </select>
          </div>
          <div class="search-box">
            <label for="tipo-categoria-form">Categoria</label>
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
          <button class="boton-form" id="editar-personaje-boton">Editar personaje</button>
        </div>
      </form>`;
}

const mostrarCardUnica = (datos, armadoTarjeta) => {
  return `<form class="create" action="">
        <label for="name-personaje">Nombre del Personaje</label>
        <input type="text" id="name-personaje" value="${datos.name}">
        <label for="descripcion-personaje">Descipción</label>
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
              <option value="Mutantes">Mutantes</option>
              <option value="Robot">Robot</option>               
            </select>
          </div>
          <div class="search-box">
            <label for="tipo-categoria-form">Categoria</label>
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
          <button class="boton-form" id="editar-personaje-boton">Editar personaje</button>
        </div>
      </form>`;
}

export const imprimirCard = (caracters, creadorCard, container) =>{
  let contador = ""
  for (let creador of caracters) {
    contador += creadorCard(creador)
  }
  container.innerHTML += contador
}





  