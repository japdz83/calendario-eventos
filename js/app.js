/*=================================================================
    Cargando los dias, meses y años
==================================================================*/
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());

const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <li class="calendar__date calendar__item calendar__last-days outside">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </li>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += 
            ` <li class="calendar__date calendar__item calendar__today" data-bs-toggle="modal" data-bs-target="#exampleModal" >${i}</li>`;
        }else{
            dates.innerHTML += 
            ` <li class="calendar__date calendar__item" data-bs-toggle="modal" data-bs-target="#exampleModal">${i}</li>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);

/*=================================================================
    Crud de notas
==================================================================*/
const contenedor = document.querySelector('.contenedor-nota');
let = resultado = '';

const formulario = document.querySelector('#formulario');
const noteInput = document.querySelector('#note');

let opcion = '';

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

eventListeners();
    function eventListeners() {
        noteInput.addEventListener('input', datosNota);

        formulario.addEventListener('submit', nuevaNota);
        // console.log(nuevaNota)
    }



const notaObj = {
    note: ''
}

function datosNota(e){
    notaObj[e.target.name] = e.target.value;
    // console.log(e.target.value)
}


