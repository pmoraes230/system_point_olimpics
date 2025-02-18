// Bloquear datas futuras
const dateInput = document.getElementById('date_of_birth').value;
const errorMessage = document.getElementById('error-message');

// Definir a data máxima para a data atual
dateInput.setAttribute('max', new Date().toISOString().split('T')[0]);

// Verificar a data selecionada
dateInput.addEventListener('input', function () {
    if (new Date(dateInput.value) > new Date()) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});