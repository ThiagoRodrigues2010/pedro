// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página Fale Conosco carregada.");

    // Opcional: Se quiser que o ícone mude dinamicamente de "?" para outra coisa, 
    // pode adicionar lógica aqui, mas o CSS já trata a mudança de cores.
    
    // Exemplo: Detectar clique em um item do FAQ
    const faqItems = document.querySelectorAll('.accordion-button');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Apenas para debug ou análises futuras
            console.log('Usuário clicou em uma dúvida: ' + item.innerText);
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