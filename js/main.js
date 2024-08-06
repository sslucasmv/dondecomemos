let comerciosComida = []
// carga del archivo Json (base de datos)
console.log('toodo bien')
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
             container.innerHTML = `<div class="card" style="width: 18rem;">
             
             <div class="card-body">

               <h5 class="card-title">#${comercio.id} - ${comercio.Nombre} </h5>
               <p class="card-text">${comercio.Nombre} Direccion: ${comercio.Calle} ${comercio.Número} </p>
               <a href="${link}" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>Go somewhere</a>
             </div>
           </div>`
             comerciosComidaList.appendChild(container)
        });
     }

    function mostrarRandom() {
    console.log('Comercios cargados:', comerciosComida);
    const idAleatorio =Math.floor(Math.random() * comerciosComida.length);
    const comercioAleatorio = comerciosComida[idAleatorio];
    mostrarComercios([comercioAleatorio])

    // const comercioMostrar = document.getElementById("mostrar-comercio");
    // comercioMostrar.innerHTML = "";
    // const cardComercio = document.createElement("div")
    // cardComercio.innerHTML =`${comercioAleatorio.id} - ${comercioAleatorio.Categoria} - ${comercioAleatorio.Nombre} - ${comercioAleatorio.Calle} ${comercioAleatorio.Número}`;
    // comercioMostrar.appendChild(cardComercio)
}
const botonRandom = document.getElementById("button-random")
botonRandom.addEventListener("click",()=>{
    mostrarRandom()
  
})
    // button-random


    const botonBuscar = document.getElementById("button-search");
    botonBuscar.addEventListener("click",()=>{
        const searchInput = document.getElementById("search-input").value.toLowerCase();
        if(searchInput.trim() === ""){
        const comerciosComidaList = document.getElementById("comercio-comida")
        comerciosComidaList.innerHTML = 'Ingrese por favor datos en el campo';
        //borro si hay algo en random 
        const comercioMostrar = document.getElementById("mostrar-comercio");
        comercioMostrar.innerHTML = "";
        }
        else {
        // borro si habia algo en random 
        // filtrar comercio
        const comercioMostrar = document.getElementById("mostrar-comercio");
        comercioMostrar.innerHTML = "";
        const filtrarComercio = comerciosComida.filter(comercio => 
            comercio.Nombre.toLowerCase().includes(searchInput) ||
            comercio.Categoria.toLowerCase().includes(searchInput)
        );
        console.log('Comercios filtrados:', filtrarComercio);
        // llamo a la funcion mostrarComercios para que se vean por
        mostrarComercios(filtrarComercio)
        }
    })


        

   



    