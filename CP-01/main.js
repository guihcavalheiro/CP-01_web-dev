function calcularDuracao() {
    let inicioHora = parseInt(document.getElementById('inicioHora').value);
    let inicioMinuto = parseInt(document.getElementById('inicioMinuto').value);
    let terminoHora = parseInt(document.getElementById('terminoHora').value);
    let terminoMinuto = parseInt(document.getElementById('terminoMinuto').value);

    if (isNaN(inicioHora) || isNaN(inicioMinuto) || isNaN(terminoHora) || isNaN(terminoMinuto)) {
        alert("Por favor, insira valores numéricos válidos para todos os campos.");
        return; 
    }

    if (inicioHora < 0 || inicioHora > 23 || terminoHora < 0 || terminoHora > 23 ||
        inicioMinuto < 0 || inicioMinuto > 59 || terminoMinuto < 0 || terminoMinuto > 59) {
        alert("Por favor, insira horários válidos. As horas devem estar entre 0 e 23, e os minutos entre 0 e 59.");
        return; 
    }

    let inicioEmMinutos = (inicioHora * 60) + inicioMinuto;
    let terminoEmMinutos = (terminoHora * 60) + terminoMinuto;

    let duracaoEmMinutos = terminoEmMinutos - inicioEmMinutos;
    if (duracaoEmMinutos < 0) {
        duracaoEmMinutos += 24 * 60; 
    }

    let duracaoHoras = Math.floor(duracaoEmMinutos / 60);
    let duracaoMinutos = duracaoEmMinutos % 60;

    document.getElementById('qtdeComp').textContent = 
        `${String(duracaoHoras).padStart(2, '0')}:${String(duracaoMinutos).padStart(2, '0')}`;
}
