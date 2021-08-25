//Agregando un hotel a la pagina / Modificando el HTML, directo al body

let hoteles = document.getElementById('hoteles');



let nuevoHotel = document.createElement('section')
nuevoHotel.innerHTML = `
<div class='container'>
<h2>Hotel Hard Rock</h2>
<br>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates assumenda quaerat. Iure, laborum recusandae commodi tenetur aliquam quibusdam fuga incidunt veritatis repellendus ullam. Quidem cupiditate velit earum facilis? Reiciendis.</p>
<br>
<div>
Tipo de habitaciones
<ul>
                <li>Suite</li>
                <li>Doble</li>
                <li>Triple</li>
            </ul>
        </div>
        <br>
        <div>
            Servicios
            <ul>
                <li>All inclusive</li>
                <li>Media pension</li>
                <li>Solo desayuno</li>
            </ul>
        </div>
        <br>
        <p>$5000- Precio Base</p>
        </div>
`
hoteles.appendChild(nuevoHotel)





let reserva1 = document.getElementById('reserva1')

let nuevaReserva = document.createElement('section')
nuevaReserva.innerHTML = `<div class='container'>El hotel elegido es:
${prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro')}, la habitacion que elegiste es:
${prompt('Elegi tipo de habitacion: Suite, Doble, Triple')} y el servicio que elegiste es:
${prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno')}.
Gracias por reservar con nosotros, te esperamos.</div>
`
reserva1.appendChild(nuevaReserva);

let nuevaReservaDos = document.createElement('section')
nuevaReservaDos.innerHTML = `<div class='container'>El hotel elegido es:
${prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro')}, la habitacion que elegiste es:
${prompt('Elegi tipo de habitacion: Suite, Doble, Triple')} y el servicio que elegiste es:
${prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno')}.
Gracias por reservar con nosotros, te esperamos.</div>`

reserva1.appendChild(nuevaReservaDos)