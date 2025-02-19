document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const confirmModal = document.getElementById("confirmModal");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const userForm = document.getElementById("userForm");
    const dateInput = document.getElementById('date_of_birth');
    const errorMessage = document.getElementById('error-message');

    confirmModal.style.display = "none";

    // Função para verificar se a data é futura
    function isFutureDate(date) {
        return new Date(date) > new Date();
    }

    // Configurar o atributo max para o input de data
    dateInput.setAttribute('max', new Date().toISOString().split('T')[0]);

    // Adicionar evento de input para mostrar/ocultar mensagem de erro
    dateInput.addEventListener('input', function () {
        if (isFutureDate(dateInput.value)) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });

    // Abrir modal ao clicar no botão
    openModalBtn.addEventListener("click", function () {
        if (isFutureDate(dateInput.value)) {
            errorMessage.style.display = 'block'; // Exibir mensagem de erro
        } else {
            confirmModal.style.display = "flex"; // Abrir modal
        }
    });

    // Fechar modal ao cancelar
    cancelBtn.addEventListener("click", function () {
        confirmModal.style.display = "none";
    });

    // Confirmar envio do formulário
    confirmBtn.addEventListener("click", function () {
        userForm.submit();
    });
});