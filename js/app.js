// const propiedad=
// const ubicacion=

const cargarCombo= (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento=> {
            select.innerHTML+= `<option value="${elemento.factor}">${elemento.tipo}</option>`
            })
        }
} 
cargarCombo(propiedad, datosPropiedad)
cargarCombo(ubicacion, datosUbicacion)

const datosCompletos= ()=> {
    if (propiedad.value !== "..." && ubicacion.  value !== "..." && parseInt(metros2.value) && parseInt(metros2.value) > 0) { 
        return true }
    else {
        return false
        }
}

const realizarCotizacion= ()=> {
    if (datosCompletos()) {
        const seguro= new Cotizador(metros2.value, propiedad.value, ubicacion.value, CostoM2);
        // console.log(seguro.cotizar());
        importe.innerText= seguro.cotizar();
        btnEnviar.classList.remove("ocultar")
        // location.reload()
        }
    else {
        alert("Completa todos los valores solicitados")
        }
}

const enviarPorEmail= ()=> {
    debugger
    const cotizacion= {
        fechaCotizacion: new Date().toLocaleString(),
        propiedad: propiedad[propiedad.selectedIndex].text,
        ubicacion: ubicacion[ubicacion.selectedIndex].text,
        metrosCuadrados: metros2.value,
        poliza: importe.innerText
        }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alert("Cotización enviada! Muchas gracias por elegirnos!")
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)