// Função para o botão de agendamento
function agendar() {
    const telefone = "5500995959595"; // Insira o número do WhatsApp com DDD
    const mensagem = encodeURIComponent("Olá! Gostaria de agendar um serviço na Mecânica McQueen ⚡");
    
    // Redireciona diretamente para o WhatsApp
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

// Efeito dinâmico nos cards ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#FFC700'; // Amarelo ao passar o mouse
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderTopColor = '#D80000'; // Volta ao Vermelho original na borda superior
            card.style.borderBottomColor = '#FFC700';
        });
    });
});
