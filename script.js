const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Você fez a escolha certa!</h1>
            <p>Mal posso esperar para vivermos muitas aventuras juntos! 💖</p>
        </div>
    `;
});
