// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Home Page carregada.");

    // Botões de Compra
    const buyButtons = document.querySelectorAll('.btn-comprar');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const cardBody = event.target.closest('.card-body');
            const productTitle = cardBody.querySelector('.card-title').innerText;
            alert(`O produto "${productTitle}" foi adicionado ao carrinho!`);
        });
    });
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


