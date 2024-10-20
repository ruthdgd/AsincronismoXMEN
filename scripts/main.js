const filtroTipo = document.getElementById("tipo-personaje");
const botonNuevoPersonaje = document.getElementById("nuevoPersonaje");
const frente = document.getElementById("frente");
const filtroForm = document.getElementById("buscador");

botonNuevoPersonaje.addEventListener("click", () => {
  document.getElementById("card-personaje-incio").classList.add("hidden");
  document.getElementById("form-personaje-nuevo").classList.remove("hidden");
  filtroForm.classList.add("hidden");
});

export const irAtras = () => {
  const botonAtras = document.getElementById("boton-form");
  botonAtras.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
};

export const filtroXmen = () => {
  filtroTipo.addEventListener("click", () => {
    if (filtroTipo.value == "Personaje") {
      document.getElementById("tipo-xmen").classList.remove("hidden");
      document.getElementById("tipo-enemigo").classList.add("hidden");
      document.getElementById("tipo-nivel").classList.add("hidden");
    } else if (filtroTipo.value == "Especie") {
      document.getElementById("tipo-enemigo").classList.remove("hidden");
      document.getElementById("tipo-xmen").classList.add("hidden");
      document.getElementById("tipo-nivel").classList.add("hidden");
    } else if (filtroTipo.value == "Categoria") {
      document.getElementById("tipo-nivel").classList.remove("hidden");
      document.getElementById("tipo-xmen").classList.add("hidden");
      document.getElementById("tipo-enemigo").classList.add("hidden");
    } else {
      document.getElementById("tipo-xmen").classList.add("hidden");
      document.getElementById("tipo-enemigo").classList.add("hidden");
      document.getElementById("tipo-nivel").classList.add("hidden");
    }
  });
};

export const filterByCategories = (array, selectedType) => {
  let personajesFiltrados = array;
  if (selectedType.value === "Xmen") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.personaje === "X-MEN"
    );
  } else if (selectedType.value === "Villanos") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.personaje === "Villano"
    );
  }
  return personajesFiltrados;
};

export const filterBySpecies = (array, selectedType) => {
  let personajesFiltrados = array;
  if (selectedType.value === "Humano") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.especie === "Humano"
    );
  } else if (selectedType.value === "Mutantes") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.especie === "Mutante"
    );
  } else if (selectedType.value === "Robot") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.especie === "Robot"
    );
  }
  return personajesFiltrados;
};

export const filterByLevel = (array, selectedType) => {
  let personajesFiltrados = array;
  if (selectedType.value === "Omega") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.categoria === "Omega"
    );
  } else if (selectedType.value === "Alfa") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.categoria === "Alfa"
    );
  } else if (selectedType.value === "Beta") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.categoria === "Beta"
    );
  } else if (selectedType.value === "Gamma") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.categoria === "Gamma"
    );
  } else if (selectedType.value === "Delta") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.categoria === "Delta"
    );
  } else if (selectedType.value === "Epsilon") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.categoria === "Epsilon"
    );
  } else if (selectedType.value === "Sin Categoria") {
    personajesFiltrados = array.filter(
      (personaje) => personaje.categoria === "Sin categoría"
    );
  }
  return personajesFiltrados;
};

////////////////////////Funcion del Spinner//////////////////////////////////////
export const xpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  frente.classList.add("hidden");
  setTimeout(() => {
    spinner.classList.add("hidden"), frente.classList.remove("hidden");
  }, 2000);
};
