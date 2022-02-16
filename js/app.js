window.onload = function() {
    
/*=================================================================
    Crud de notas
==================================================================*/
var exampleModal = document.getElementById('exampleModal')

exampleModal.addEventListener('show.bs.modal', function (event) {
    noteInput.value = '';
    // Button that triggered the modal
//   var button = event.relatedTarget
  // Extract info from data-bs-* attributes
//   var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
//   var modalTitle = exampleModal.querySelector('.modal-title')
//   var modalBodyInput = exampleModal.querySelector('.modal-body input')

//   modalTitle.textContent = 'New message to ' + recipient
//   modalBodyInput.value = recipient

});

    // Variables
    const noteInput = document.querySelector('#note');

    const formulario = document.querySelector('#new-note');
    const contenedorNota = document.querySelector('.contenedor-nota');

    eventListeners();
    function eventListeners() {
        noteInput.addEventListener('input', datosNota);

        formulario.addEventListener('submit', nuevaNota);
        // console.log(nuevaNota)
    }

    const notaObj = {
        note: ''
    }

    function datosNota(e) {
        console.log(e.target.value);
        notaObj[e.target.name] = e.target.value;
    }

    class Notas{
        constructor(){
            this.notas =[];
        }
        agregarNota(notaText){
            this.notas = [...this.notas, notaText]
        }

    }

    class UI{

        imprimirAlerta(mensaje, tipo){
            const divMensaje = document.createElement("div");
            divMensaje.classList.add('alert');

            if (tipo === 'error') {
                divMensaje.classList.add('alert-danger');
            }else{
                divMensaje.classList.add('alert-success');
            }

            divMensaje.textContent = mensaje;

            ducument.querySelector('.modal-content').insertBefore(divMensaje, document.querySelector('.modal-footer'));

            setTimeout( () => {
                divMensaje.remove();
            }, 3000)
            console.log(divMensaje);
        }

        imprimirNotas({notas}){
            // this.limpiarHTML();

            notas.forEach(nota => {
                const {note, id} = nota;

                const divNota = document.createElement('div');
                divNota.classList.add('event bg-success');
                divCita.dataset.id = id;

                const notaText = document.createElement('p');
                notaText.innerHTML = ` <span>${note}</span>`

                divNota.appendChild(notaText);

                contenedorNota.appendChild(divNota);

            });
        }

    }

    const ui = new UI();
    const administrarNotas = new Notas();

    function nuevaNota(e){
        e.preventDefault();

        const {note} = notaObj;

        if (note === '') {
            ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
            return
        }else{
            // Genarar un ID unico
            notaObj.id = Date.now();
            // console.log(notaObj.id )
            administrarNotas.agregarNota({...notaObj});

            ui.imprimirAlerta('Se agrego correctamente');
        }
    }

}