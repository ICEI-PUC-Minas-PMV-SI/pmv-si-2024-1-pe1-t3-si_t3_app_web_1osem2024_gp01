function createTableFromJson(jsonData, headerId, bodyId) {
    const tableHeader = document.getElementById(headerId);
    const tableBody = document.getElementById(bodyId);
    const headers = Object.keys(jsonData[0]);

    // Limpa a tabela antes de adicionar os novos dados
    tableHeader.innerHTML = "";
    tableBody.innerHTML = "";

    headers.forEach(header => {
        const th = document.createElement("th");
        th.innerText = header;
        tableHeader.appendChild(th);
    });

    jsonData.forEach(item => {
        const tr = document.createElement("tr");
        headers.forEach(header => {
            const td = document.createElement("td");
            td.innerText = item[header];
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// Função para carregar e exibir tabela
function loadAndShowTable(buttonId, tableId, headerId, bodyId, jsonData) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', () => {
        // Esconde todas as tabelas
        const allTables = document.querySelectorAll(".tabela");
        allTables.forEach(table => table.style.display = 'none');

        createTableFromJson(jsonData, headerId, bodyId);

        // Esconde o texto de boas-vindas
        document.getElementById('boas-vindas').style.display = 'none';

        // Mostra a tabela selecionada
        document.getElementById(tableId).style.display = 'block';
    });
}

// Carrega o JSON usando fetch
fetch("json/apifake-com.json")
    .then(response => response.json())
    .then(dataCom => {
        // Chama a função para carregar a tabela 'Comercial'
        loadAndShowTable("pasta1", "data-table", "table-header-comercial", "table-body-comercial", dataCom);
    });

// Carrega o JSON usando fetch
fetch("json/apifake-sup.json")
    .then(response => response.json())
    .then(dataSup => {
        // Chama a função para carregar a tabela 'Suprimento'
        loadAndShowTable("pasta2", "data-table2", "table-header-suprimento", "table-body-suprimento", dataSup);
    });

// Carrega o JSON usando fetch
fetch("json/apifake-proj.json")
    .then(response => response.json())
    .then(dataProj => {
        // Chama a função para carregar a tabela 'Projeto'
        loadAndShowTable("pasta3", "data-table3", "table-header-projeto", "table-body-projeto", dataProj);
    });

// Define o cursor de click
document.getElementById('indicador1').style.cursor = 'pointer';
document.getElementById('indicador2').style.cursor = 'pointer';
document.getElementById('indicador3').style.cursor = 'pointer';
document.getElementById('pasta1').style.cursor = 'pointer';
document.getElementById('pasta2').style.cursor = 'pointer';
document.getElementById('pasta3').style.cursor = 'pointer';