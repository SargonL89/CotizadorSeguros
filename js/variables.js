// CONEXION CON EL DOM JS
const propiedad= document.querySelector("#propiedad")
const ubicacion= document.querySelector("#ubicacion")
const metros2= document.querySelector("#metros2")
const btnCotizar= document.querySelector("button")
const importe= document.querySelector("span")
const btnEnviar= document.querySelector("button.guardar")


//BASE DE DATOS FICTICIA
const datosPropiedad= [
    {tipo: 'Casa', factor: 1.11},
    {tipo: 'P.H.', factor: 1.05},
    {tipo: 'Departamento', factor: 1.02},
    {tipo: 'Barrio privado', factor: 1.19},
    {tipo: 'Oficina', factor: 0.9},
    {tipo: 'Local comercial', factor: 1.24},
]

const datosUbicacion= [
    {tipo: 'Córdoba', factor: 1.16},
    {tipo: 'Colón', factor: 1.10},
    {tipo: 'Punilla', factor: 1.15},
    {tipo: 'Santa María', factor: 1.12},
    {tipo: 'Gral. San Martin', factor: 1.10},
    {tipo: 'Río Cuarto', factor: 1.11},
    {tipo: 'Marcos Juárez', factor: 1.07},
]

const CostoM2= 35.86