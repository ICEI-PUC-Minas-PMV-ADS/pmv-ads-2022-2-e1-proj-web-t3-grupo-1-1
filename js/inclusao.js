function Cancelar() {
    window.location.href = "http://127.0.0.1:5500/lancamentos.html"
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbd = JSON.parse(localStorage.getItem('db_Registros'));
if (!dbd) {
    dbd = db
};

function insertRegistro(w) {
var codigo = dbd.registros.length + 1;
    let novoRegistro = {
        "Cod": codigo,
        "Data": w.data,
        "Descriçao" : w.descricao,
        "Valor": w.valor,
        "Natureza" : w.natureza,
        "ES": w.tipo,
    }

    // Insere o novo objeto no array
    dbd.registros.push(novoRegistro);

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Registros', JSON.stringify(dbd));
}

function SelectTipo(){
    if(document.getElementById('gridRadios1').checked){
        return document.getElementById('gridRadios1').value
    } else if(document.getElementById('gridRadios2').checked){
            return document.getElementById('gridRadios2').value
    }
}

function LançarRegistro(){
    var Dt = (document.getElementById('txtData').value);
    var partesDataI = Dt.split("-");
    var _data = partesDataI[2] + "/" + partesDataI[1] + "/" + partesDataI[0];
    var _descricao = document.getElementById('txtDescricao').value;
    var _valor = Number(document.getElementById('txtValor').value);
    var _natureza = document.getElementById('txtNatureza').value;
    var _tipo = SelectTipo();

    var _registro = {
        "data": _data,
        "descricao" : _descricao,
        "valor": _valor,
        "natureza" : _natureza,
        "tipo": _tipo,
    }
    insertRegistro(_registro);
}