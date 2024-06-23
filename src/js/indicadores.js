function taxaDeConversao(jsonData) {
    let vendasGanhas = jsonData.filter(item => item.Status.toLowerCase() === "ganho");
    let propostas = jsonData.filter(item => item.Status.toLowerCase() === "proposta");
    return (vendasGanhas.length / propostas.length) * 100;
}
function tempoMedioDeFechamento(jsonData) {
    let vendasGanhas = jsonData.filter(item => item.Status.toLowerCase() === "ganho" && item["Data de Fechamento"]);
    let totalDias = vendasGanhas.reduce((acc, item) => {
        let dataCriacao = new Date(item["Data de Cria��o"]);
        let dataFechamento = new Date(item["Data de Fechamento"]);
        let dias = (dataFechamento - dataCriacao) / (1000 * 60 * 60 * 24);
        return acc + dias;
    }, 0);
    return vendasGanhas.length > 0 ? totalDias / vendasGanhas.length : 0;
}

function valorMedioDasVendasGanhas(jsonData) {
        let vendasGanhas = jsonData.filter(item => item.Status.toLowerCase() === "ganho");
        let valorTotal = vendasGanhas.reduce((acc, item) => acc + item.Valor, 0);
        return valorTotal / vendasGanhas.length;
    }

function numeroDeNegociosPorOrigem(jsonData) {
    let origemUnica = new Set(jsonData.map(item => item.Origem));
    let quantidadeNegocios = {};
    origemUnica.forEach(origem => {
        quantidadeNegocios[origem] = jsonData.filter(item => item.Origem === origem).length;
    });
    return quantidadeNegocios;
    }

function valorTotalPorOrigem(jsonData) {
    let origemUnica = new Set(jsonData.map(item => item.Origem));
    let valorTotal = {};
    origemUnica.forEach(origem => {
        valorTotal[origem] = jsonData.filter(item => item.Origem === origem)
                                      .reduce((acc, item) => acc + item.Valor, 0);
    });
    return valorTotal;
    }

function filtroStatus(jsonData) {
    let statusUnico = new Set(jsonData.map(item => item.Status));
    let quantidadeStatus = {};
    statusUnico.forEach(status => {
        quantidadeStatus[status] = jsonData.filter(item => item.Status === status).length;
    });
    return quantidadeStatus;
}

fetch("json/apifake-com.json")
    .then(response => response.json())
    .then(data => {
        console.log(filtroStatus(data));
        console.log(valorTotalPorOrigem(data));
        console.log(numeroDeNegociosPorOrigem(data));
        console.log(valorMedioDasVendasGanhas(data));
        console.log(tempoMedioDeFechamento(data));
        console.log(taxaDeConversao(data));
    })

fetch("json/apifake-sup.json")
    .then(response => response.json())
    .then(data => {
        console.log(filtroStatus(data));
        console.log(valorTotalPorOrigem(data));
        console.log(numeroDeNegociosPorOrigem(data));
        console.log(valorMedioDasVendasGanhas(data));
        console.log(tempoMedioDeFechamento(data));
        console.log(taxaDeConversao(data));
    })

fetch("json/apifake-proj.json")
    .then(response => response.json())
    .then(data => {
        console.log(filtroStatus(data));
        console.log(valorTotalPorOrigem(data));
        console.log(numeroDeNegociosPorOrigem(data));
        console.log(valorMedioDasVendasGanhas(data));
        console.log(tempoMedioDeFechamento(data));
        console.log(taxaDeConversao(data));
    })

    .catch(error => console.error('Erro ao buscar dados:', error));