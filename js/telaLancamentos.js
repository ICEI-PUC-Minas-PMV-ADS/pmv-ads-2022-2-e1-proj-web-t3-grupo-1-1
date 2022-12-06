var dbd = JSON.parse(localStorage.getItem('db_Registros'));
if (!dbd) {
    dbd = db
};

var index;

function ApresentarLançamentos() {
    let tbBody = document.getElementById('tbRegistros');
    tbBody.innerHTML = '';
    var saldoAtual = 0;
    var qtde = 0
    if(document.getElementById('date-graphicI').value ==='' || document.getElementById('date-graphicF').value ==='') {
        for ( i=0; i < dbd.registros.length; i++ ) {
            var strData = dbd.registros[i].Data;
            var partesData = strData.split("/");
            var dataL = new Date(partesData[2], partesData[1] - 1, partesData[0]);
            var valor = 0
            
            if(dbd.registros[i].ES === 'S'){
                valor = valor - Number(dbd.registros[i].Valor);
            } else {
                valor = valor + Number(dbd.registros[i].Valor);
            }

            qtde += 1
            saldoAtual += valor

            let tr = tbBody.insertRow();
            let tdCodigo = tr.insertCell();
            let tdData = tr.insertCell();
            let tdDescriçao = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdNatureza = tr.insertCell();
            let tdTipo = tr.insertCell();
        
            tdCodigo.innerText = dbd.registros[i].Cod;
            tdData.innerText = dbd.registros[i].Data;
            tdDescriçao.innerText = dbd.registros[i].Descriçao;
            tdValor.innerText = Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            tdNatureza.innerText = dbd.registros[i].Natureza;
            tdTipo.innerText = dbd.registros[i].ES;    
        }
    } else {
        for ( i=0; i < dbd.registros.length; i++ ) {
            var strData = dbd.registros[i].Data;
            var partesData = strData.split("/");
            var dataL = new Date(partesData[2], partesData[1] - 1, partesData[0]);
            var valor = 0

            var dataInicial = (document.getElementById('date-graphicI').value);
            var dataFinal = (document.getElementById('date-graphicF').value);
            var partesDataI = dataInicial.split("-");
            var dataI1 = partesDataI[2] + "/" + partesDataI[1] + "/" + partesDataI[0];
            var dtI = dataI1.split("/");
            var dataI = new Date(dtI[2], dtI[1] - 1, dtI[0]);
            var partesDataF = dataFinal.split("-");
            var dataF1 = partesDataF[2] + "/" + partesDataF[1] + "/" + partesDataF[0];
            var dtF = dataF1.split("/");
            var dataF = new Date(dtF[2], dtF[1] - 1, dtF[0]);

            if(dataL >= dataI && dataL <= dataF){

                if(dbd.registros[i].ES === 'S'){
                    valor = valor - Number(dbd.registros[i].Valor);
                } else {
                    valor = valor + Number(dbd.registros[i].Valor);
                }
                saldoAtual += valor
                qtde += 1

                let tr = tbBody.insertRow();
                let tdCodigo = tr.insertCell();
                let tdData = tr.insertCell();
                let tdDescriçao = tr.insertCell();
                let tdValor = tr.insertCell();
                let tdNatureza = tr.insertCell();
                let tdTipo = tr.insertCell();
                
                tdCodigo.innerText = dbd.registros[i].Cod;
                tdData.innerText = dbd.registros[i].Data;
                tdDescriçao.innerText = dbd.registros[i].Descriçao;
                tdValor.innerText = Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
                tdNatureza.innerText = dbd.registros[i].Natureza;
                tdTipo.innerText = dbd.registros[i].ES;                        
            }
        }
    }
    saldoAtual = Number(saldoAtual).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    document.getElementById('SaldoFiltrado').value = ` --------------------- Saldo dos ${qtde} Lançamentos no montante de: ${saldoAtual} --------------------- `;
    SelecionarRegistro();
}
var _codigoEdiçao;
var _tipo;
var _descricao;
var _valor;
var _data;
var _natureza;

function SelecionarRegistro(){
    var tbOrigem = document.getElementById('tbParaEdicao');
    for(var i=0; i<tbOrigem.rows.length; i++){
        tbOrigem.rows[i].onclick = function(){
            index = this.rowIndex;
            _codigoEdiçao = tbOrigem.rows[index].cells[0].innerText;
            _tipo = tbOrigem.rows[index].cells[5].innerText;
            _descricao = tbOrigem.rows[index].cells[2].innerText
            _valor = tbOrigem.rows[index].cells[3].innerText;
            _natureza = tbOrigem.rows[index].cells[4].innerText;
            EscolherRegistro()
        }
    }
}

function EscolherRegistro(){
    sessionStorage.setItem('chaveCod', _codigoEdiçao);
}