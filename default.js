function escrevaParagrafo() {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.textContent = 'Ola Inferno';
}

function diaHora() {
    const today = new Date();
    const weekday = today.getDay();
    var diaHoraEl = document.getElementById('diahora');

    switch (weekday) {
        case 1:
            diaHoraEl.textContent = 'Segunda-feira';
            break;
        case 2:
            diaHoraEl.textContent = 'Terça-feira';
            break;
        case 3:
            diaHoraEl.textContent = 'Quarta-feira';
            break;
        case 4:
            diaHoraEl.textContent = 'Quinta-feira';
            break;
        case 5:
            diaHoraEl.textContent = 'Sexta-feira';
            break;
        case 6:
            diaHoraEl.textContent = 'Sábado';
            break;
        case 7:
            diaHoraEl.textContent = 'Domingo';
            break;
    }
}

function dataAtual() {
    var dataEl = document.getElementById('dataatual');
    const date = new Date();
    dataEl.textContent = date.toLocaleDateString();
}

function calculaArea() {
    const ladosTriangulo = [5,6,7];
    const calculoArea = ladosTriangulo[0] * ladosTriangulo[1] / 2;
    var calculoEl = document.getElementById('calculoarea');

    calculoEl.textContent = calculoArea;
}

function giraNome() {
    var nome = ['w','3','r','e','s','o','u','r','c','e'];

    for (var i = 1; i > 0; i++) {
        
    }
}