document.addEventListener("DOMContentLoaded", function() {
    carregarOpcaoSalva('mySelect1');
    carregarOpcaoSalva('mySelect2');
    carregarOpcaoSalva('mySelect3');
    carregarOpcaoSalva('mySelect4');
    carregarOpcaoSalva('mySelect5');
    carregarOpcaoSalva('mySelect6');
    carregarOpcaoSalva('mySelect7');
    carregarOpcaoSalva('mySelect8');
    carregarOpcaoSalva('mySelect9');
    carregarOpcaoSalva('mySelect10');
    carregarOpcaoSalva('mySelect11');
    carregarOpcaoSalva('mySelect12');

});
document.addEventListener("DOMContentLoaded", function() {
    carregarOpcaoSalva('mySelect5');
    carregarOpcaoSalva('mySelect6');
    carregarOpcaoSalva('mySelect7');
    carregarOpcaoSalva('mySelect8');
    carregarOpcaoSalva('mySelect9');
    carregarOpcaoSalva('mySelect10');
    carregarOpcaoSalva('mySelect11');
    carregarOpcaoSalva('mySelect12');

});
document.addEventListener("DOMContentLoaded", function() {
    carregarOpcaoSalva('mySelect9');
    carregarOpcaoSalva('mySelect10');
    carregarOpcaoSalva('mySelect11');
    carregarOpcaoSalva('mySelect12');

});
function changeColor(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const riskSelect = selectElement;

    // Remover todas as classes de cores
    riskSelect.classList.remove('green', 'red', 'yellow');

    // Adicionar a classe de cor correspondente à opção selecionada
    riskSelect.classList.add(selectedOption.value);
}

function carregarOpcaoSalva(selectId) {
    var selectElement = document.getElementById(selectId);
    var opcaoSalva = localStorage.getItem(selectId);

    if (opcaoSalva) {
        selectElement.value = opcaoSalva;
        // Atualizar a classe de cor ao carregar a opção salva
        changeColor(selectElement);
    }
};

function salvarOpcao(selectElement) {
    var selectId = selectElement.id;
    var opcaoSelecionada = selectElement.value;
    localStorage.setItem(selectId, opcaoSelecionada);

    // Atualizar a classe de cor ao salvar a opção
    changeColor(selectElement);
}


var riskSelects = document.querySelectorAll('.risk-select');

riskSelects.forEach(function (selectElement) {
    selectElement.addEventListener("change", function () {
        salvarOpcao(selectElement);
    });
});