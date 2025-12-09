// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de 'Comprar'
    const buyButtons = document.querySelectorAll('.btn-comprar');

    // Adiciona um evento de clique para cada botão
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Pega o título do produto dentro do mesmo card
            const cardBody = event.target.closest('.card-body');
            const productTitle = cardBody.querySelector('.card-title').innerText;

            // Alerta simples para simular ação
            alert(`O produto "${productTitle}" foi adicionado ao seu carrinho!`);
        });
    });

    console.log("Site Game Mania carregado com sucesso.");
});
document.addEventListener("DOMContentLoaded", () => {
    // Apenas um log para confirmar carregamento
    console.log("Header Game Mania carregado.");
    
    // Lógica opcional de busca
    const searchForm = document.querySelector('.search-container');
    if(searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Busca simulada!");
        });
    }
});