document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const confirmModal = document.getElementById("confirmModal");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const userForm = document.getElementById("userForm");
  
    // Garante que o modal esteja oculto ao carregar a página
    confirmModal.style.display = "none";
  
    // Abrir modal ao clicar no botão
    openModalBtn.addEventListener("click", function () {
        if (condition) {
            
        }
        confirmModal.style.display = "flex";
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
  