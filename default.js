function escrevaParagrafo() {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.textContent = 'Ola Inferno';
}

function diaHora() {
    const today = new Date();
    const weekday = today.getDay();
    var diatualEl = document.getElementById('diaatual');
    var horatualEl = document.getElementById('horaatual');

    switch (weekday) {
        case 1:
            diatualEl.textContent = 'Segunda-feira';
            break;
        case 2:
            diatualEl.textContent = 'Terça-feira';
            break;
        case 3:
            diatualEl.textContent = 'Quarta-feira';
            break;
        case 4:
            diatualEl.textContent = 'Quinta-feira';
            break;
        case 5:
            diatualEl.textContent = 'Sexta-feira';
            break;
        case 6:
            diatualEl.textContent = 'Sábado';
            break;
        case 0:
            diatualEl.textContent = 'Domingo';
            break;
    }
    for (var i = 0; i < 10; i++) {
        setInterval(() => {
            horatualEl.textContent = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        }, 1000);
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

function diasNatal() {
   
}

// function numDias () {
//     var objData = new Date(),
//     numAno = objData.getFullYear(),
//     numMes = objData.getMonth()+1,
//     numDias = new Date(numAno, numMes, 0).getDate();

//             for (var i = 0; i < 9; i++) {
//                 console.log(numDias);
//             }
// }
 
function numDias() {
    var objData = new Date(),
    numAno = objData.getFullYear(),
    numMes = objData.getMonth()+1,
    xmasData = new Date('December 25, 2023'),
    xmasNumMonth = xmasData.getMonth()+1,
    numDias = new Date(numAno, numMes, 0).getDate();
    for (var i = 3; i < 12; i++) {
        numMes = objData.getMonth()+i;
        console.log(numDias);
    }
}
