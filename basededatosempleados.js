let empleados=Array(
    {
        id:1,
        nombre:"mariana lopez",
        cargo:"mesera",
        telefono:"3145528456",
        correo:"marianalopez314@gmai.com",
        salario:1300000,
        contactoEmergencia:"4815411",
        foto:"./img/img1.jpg"
    },
    {
        id:2,
        nombre:"Alejandro restrepo",
        cargo:"Dj residente",
        telefono:"3114337590",
        correo:"djrestrepo456@gmai.com",
        salario:5000000,
        contactoEmergencia:"3186629159",
        foto:"./img/IMG2.jpg"

    },
    {
        id:3,
        nombre:"laura muñoz",
        cargo:"empleada de aseo",
        telefono:"3225478965",
        correo:"lauramuñoz322@gmai.com",
        salario:1500000,
        contactoEmergencia:"365874122",
        foto:"./img/img3.jpg"

    },
    {
        id:4,
        nombre:"andres rua",
        cargo:"bodega",
        telefono:"3854562136",
        correo:"andresrua38@gmai.com",
        salario:2500000,
        contactoEmergencia:"32846985125",
        foto:"./img/img4.webp"

    },
    {
        id:5,
        nombre:"esteban hernandez",
        cargo:"Bartender",
        telefono:"3251496325",
        correo:"esteban325@gmai.com",
        salario:3300000,
        contactoEmergencia:"32189745698",
        foto:"./img/img5.jpg"

    },
    {
        id:6,
        nombre:"daniel correa",
        cargo:"Diseñador",
        telefono:"3225599446",
        correo:"danielmuñoz322@gmai.com",
        salario:4000000,
        contactoEmergencia:"3256441156",
        foto:"./img/img6.png"

    },
    {
        id:7,
        nombre:"victor jesus",
        cargo:"seguridad",
        telefono:"366558877",
        correo:"victorjesus366@gmai.com",
        salario:1800000,
        contactoEmergencia:"4815411",
        foto:"./img/img7jpg.jpg"

    },
    {
        id:8,
        nombre:"santiago arroyabe",
        cargo:"Domiciliario",
        telefono:"3294861325",
        correo:"santiagoarro32@gmai.com",
        salario:2200000,
        contactoEmergencia:"4821589",
        foto:"./img/img8.png"

    },
    {
        id:9,
        nombre:"susana jaramillo",
        cargo:"marketing",
        telefono:"3235844112",
        correo:"susanajaramillo323@gmai.com",
        salario:5000000,
        contactoEmergencia:"4846255",
        foto:"./img/img9.jpg"

    },
    {
        id:10,
        nombre:"emanuel osorio",
        cargo:"tecnico de sonido",
        telefono:"3694871562",
        correo:"emanuelo36@gmai.com",
        salario:5700000,
        contactoEmergencia:"3654477225",
        foto:"./img/tecnicosonidoimg10.jpg"

    },
    {
        id:11,
        nombre:"kevin cossio",
        cargo:"encargado de la iluminacion tecmatica",
        telefono:"3956248589",
        correo:"kevinc39@gmai.com",
        salario:2100000,
        contactoEmergencia:"3266995122",
        foto:"./img/ilumicacionimg11jpg.jpg"

    },
    {
        id:12,
        nombre:"elisa sanchez",
        cargo:"auxiliar de salud",
        telefono:"3156633448",
        correo:"elisaz315@gmai.com",
        salario:3150000,
        contactoEmergencia:"3335566998",
        foto:"./img/img12.jpg"

    },
)

let contenedor=document.getElementById("contenedor")

empleados.forEach(function(empleado){
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto


    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre
    
    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    
    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    
    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    
    let salario=document.createElement("h3")
    salario.textContent=empleado.salario

    let contactoEmergencia=document.createElement("h3")
    contactoEmergencia.textContent=empleado.contactoEmergencia

    


    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(contactoEmergencia)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
})