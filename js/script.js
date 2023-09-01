botonDark = document.querySelector("#botonDark")
tablita = document.querySelector("table")
cuadradito = document.querySelector("#cuadradito")
botonMusica = document.querySelector("#botonMusica")
audio_fondo = document.querySelector("#vals")
botonPalabra = document.querySelector("#botonPalabra")

combinacion1 = [
    "Sobaco",
    "Asesino",
    "Capitan",
    "Pezon",
    "Trueno",
    "Pepino",
    "Pez",
    "Pezuña",
    "Lobo",
    "Gato",
    "El milagro",
    "El rey",
    "El principe",
    "Robot",
    "El señor",
    "El diablo",
    "El angel",
    "El caballero",
    "El mago",
    "El brujo",
    "El dragon",
    "El duende",
    "Fantasma"

]

combinacion2 = [
    "Elastico",
    "Volador",
    "Mortal",
    "Invisible",
    "Apestoso",
    "Peludo",
    "Misterioso",
    "Saltarin",
    "Poderoso",
    "Gigante",
    "Radiactivo",
    "Peligroso",
    "Letal",
    "Oscuro",
    "Maligno",
    "Hipster",
    "Nuclear",
    "Sangriento",
    "Siniestro",
]


function generarIdea(){
    comb1 = combinacion1[parseInt(Math.random()*combinacion1.length)]
    comb2 = combinacion2[parseInt(Math.random()*combinacion2.length)]
    return `${comb1} ${comb2}`
}


botonDark.addEventListener("click", () => {
    botonDark.classList.toggle("btn-dark")
    tablita.classList.toggle("table-dark")
    document.body.classList.toggle("bg-dark")
})

cuadradito.addEventListener("click", () => {
    cuadradito.classList.toggle("circulito")
})

botonMusica.addEventListener("click", () => {
    if (audio_fondo.paused){
        audio_fondo.load()
        audio_fondo.play()
    }else{
        audio_fondo.pause()
    }
})

botonPalabra.addEventListener("click", () => {
    cuadradito.querySelector("h1").innerHTML = generarIdea()
})
