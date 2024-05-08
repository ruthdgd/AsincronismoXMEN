document.addEventListener("click", () => {
  const botonBorrar = document.getElementById("borrado");
   fetch("https://66230da83e17a3ac846e8339.mockapi.io/api/personaje/${id-personaje}", {
     method: "DELETE",
     headers: {
       "content-Type": "application/json",
     },
   })
    .then(response => {
       console.log("objeto eliminado");
     })
    .catch((error) => console.error(error));  
})