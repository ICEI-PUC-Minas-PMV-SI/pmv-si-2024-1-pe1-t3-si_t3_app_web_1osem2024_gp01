function createTableFromJson(jsonData) {
    const tableHeader = document.getElementById("table-header");
    const tableBody = document.getElementById("table-body");
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

const botaoTeste = document.getElementById("pasta1");

// Carrega o JSON usando fetch
fetch("json/apifake-com.json")
    .then(response => response.json())
    .then(data => {
        // Atribui a função anônima ao evento 'onclick' do botão
        botaoTeste.onclick = () => {
            createTableFromJson(data);
        };
    });

document.getElementById('pasta1').addEventListener('click', function() {
    // Esconde o texto de boas-vindas
    document.getElementById('boas-vindas').style.display = 'none';
      
    // Mostra a tabela
    document.getElementById('data-table').style.display = 'block';
  }); 
  




const botaoSup = document.getElementById("pasta2");

// Carrega o JSON usando fetch
fetch("json/apifake-sup.json")
    .then(response => response.json())
    .then(data => {
        // Atribui a função anônima ao evento 'onclick' do botão
        botaoSup.onclick = () => {
            createTableFromJson(data);
        };
    });


document.getElementById('pasta2').addEventListener('click', function() {
    // Esconde o texto de boas-vindas
    document.getElementById('boas-vindas').style.display = 'none';
      
    // Mostra a tabela
    document.getElementById('data-table').style.display = 'block';
  });

const botaoProj = document.getElementById("pasta3");

// Carrega o JSON usando fetch
fetch("json/apifake-proj.json")
    .then(response => response.json())
    .then(data => {
        // Atribui a função anônima ao evento 'onclick' do botão
        botaoProj.onclick = () => {
            createTableFromJson(data);
        };
    });


document.getElementById('pasta3').addEventListener('click', function() {
    // Esconde o texto de boas-vindas
    document.getElementById('boas-vindas').style.display = 'none';
      
    // Mostra a tabela
    document.getElementById('data-table').style.display = 'block';
  });

  // Cursor de Click
    document.getElementById('indicador1').style.cursor = 'pointer';
    document.getElementById('indicador2').style.cursor = 'pointer';
    document.getElementById('indicador3').style.cursor = 'pointer';
    document.getElementById('pasta1').style.cursor = 'pointer';
    document.getElementById('pasta2').style.cursor = 'pointer';
    document.getElementById('pasta3').style.cursor = 'pointer';