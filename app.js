const form = document.getElementById('registroFormulario');
const nombreInput = document.getElementById('nombre');
const dniInput = document.getElementById('dni');
const productoInput = document.getElementById('producto');
const tablaBody = document.getElementById('tablaBody');
const logoutButton = document.getElementById('logoutButton');
let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nombreInput.value;
    const dni = dniInput.value;
    const producto = productoInput.value;

    if (name && dni && producto) {
        const newData = {name, dni, producto};
        data.push(newData);
        saveDataToLocalStorage();
        renderTabla();
        form.reset();
    } else {
        alert('Todos los datos son obligatorios');
    }
});

logoutButton.addEventListener('click', function() {
    localStorage.removeItem('formData');
    window.location.href = 'inicio.html'; 
});

function saveDataToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data));
}

function renderTabla() {
    tablaBody.innerHTML = '';

    data.forEach(function (item, index) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const dniCell = document.createElement('td');
        const productoCell = document.createElement('td');
        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        nameCell.textContent = item.name;
        dniCell.textContent = item.dni;
        productoCell.textContent = item.producto;
        editButton.textContent = 'Editar';
        deleteButton.textContent = 'Borrar';

        editButton.classList.add("button", "button--secondary");
        deleteButton.classList.add("button", "button--tertiary");

        editButton.addEventListener('click', function() {
            editData(index);
        });
        deleteButton.addEventListener('click', function() {
            deleteData(index);
        });

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(dniCell);
        row.appendChild(productoCell);
        row.appendChild(actionCell);

        tablaBody.appendChild(row);
    });
}

function editData(index) {
    const item = data[index];
    nombreInput.value = item.name;
    dniInput.value = item.dni;
    productoInput.value = item.producto;
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTabla();
}

function deleteData(index) {
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTabla();
}

renderTabla();
