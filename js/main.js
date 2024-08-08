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
        comerciosComidaList.style.justifyContent = "flex-start";
        comerciosComidaList.innerHTML = '';
         
        // recorro el array 
        comercios.forEach(comercio => {
       const container = document.createElement("div");
       container.classList.add("card")
             const link = `https://www.google.com/maps?q=${comercio.latitud},${comercio.longitud}`;
             const categoria = comercio.Categoria.replace(/-/g, ' ');
         
             container.innerHTML = `<div>
            <p class="text-xs"><span>#${comercio.id}</span><span class="capitalize">${categoria}<span></p>
               <h5 class="card-title">${comercio.Nombre} </h5>
               <p class="card-text">Direccion: ${comercio.Calle} ${comercio.Número}</p>
               <img src='${comercio.imagen}' class="imagen-comercio" />
               <div class="btn-center">
                <a href="${link}" target="_blank" rel="noopener noreferrer" class="button-25">Ubicación  <i class="fa fa-map-marker" aria-hidden="true"></i></a>
               </div>
             </div>`
            comerciosComidaList.appendChild(container)
        });
     }

     function mostrarRandom() {
         const categoriasSeleccionadas = getCategoriaSeleccionada();
         const comerciosFiltrados = filtrarPorCategoria(comerciosComida, categoriasSeleccionadas);
         if (comerciosFiltrados.length === 0) {
         alert('No hay comercios disponibles para las categorías seleccionadas');
        return;
    }
    // document.getElementById("comercio-comida").style.justifyContent = "center";
     document.getElementById("loader").style.display = "block";
     document.getElementById("comercio-comida").style.display = "none";
    
     setTimeout(()=>{
    const idAleatorio =Math.floor(Math.random() * comerciosFiltrados.length);
    const comercioAleatorio = comerciosFiltrados[idAleatorio];   
    document.getElementById("loader").style.display = "none";
        mostrarComercios([comercioAleatorio])
        const comerciosComidaList = document.getElementById("comercio-comida")
        comerciosComidaList.style.cssText = "display: flex; justify-content: center"
    },"1000")
}

    function filtrarPorCategoria(comercio,categorias) {
        if(categorias.length===0) return comercio;
        return comercio.filter(comercio => categorias.includes(comercio.Categoria))
    }
    
    //botones random
     const botonRandom = document.getElementById("button-random")
     botonRandom.addEventListener("click", mostrarRandom)
  

    // button-random

    // funcion categoria seleccionada 
    function getCategoriaSeleccionada() {
        // const q me agrupe checks
        const checkBoxs = document.querySelectorAll('.categoria-checkbox')
        const categoriaSeleccionada = Array.from(checkBoxs)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        console.log(categoriaSeleccionada)
        return categoriaSeleccionada;
    }


//     const botonBuscar = document.getElementById("button-search");
//     botonBuscar.addEventListener("click", () => {
//     const searchInput = document.getElementById("search-input").value.toLowerCase();
//     if (searchInput.trim() === "") {
//         const comerciosComidaList = document.getElementById("comercio-comida");
//         comerciosComidaList.innerHTML = 'Ingrese por favor datos en el campo';
//         const comercioMostrar = document.getElementById("mostrar-comercio");
//         comercioMostrar.innerHTML = "";
//     } else {
//         const comercioMostrar = document.getElementById("mostrar-comercio");
//         comercioMostrar.innerHTML = "";
//         const categoriasSeleccionadas = getCategoriaSeleccionada();
//         const filtrarComercio = comerciosComida.filter(comercio => 
//             (comercio.Nombre.toLowerCase().includes(searchInput) || 
//             comercio.Categoria.toLowerCase().includes(searchInput)) &&
//             (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(comercio.Categoria))
//         );
//         console.log('Comercios filtrados:', filtrarComercio);
        
       
//         if(filtrarComercio == 0) {
//             const comerciosComidaList = document.getElementById("comercio-comida")
//             comerciosComidaList.innerHTML = 'No existe el comercio en esa categoria';
//         }else {
//             mostrarComercios(filtrarComercio);
//         }
//     }
// });

// funcion cargando 






















    // const botonBuscar = document.getElementById("button-search");
    // botonBuscar.addEventListener("click",()=>{
    //     const searchInput = document.getElementById("search-input").value.toLowerCase();
    //     if(searchInput.trim() === ""){
    //     const comerciosComidaList = document.getElementById("comercio-comida")
    //     comerciosComidaList.innerHTML = 'Ingrese por favor datos en el campo';
    //     //borro si hay algo en random 
    //     const comercioMostrar = document.getElementById("mostrar-comercio");
    //     comercioMostrar.innerHTML = "";
    //     }
    //     else {
    //     // borro si habia algo en random 
    //     // filtrar comercio
    //     const comercioMostrar = document.getElementById("mostrar-comercio");
    //     comercioMostrar.innerHTML = "";
    //     const categoriasSeleccionadas = getCategoriaSeleccionada();
    //     const filtrarComercio = comerciosComida.filter(comercio => 
    //         comercio.Nombre.toLowerCase().includes(searchInput) ||
    //         comercio.Categoria.toLowerCase().includes(searchInput) &&
    //         (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(comercio.Categoria))
       
    //     );
    //     console.log('Comercios filtrados:', filtrarComercio);
    //     // llamo a la funcion mostrarComercios para que se vean por
    //     mostrarComercios(filtrarComercio)
    //     }
    // })


// let comerciosComida = [];

// // Cargar el archivo JSON (base de datos)
// console.log('todo bien');
// fetch('./data/gastronomiamdp.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log('Datos cargados:', data);
//         comerciosComida = data;
//         console.log('comerciosComida después de asignar:', comerciosComida);
//     })
//     .catch(error => console.error('Error cargando el JSON:', error));

// // Función para mostrar comercios
// function mostrarComercios(comercios) {
//     const comerciosComidaList = document.getElementById("comercio-comida");
//     comerciosComidaList.innerHTML = '';
//     comercios.forEach(comercio => {
//         const container = document.createElement("div");
//         const link = `https://www.google.com/maps?q=${comercio.latitud},${comercio.longitud}`;
//         container.innerHTML = `<div class="card" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="card-title">#${comercio.id} - ${comercio.Nombre} </h5>
//                 <h4 class="card-text">${comercio.Categoria}</h4>
//                 <p class="card-text">${comercio.Nombre} Dirección: ${comercio.Calle} ${comercio.Número}</p>
//                 <a href="${link}" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
//             </div>
//         </div>`;
//         comerciosComidaList.appendChild(container);
//     });
// }

// // Función para mostrar un comercio aleatorio
// function mostrarRandom() {
//     const categoriasSeleccionadas = getCategoriaSeleccionada();
//     const comerciosFiltrados = filtrarPorCategoria(comerciosComida, categoriasSeleccionadas);
//     if (comerciosFiltrados.length === 0) {
//         alert('No hay comercios disponibles para las categorías seleccionadas');
//         return;
//     }
//     const idAleatorio = Math.floor(Math.random() * comerciosFiltrados.length);
//     const comercioAleatorio = comerciosFiltrados[idAleatorio];
//     mostrarComercios([comercioAleatorio]);
// }

// // Función para filtrar comercios por categoría
// function filtrarPorCategoria(comercios, categorias) {
//     if (categorias.length === 0) return comercios;
//     return comercios.filter(comercio => categorias.includes(comercio.Categoria));
// }

// // Obtener categorías seleccionadas
// function getCategoriaSeleccionada() {
//     const checkboxes = document.querySelectorAll('.categoria-checkbox');
//     const categoriasSeleccionadas = Array.from(checkboxes)
//         .filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
//     console.log(categoriasSeleccionadas);
//     return categoriasSeleccionadas;
// }

// // Event listener para botón aleatorio
// const botonRandom = document.getElementById("button-random");
// botonRandom.addEventListener("click", mostrarRandom);

// Event listener para botón de búsqueda




        

   



    