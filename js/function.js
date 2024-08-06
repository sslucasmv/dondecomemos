let comerciosComida = []
// carga del archivo Json (base de datos)
fetch('./data/gastronomiamdp.json')
    .then(res => res.json())
    .then(data=>{
        console.log('Datos cargados:', data);
        comerciosComida = data;
        console.log('comerciosComida después de asignar:', comerciosComida);
       
        
        // llamar a la funcion para mostrar comercios
        // const comerciosComidaList = document.getElementById("comercio-comida")
        // const totalRegistros = document.getElementById("total-comercios")
}).catch(error => console.error('Error cargando el JSON:', error));

//funcion mostrar restaurant
function mostrarComercios(comercios) {
    const comerciosComidaList = document.getElementById("comercio-comida")
    comerciosComidaList.innerHTML = '';
    // recorro el array 
    comercios.forEach(comercio => {
   const container = document.createElement("div");
         const link = `https://www.google.com/maps?q=${comercio.latitud},${comercio.longitud}`;
         container.innerHTML = 
        `<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">#${comercio.id} - ${comercio.Nombre} </h5>
           <h4 class="card-text">${comercio.Categoria}</h4>
           <p class="card-text">${comercio.Nombre} Direccion: ${comercio.Calle} ${comercio.Número} </p>
           <a href="${link}" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>Go somewhere</a>
         </div>
       </div>`
        comerciosComidaList.appendChild(container)
    });
 }


// funcionalidad para btn random
function mostrarRandom(){
    const idAleatorio = Math.floor(Math.random() * comerciosComida.length)
    const comercioAleatorio = comerciosComida[idAleatorio]
    mostrarComercios([comercioAleatorio])
}


 // boton mostrarRandom
 const btnRandom = document.getElementById("button-random")
 btnRandom.addEventListener("click",mostrarRandom)
 

 function limpiarContenedor() {
    const comerciosComidaList = document.getElementById("comercio-comida")
    comerciosComidaList.innerHTML = '';
 }

 // boton mostrar todos los comercios
    const botonMostrarTodos = document.getElementById("button-todos")
    botonMostrarTodos.addEventListener("click",()=>{
    mostrarComercios(comerciosComida)
})

// boton reset
    const btnReset = document.getElementById("button-reset")
    btnReset.addEventListener("click",()=>{
    limpiarContenedor()
})
// tengo que mostrar un comercio random




