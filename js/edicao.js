var dbd = JSON.parse(localStorage.getItem('db_Registros'));
if (!dbd) {
    dbd = db
};

const chave = Number(JSON.parse(sessionStorage.getItem('chaveCod')))

function Cancelar() {
    window.location.href = "http://127.0.0.1:5500/lancamentos.html"
}

function updateRegistro(Cod) {
    var Dt = (document.getElementById('txtData').value);
    var partesDataI = Dt.split("-");
    var _data = partesDataI[2] + "/" + partesDataI[1] + "/" + partesDataI[0];
    var _descricao = document.getElementById('txtDescricao').value;
    var _valor = Number(document.getElementById('txtValor').value);
    var _natureza = document.getElementById('txtNatureza').value;
    var _tipo = SelectTipo();

    // Localiza o índice do objeto a ser alterado no array a partir do seu ID
    let index = dbd.registros.map(obj => obj.Cod).indexOf(Cod);
    
    // Altera os dados do objeto no array
    dbd.registros[index].Cod = Cod,
    dbd.registros[index].Data = _data,
    dbd.registros[index].Descriçao = _descricao,
    dbd.registros[index].Valor = Number(_valor),
    dbd.registros[index].Natureza = _natureza,
    dbd.registros[index].ES = _tipo

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Registros', JSON.stringify(dbd));
}

function Alteraçao(){
    updateRegistro(chave);
}

function SelectTipo(){
    if(document.getElementById('gridRadios1').checked){
        return document.getElementById('gridRadios1').value
    } else if(document.getElementById('gridRadios2').checked){
            return document.getElementById('gridRadios2').value
    }
}