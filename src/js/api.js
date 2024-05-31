function createTableFromJson(jsonData){

    const tableHeader = document.getElementById ("table-header") 
    
    const tableBody = document.getElementById ("table-body") 
    
    const headers = Object.keys (jsonData[0]) 
    
    headers.forEach (header =>{
        const th = document.createElement ("th")
        th.innerText = header
        tableHeader.appendChild(th)
    })
    
    jsonData.forEach (item =>{
        const tr = document.createElement ("tr")
        headers.forEach(header =>{
            const td = document.createElement ("td")
            td.innerText = item[header]
            tr.appendChild(td)
        }
    
    )
    tableBody.appendChild(tr)

    })
}

const botaoTeste = document.getElementById("teste");

// Carrega o JSON usando fetch
fetch("apifake.json")
    .then(Response => Response.json())
    .then(data => {
        // Atribui a função anônima ao evento 'onclick' do botão
        botaoTeste.onclick = () => {
            createTableFromJson(data);
        };
    });