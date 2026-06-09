/**
 * Script Interativo - Tema Agrinho 2026
 * "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"
 */

document.addEventListener("DOMContentLoaded", () => {
    // Executa as funções assim que a página estiver carregada
    initScrollAnimation();
    initClickAlert();
    createLiveCounter();
});

/**
 * 1. Animação de Surgimento (Fade-In) ao Rolar a Página
 * Adiciona uma experiência visual moderna para o usuário.
 */
function initScrollAnimation() {
    // Seleciona os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.intro-section, .card, .info-box');
    
    // Configura o estilo inicial via JS para não quebrar a página se o JS estiver desligado
    elementsToAnimate.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85; // Ponto de ativação (85% da tela)

        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    // Executa uma vez no início e depois a cada scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
}

/**
 * 2. Mensagem de Incentivo ao Clicar no Link do Portal
 */
function initClickAlert() {
    const portalButton = document.querySelector('.btn-link');
    
    if (portalButton) {
        portalButton.addEventListener('click', (event) => {
            // Exibe um balão de incentivo antes de abrir a nova aba
            console.log("O usuário está acessando o portal oficial do Agrinho!");
            alert("🌱 Boa sorte na sua jornada pelo Agrinho 2026! Vamos juntos construir um futuro sustentável.");
        });
    }
}

/**
 * 3. Criação de um Contador Dinâmico Interativo
 * Cria uma pequena seção dinâmica para mostrar que tecnologia e natureza andam juntas.
 */
function createLiveCounter() {
    const mainContainer = document.querySelector('main');
    const gridContainer = document.querySelector('.grid-container');

    if (!mainContainer || !gridContainer) return;

    // Criando a estrutura HTML da nova seção via JavaScript
    const counterSection = document.createElement('section');
    counterSection.style.backgroundColor = '#ffffff';
    counterSection.style.padding = '2rem';
    counterSection.style.borderRadius = '12px';
    counterSection.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
    counterSection.style.marginBottom = '2.5rem';
    counterSection.style.textAlign = 'center';
    counterSection.style.borderLeft = '6px solid #f57c00'; // Detalhe em laranja

    counterSection.innerHTML = `
        <h3 style="color: #2e7d32; margin-bottom: 0.5rem;">🚜 Tecnologia aplicada ao Campo Sustentável</h3>
        <p style="color: #546e7a; margin-bottom: 1rem;">Árvores nativas preservadas e recursos economizados por práticas agrícolas eficientes hoje:</p>
        <div style="font-size: 2.5rem; font-weight: bold; color: #1b5e20;" id="live-number">1.250</div>
    `;

    // Insere a nova seção logo após os cards explicativos
    gridContainer.parentNode.insertBefore(counterSection, gridContainer.nextSibling);

    // Efeito de crescimento numérico simulado
    let currentCount = 1250;
    const numberDisplay = document.getElementById('live-number');

    setInterval(() => {
        // Incrementa aleatoriamente simulando o monitoramento de dados em tempo real
        const randomIncrement = Math.floor(Math.random() * 3) + 1;
        currentCount += randomIncrement;
        if (numberDisplay) {
            numberDisplay.textContent = currentCount.toLocaleString('pt-BR');
        }
    }, 4000); // Atualiza a cada 4 segundos
}