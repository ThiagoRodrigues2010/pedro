// Dados dos produtos (JSON Array)
const products = [
    {
        id: 1,
        name: "ACTION FIGURE ALMIRANTES ONE PIECE (20 cm)",
        oldPrice: 380.00,
        price: 329.00,
        installments: "9x de R$ 35,55",
        image: "https://m.media-amazon.com/images/I/61DjOw4RQ+L._AC_SX679_.jpg", 
        tag: "R$ 51,00 OFF"
    },
    {
        id: 2,
        name: "MILES MORALES ACTION FIGURE",
        oldPrice: 500.00,
        price: 450.00,
        installments: "9x de R$ 50,00",
        image: "https://m.media-amazon.com/images/I/51wXkM5G+PL._AC_SL1000_.jpg",
        tag: "R$ 50,00 OFF"
    },
    {
        id: 3,
        name: "GOHAN ACTION FIGURE ESTATUA (23 cm)",
        oldPrice: 100.00,
        price: 90.00,
        installments: "9x de R$ 10,00",
        image: "https://m.media-amazon.com/images/I/61+oO2wZlQL._AC_SL1500_.jpg",
        tag: "R$ 10,00 OFF"
    },
    {
        id: 4,
        name: "BATMAN ADVENTURES FIGURE (16 cm)",
        oldPrice: 2400.00,
        price: 2160.00,
        installments: "8x de R$ 280,00",
        image: "https://m.media-amazon.com/images/I/71c3q2+gWJL._AC_SL1500_.jpg",
        tag: "R$ 240,00 OFF"
    },
    {
        id: 5,
        name: "NARUTO MINATO NAMIKAZE POSE (21 cm)",
        oldPrice: 400.00,
        price: 370.00,
        installments: "8x de R$ 46,25",
        image: "https://m.media-amazon.com/images/I/61O+0ZtQWLL._AC_SL1200_.jpg",
        tag: "R$ 30,00 OFF"
    },
    {
        id: 6,
        name: "KRATOS GOD OF WAR (18 cm)",
        oldPrice: 120.00,
        price: 110.00,
        installments: "10x de R$ 11,00",
        image: "https://m.media-amazon.com/images/I/71+y-E5O7-L._AC_SL1500_.jpg",
        tag: "R$ 10,00 OFF"
    },
    {
        id: 7,
        name: "ZORO RORONOA ACTION FIGURE ONE PIECE",
        oldPrice: 300.00,
        price: 270.00,
        installments: "9x de R$ 30,00",
        image: "https://m.media-amazon.com/images/I/61Kq-6t6+LL._AC_SL1500_.jpg",
        tag: "R$ 30,00 OFF"
    },
    {
        id: 8,
        name: "LUFFY SAMURAI ACTION FIGURE",
        oldPrice: 190.00,
        price: 170.00,
        installments: "8x de R$ 21,25",
        image: "https://m.media-amazon.com/images/I/61+7d9+r+lL._AC_SL1001_.jpg",
        tag: "R$ 20,00 OFF"
    },
    {
        id: 9,
        name: "ACTION FIGURE FINN THE HUMAN (14 cm)",
        oldPrice: 100.00,
        price: 70.00,
        installments: "10x de R$ 7,00",
        image: "https://m.media-amazon.com/images/I/51+t9e+s+lL._AC_SL1000_.jpg",
        tag: "R$ 30,00 OFF"
    },
    {
        id: 10,
        name: "SHADOW OF THE COLOSSUS (CARTELA) - PS4",
        oldPrice: 150.00,
        price: 120.00,
        installments: "9x de R$ 8,77",
        image: "https://m.media-amazon.com/images/I/81L-u5V0i8L._AC_SL1500_.jpg",
        tag: "R$ 30,00 OFF"
    },
    {
        id: 11,
        name: "SHADOW OF THE COLOSSUS (CARTELA) - PS5",
        oldPrice: 90.00,
        price: 79.00,
        installments: "9x de R$ 8,77",
        image: "https://m.media-amazon.com/images/I/71lq7g0Q2sL._AC_SL1200_.jpg",
        tag: "R$ 11,00 OFF"
    },
    {
        id: 12,
        name: "SHADOW OF THE COLOSSUS (CARTELA) - PS5",
        oldPrice: 90.00,
        price: 79.00,
        installments: "9x de R$ 8,77",
        image: "https://m.media-amazon.com/images/I/71lq7g0Q2sL._AC_SL1200_.jpg",
        tag: "R$ 11,00 OFF"
    }
];

// Função principal de renderização
function renderProducts() {
    const grid = document.getElementById('product-grid');
    
    // Limpa o grid antes de renderizar (boa prática)
    grid.innerHTML = '';

    // Mapeia os produtos e cria o HTML usando classes do Bootstrap
    const productsHTML = products.map(product => `
        <div class="col">
            <div class="card product-card h-100 border-0 shadow-sm position-relative">
                
                <span class="position-absolute top-0 end-0 badge bg-warning text-dark m-2 z-1 shadow-sm">
                    OFERTA
                </span>

                <div class="card-body p-3 d-flex flex-col align-items-center">
                    <div class="product-img-container w-100 mb-3">
                        <img src="${product.image}" alt="${product.name}" 
                             onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
                    </div>
                    
                    <h3 class="card-title h6 fw-bold text-uppercase text-center text-dark mb-2" 
                        style="min-height: 2.5em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        ${product.name}
                    </h3>

                    <div class="text-center w-100">
                        <small class="text-muted text-decoration-line-through d-block">
                            R$ ${product.oldPrice.toFixed(2).replace('.', ',')}
                        </small>
                        <div class="h4 fw-bold price-tag mb-0">
                            R$ ${product.price.toFixed(2).replace('.', ',')}
                        </div>
                        <small class="text-muted d-block mb-2" style="font-size: 0.75rem;">
                            ${product.installments} <span class="text-success">sem juros</span>
                        </small>
                    </div>
                </div>

                <div class="mt-auto">
                    <div class="discount-tag-card text-center">
                        ${product.tag}
                    </div>
                    <button class="btn btn-buy w-100 fw-bold text-uppercase rounded-0 rounded-bottom py-2">
                        Comprar <i class="fas fa-shopping-cart ms-1"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    grid.innerHTML = productsHTML;
}

// Inicializa a renderização quando a janela carregar
window.addEventListener('load', renderProducts);