document.addEventListener("DOMContentLoaded", () => {
    // Validação do formulário
    const form = document.getElementById("form-contato");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
    
  
        if (nome && email.includes("@") && mensagem) {
          alert("Sua mensagem foi enviada com sucesso!");
        } else {
          alert("Por favor, preencha todos os campos corretamente.");
        }
      });
    }
    // Busca de livros
    const input = document.getElementById("pesquisa");
    if (input) {
      input.addEventListener("input", () => {
        const termo = input.value.toLowerCase();
        document.querySelectorAll(".livro").forEach(card => {
          const nome = card.getAttribute("data-nome").toLowerCase();
          card.style.display = nome.includes(termo) ? "block" : "none";
        });
      });
    }
  });
  