// **Actividad 1: Ecommerce**

const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "./img/tarjeta_grafica.jpeg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "./img/monitor.jpeg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "./img/ssd.jpeg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "./img/procesador.jpeg",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "./img/mouse.jpeg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "./img/ram.jpeg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "./img/disco_externo.jpeg",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "./img/auriculares.jpeg",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];


const containerProductos= document.querySelector("#productos-container")
const generarTarjetas = productos => {
    const cards= productos.reduce ((acumuladora, element)=>{
        return acumuladora +`
        <div class="item">
        <img src= ${element.imagen || "./img/outOfStock.jpeg"} alt="imagen de producto">
        </div>
        <div class="item-description">
            <h2>${element.producto}</h2>
            <p>${element.descripcion || "no existe descripción para este producto"} </p>
        </div>
        <div>
            <span>${element.precio}</span>
            <span>${element.marca}</span>
        </div>
        <div>
            <button onclick=AgregarAlStorage(${element.id})>Agregar al Carrito</button>
        </div>
            `}, "");

    containerProductos.innerHTML= cards
}

generarTarjetas(productos)
const AgregarAlStorage = (id) =>{

    const articulo= productos.find( seleccion => seleccion.id === id);

    localStorage.setItem (id, JSON.stringify(articulo))
}


