const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Remove a classe 'ativo' de todos os botões
        botoes.forEach(b => b.classList.remove('ativo'));
        
        // Adiciona a classe 'ativo' apenas no botão que foi clicado
        this.classList.add('ativo');
        
        console.log('Botão clicado:', this.textContent); // Para debug
    });
});
