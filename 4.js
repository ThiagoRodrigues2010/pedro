document.addEventListener('DOMContentLoaded', () => {
    console.log("Página de Vídeos carregada.");

    // Simulação de clique nos vídeos
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            // Aqui você poderia abrir um Modal do Bootstrap com o iframe do YouTube real
            alert("O vídeo seria reproduzido agora em um modal ou nova aba!");
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