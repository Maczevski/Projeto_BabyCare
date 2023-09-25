// Selecione todas as caixas de seleção com a classe 'birth-type-select'
const birthTypeSelects = document.querySelectorAll('.birth-type-select');

// Adicione um evento de mudança a cada caixa de seleção
birthTypeSelects.forEach((select, index) => {
    select.addEventListener('change', function () {
        // Faça algo quando uma caixa de seleção for alterada, por exemplo:
        console.log(`Grávida ${index + 1} selecionou: ${this.value}`);
    });
});

