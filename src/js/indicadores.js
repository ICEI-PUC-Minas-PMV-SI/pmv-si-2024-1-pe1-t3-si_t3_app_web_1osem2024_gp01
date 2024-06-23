// Funções para indicadores comerciais
function taxaDeConversao(jsonData) {
    let vendasGanhas = jsonData.filter(item => item.Status.toLowerCase() === "ganho");
    let propostas = jsonData.filter(item => item.Status.toLowerCase() === "proposta");
    return (vendasGanhas.length / propostas.length) * 100;
}

function tempoMedioDeFechamento(jsonData) {
    let vendasGanhas = jsonData.filter(item => item.Status.toLowerCase() === "ganho" && item["Data de Fechamento"]);
    let totalDias = vendasGanhas.reduce((acc, item) => {
        let dataCriacao = new Date(item["Data de Criação"]);
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

// Funções para indicadores de suprimentos
function numeroDeSolicitacoesPorStatus(jsonData) {
    let statusUnico = new Set(jsonData.map(item => item.Status));
    let quantidadeStatus = {};
    statusUnico.forEach(status => {
        quantidadeStatus[status] = jsonData.filter(item => item.Status === status).length;
    });
    return quantidadeStatus;
}

function valorTotalOrcadoPorStatus(jsonData) {
    let statusUnico = new Set(jsonData.map(item => item.Status));
    let valorTotal = {};
    statusUnico.forEach(status => {
        valorTotal[status] = jsonData.filter(item => item.Status === status)
                                     .reduce((acc, item) => acc + parseFloat(item["Valor Orçado"].replace("R$", "").replace(",", "")), 0);
    });
    return valorTotal;
}

function distribuicaoSolicitacoesPorSolicitante(jsonData) {
    let solicitantesUnicos = new Set(jsonData.map(item => item["Nome do Solicitante"]));
    let quantidadeSolicitacoes = {};
    solicitantesUnicos.forEach(solicitante => {
        quantidadeSolicitacoes[solicitante] = jsonData.filter(item => item["Nome do Solicitante"] === solicitante).length;
    });
    return quantidadeSolicitacoes;
}

function principaisFornecedores(jsonData) {
    let fornecedoresUnicos = new Set(jsonData.map(item => item.Fornecedor));
    let quantidadeFornecedores = {};
    fornecedoresUnicos.forEach(fornecedor => {
        quantidadeFornecedores[fornecedor] = jsonData.filter(item => item.Fornecedor === fornecedor).length;
    });
    return quantidadeFornecedores;
}

// Funções para indicadores de projetos
function numeroDeProjetosPorFase(jsonData) {
    let fasesUnicas = new Set(jsonData.map(item => item["Fase Atual"]));
    let quantidadeFases = {};
    fasesUnicas.forEach(fase => {
        quantidadeFases[fase] = jsonData.filter(item => item["Fase Atual"] === fase).length;
    });
    return quantidadeFases;
}

function percentualMedioConclusaoPorResponsavel(jsonData) {
    let responsaveisUnicos = new Set(jsonData.map(item => item.Responsável));
    let percentualConclusao = {};
    responsaveisUnicos.forEach(responsavel => {
        let projetosResponsavel = jsonData.filter(item => item.Responsável === responsavel);
        let totalPercentual = projetosResponsavel.reduce((acc, item) => acc + item["Percentual de Conclusão"], 0);
        percentualConclusao[responsavel] = totalPercentual / projetosResponsavel.length;
    });
    return percentualConclusao;
}

function orcamentoTotalPorFase(jsonData) {
    let fasesUnicas = new Set(jsonData.map(item => item["Fase Atual"]));
    let orcamentoTotal = {};
    fasesUnicas.forEach(fase => {
        orcamentoTotal[fase] = jsonData.filter(item => item["Fase Atual"] === fase)
                                       .reduce((acc, item) => acc + parseFloat(item.Orçamento.replace("R$", "").replace(",", "")), 0);
    });
    return orcamentoTotal;
}

function prazoMedioPorFase(jsonData) {
    let fasesUnicas = new Set(jsonData.map(item => item["Fase Atual"]));
    let prazoMedio = {};
    fasesUnicas.forEach(fase => {
        let projetosFase = jsonData.filter(item => item["Fase Atual"] === fase);
        let totalDias = projetosFase.reduce((acc, item) => {
            let prazo = new Date(item.Prazo.split("/").reverse().join("-"));
            let hoje = new Date();
            let dias = (prazo - hoje) / (1000 * 60 * 60 * 24);
            return acc + dias;
        }, 0);
        prazoMedio[fase] = totalDias / projetosFase.length;
    });
    return prazoMedio;
}

function exibirIndicadores(indicadores, tabelaId) {
    const tabela = document.getElementById(tabelaId).querySelector("tbody");
    tabela.innerHTML = "";

    for (let [chave, valor] of Object.entries(indicadores)) {
        const tr = document.createElement("tr");

        const tdChave = document.createElement("td");
        tdChave.innerText = chave;
        tr.appendChild(tdChave);

        const tdValor = document.createElement("td");
        if (typeof valor === "object") {
            tdValor.innerText = JSON.stringify(valor, null, 2);
        } else {
            tdValor.innerText = valor;
        }
        tr.appendChild(tdValor);

        tabela.appendChild(tr);
    }
}

// Fetch dos dados comerciais
fetch("json/apifake-com.json")
    .then(response => response.json())
    .then(data => {
        const indicadoresComercial = {
            "Taxa de Conversão": taxaDeConversao(data).toFixed(2) + "%",
            "Tempo Médio de Fechamento": tempoMedioDeFechamento(data).toFixed(2) + " dias",
            "Valor Médio das Vendas Ganhas": "R$ " + valorMedioDasVendasGanhas(data).toFixed(2),
            "Número de Negócios por Origem": numeroDeNegociosPorOrigem(data),
            "Valor Total por Origem": valorTotalPorOrigem(data),
            "Filtro por Status": filtroStatus(data)
        };
        document.getElementById('indicador1').addEventListener('click', function() {
            document.getElementById('boas-vindas').style.display = 'none';
            document.getElementById('data-table').style.display = 'none';
            document.getElementById('indicador-comercial').style.display = 'block';
            document.getElementById('indicador-suprimento').style.display = 'none';
            document.getElementById('indicador-projeto').style.display = 'none';
            exibirIndicadores(indicadoresComercial, "tabela-indicadores-comercial");
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));

// Fetch dos dados de suprimentos
fetch("json/apifake-sup.json")
    .then(response => response.json())
    .then(data => {
        const indicadoresSuprimento = {
            "Número de Solicitações por Status": numeroDeSolicitacoesPorStatus(data),
            "Valor Total Orçado por Status": valorTotalOrcadoPorStatus(data),
            "Distribuição das Solicitações por Solicitante": distribuicaoSolicitacoesPorSolicitante(data),
            "Principais Fornecedores": principaisFornecedores(data)
        };
        document.getElementById('indicador2').addEventListener('click', function() {
            document.getElementById('boas-vindas').style.display = 'none';
            document.getElementById('data-table').style.display = 'none';
            document.getElementById('indicador-comercial').style.display = 'none';
            document.getElementById('indicador-suprimento').style.display = 'block';
            document.getElementById('indicador-projeto').style.display = 'none';
            exibirIndicadores(indicadoresSuprimento, "tabela-indicadores-suprimento");
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));

// Fetch dos dados de projetos
fetch("json/apifake-proj.json")
    .then(response => response.json())
    .then(data => {
        const indicadoresProjeto = {
            "Número de Projetos por Fase": numeroDeProjetosPorFase(data),
            "Percentual Médio de Conclusão por Responsável": percentualMedioConclusaoPorResponsavel(data),
            "Orçamento Total por Fase": orcamentoTotalPorFase(data),
            "Prazo Médio por Fase": prazoMedioPorFase(data)
        };
        document.getElementById('indicador3').addEventListener('click', function() {
            document.getElementById('boas-vindas').style.display = 'none';
            document.getElementById('data-table').style.display = 'none';
            document.getElementById('indicador-comercial').style.display = 'none';
            document.getElementById('indicador-suprimento').style.display = 'none';
            document.getElementById('indicador-projeto').style.display = 'block';
            exibirIndicadores(indicadoresProjeto, "tabela-indicadores-projeto");
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
