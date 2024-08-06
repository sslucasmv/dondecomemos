// tengo que tener 
// data - perros - listo
// funcion para mostrar card - container-perro -listo
// funcion random -listo
// boton // mostrar-perro - listo

// categoria check

// data

const perros = [
    {id:1, Alias:"toby",Raza:"labrador",Edad:5},
    {id:2, Alias:"boby",Raza:"chihuahua",Edad:10},
    {id:3, Alias:"pepe",Raza:"chihuahua",Edad:5},
    {id:4, Alias:"moncho",Raza:"pitbul",Edad:5},
    {id:5, Alias:"boby",Raza:"pitbul",Edad:10},
    {id:6, Alias:"jorge",Raza:"labrador",Edad:5},
    {id:7, Alias:"mongo",Raza:"labrador",Edad:5}
]

console.log(perros)

// funcion mostrar card
function mostrarCard(perros) {
    const containerPerros = document.getElementById("container-perro")
    containerPerros.innerHTML = "";
    // recorro para mostrar por cada card los datos
    perros.forEach(perro =>{
    const card = document.createElement("div")
    card.innerHTML = `${perro.id} - ${perro.Alias} - ${perro.Raza} - ${perro.Edad}`
    // imprimo por pantalla
    containerPerros.appendChild(card)
    })
}
// funcion mostrar random
function mostrarRandom(perros) {
    // tnego que obtener el id de lo que tiene perros
    const idAleatorio = Math.floor(Math.random() * perros.length)
    const perroRandom = perros[idAleatorio]
    
    mostrarCard([perroRandom])
}
// boton random
const btnRandom = document.getElementById("mostrar-perro")
btnRandom.addEventListener("click",() => {
  // filtro
  const checkboxs = document.querySelectorAll(".checks")
  // hago un array que sea Razas
  const checkRazas = Array.from(checkboxs)
  // filtro los check tildados
  .filter(checkboxs => checkboxs.checked)
  // hago un nuevo array con los valores
  .map(checkboxs => checkboxs.value)

  // hago la variable perrosFiltrados
  const perrosFiltrados = perros.filter(perro => checkRazas.includes(perro.Raza))

  if(perrosFiltrados.length == 0) {
    console.log("no hay datos")
    const containerPerros = document.getElementById("container-perro")
    containerPerros.textContent = "No existe esa raza en al base de datos"
    return
  }
  // imprimo los perros filtrados
  mostrarRandom(perrosFiltrados)
})

// filtro si la data tiene algun valor checkeado en la lista 





