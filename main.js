let listaServico = []

const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}


app.whenReady().then(createWindow); 


function adicionar() {
    const nome = document.getElementById("nome").value;
    const celular = document.getElementById("celular").value;
    const servico = document.getElementById("servico").value;
    const endereco = document.getElementById("endereco").value;

    const servicoModel = new Servico(nome, celular, servico, endereco);
    listaServico.push(servicoModel);

   formatarLista();
}

function formatarLista() {
    let lista = ''
    let cont = 1;
    for(servico of listaServico) {
        lista += `<tr>
        <th scope="row"> ${cont}</th>
        <td>${servico.nome}</td> 
        <td>${servico.celular}</td>
        <td>${servico.endereco}</td>  
        <td>${servico.servico}</td>    
        <td><button type="button" onclick="remover(${cont - 1})" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>  
        </tr>`
        
        cont++;
    }

    document.getElementById("conteudoTabela").innerHTML = lista;
}

function remover(index) {
    listaServico.splice(index, 1);
    formatarLista()
}
