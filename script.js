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