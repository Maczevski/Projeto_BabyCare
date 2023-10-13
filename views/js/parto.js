//function selectClass(){
//alert(document.getElementById("01").className)
//}

function changeColor(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const riskSelect = selectElement;

    // Remover todas as classes de cores
    riskSelect.classList.remove('green', 'red', 'yellow');

    // Adicionar a classe de cor correspondente à opção selecionada
    riskSelect.classList.add(selectedOption.value);
}
