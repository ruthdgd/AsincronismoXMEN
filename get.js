const cardPersonajeInicio = document.getElementById("card-personaje-incio");
let personajes = []

fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje")
  .then(result => result.json())
  .then(result => {
    // console.log(result)
    personajes = result
    console.log(personajes) 
    imprimirCard(personajes, crearCard, cardPersonajeInicio)
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

const imprimirCard = (caracters, creadorCard, container) =>{
  let contador = ""
  for (let creador of caracters) {
    contador += creadorCard(creador)
  }
  container.innerHTML += contador
}




  