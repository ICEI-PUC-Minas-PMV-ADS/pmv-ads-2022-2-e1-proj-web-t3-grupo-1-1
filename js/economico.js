google.charts.load('current', {'packages': ['corechart', 'bar']});

var dbd = JSON.parse(localStorage.getItem('db_Registros'));
if (!dbd) {
    dbd = db
};

var dataHoje = new Date;

function desenharPizza(){
    var tabela = new google.visualization.DataTable();
    var tbInfo = PreencherGrafico()
    tabela.addColumn('string', 'Natureza');
    tabela.addColumn('number', 'Valor');
    tabela.addColumn({type:'string', role:'annotation'}); //https://developers.google.com/chart/interactive/docs/roles

    for (var i = 0; i < tbInfo.length; i++) {
        tabela.addRows([
            [tbInfo[i].natureza, tbInfo[i].saldo, Number(tbInfo[i].saldo).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})]])
    }

    var opcoes = {
        backgroundColor: '#efecec',
        chartArea:{
            width:'100%',
            height:'100%',
            top:'10',
            right: '10',
            bottom: '22',
            left:'60',
        },
        legend: {
            position: 'none'
        },
        is3D: true
    }

    var grafico = new google.visualization.LineChart(document.getElementById('data-graphic-economico'));
        grafico.draw(tabela, opcoes);
}

function Graficar() {
    google.charts.setOnLoadCallback(desenharPizza);
}

function ApresentarResultado() {
    let tbBody = document.getElementById('tbResultado');
    tbBody.innerHTML = '';
    var saldoAtual = 0;
    var qtde = 0
    if(document.getElementById('date-graphicI').value ==='' && document.getElementById('date-graphicF').value ==='' &&
    document.getElementById('txtcodigo').value == "" && document.getElementById('txtvalor').value == "" && 
    document.getElementById('txtnatureza').value == "" && document.getElementById('txtES').value == "") {
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
            let tdValor = tr.insertCell();
            let tdNatureza = tr.insertCell();
            let tdTipo = tr.insertCell();
        
            tdCodigo.innerText = dbd.registros[i].Cod;
            tdData.innerText = dbd.registros[i].Data;
            tdValor.innerText = Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            tdNatureza.innerText = dbd.registros[i].Natureza;
            tdTipo.innerText = dbd.registros[i].ES;    
        }
    }else {
        for ( i=0; i < dbd.registros.length; i++ ) {
            var strData = dbd.registros[i].Data;
            var partesData = strData.split("/");
            var dataL = new Date(partesData[2], partesData[1] - 1, partesData[0]);
            var valor = 0

            var dataInicial = (document.getElementById('date-graphicI').value);
            var dataFinal = (document.getElementById('date-graphicF').value);
            var partesDataI = dataInicial.split("-");
            var dataI1 = partesDataI[2] + "/" + partesDataI[1] + "/" + partesDataI[0];
            if(document.getElementById('date-graphicI').value ===''){dataI1 = strData};
            var dtI = dataI1.split("/");
            var dataI = new Date(dtI[2], dtI[1] - 1, dtI[0]);
            var partesDataF = dataFinal.split("-");
            var dataF1 = partesDataF[2] + "/" + partesDataF[1] + "/" + partesDataF[0];
            if(document.getElementById('date-graphicI').value ===''){dataF1 = strData};
            var dtF = dataF1.split("/");
            var dataF = new Date(dtF[2], dtF[1] - 1, dtF[0]);

            var _cod = (document.getElementById('txtcodigo').value);
            var _val = (document.getElementById('txtvalor').value);
            var _natureza = (document.getElementById('txtnatureza').value);
            var _ES = (document.getElementById('txtES').value);

            if(_cod == ""){_cod = dbd.registros[i].Cod}else{_cod = Number(document.getElementById('txtcodigo').value)};
            if(_val == ""){_val = dbd.registros[i].Valor}else{_val = Number(document.getElementById('txtvalor').value)};
            if(_natureza == ""){_natureza = dbd.registros[i].Natureza};
            if(_ES == ""){_ES = dbd.registros[i].ES};

            if(dataL >= dataI && dataL <= dataF && _cod === dbd.registros[i].Cod && _val === dbd.registros[i].Valor &&
                _natureza === dbd.registros[i].Natureza && _ES === dbd.registros[i].ES){

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
                let tdValor = tr.insertCell();
                let tdNatureza = tr.insertCell();
                let tdTipo = tr.insertCell();
                
                tdCodigo.innerText = dbd.registros[i].Cod;
                tdData.innerText = dbd.registros[i].Data;
                tdValor.innerText = Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
                tdNatureza.innerText = dbd.registros[i].Natureza;
                tdTipo.innerText = dbd.registros[i].ES;                        
            }
        }
    }
    saldoAtual = Number(saldoAtual).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    document.getElementById('ResultadoFinal').value = ` Resultado dos ${qtde} Lançamentos no montante de: ${saldoAtual}`;
    Graficar();
}

function PreencherGrafico(){
    var tbNatureza = [];
    if(document.getElementById('date-graphicI').value ==='' || document.getElementById('date-graphicF').value ==='' || 
    (document.getElementById('txtcod') && document.getElementById('txtvalor') && document.getElementById('txtnatureza') && 
    document.getElementById('txtES'))){
        for (var i = 0; i < dbd.registros.length; i++) {
            if (tbNatureza.length === 0) {
                var arrayInit = {}
                arrayInit.natureza = dbd.registros[i].Natureza;
                arrayInit.saldo = Number(dbd.registros[i].Valor);
                arrayInit.quantidade = 1;
                tbNatureza.unshift(arrayInit);
            } else if(tbNatureza.length !== 0) {
                var contador = 0;
                var pos = 0;
                for (var x = 0; x < tbNatureza.length; x++) {
                    if (dbd.registros[i].Natureza === tbNatureza[x].natureza) {
                        contador = 1;
                        pos = x;
                        break;
                    }    
                }
                if (contador === 1) {
                    tbNatureza[pos].saldo += Number(dbd.registros[i].Valor);
                    tbNatureza[pos].quantidade += 1;
                } else {
                    var arrayDados = new Array
                    arrayDados.natureza = dbd.registros[i].Natureza;
                    arrayDados.saldo = dbd.registros[i].Valor;
                    arrayDados.quantidade = 1;
                    tbNatureza.push(arrayDados);
                }
            }
        }
    } else {
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
    
        for (var i = 0; i < dbd.registros.length; i++) {
            var strData = dbd.registros[i].Data;
            var partesData = strData.split("/");
            var dataRegistro = new Date(partesData[2], partesData[1] - 1, partesData[0]);

            if (tbNatureza.length === 0 && dataRegistro >= dataI && dataRegistro <= dataF) {
                var arrayInit = {}
                arrayInit.natureza = dbd.registros[i].Natureza;
                arrayInit.saldo = Number(dbd.registros[i].Valor);
                arrayInit.quantidade = 1;
                tbNatureza.unshift(arrayInit);

            } else if(tbNatureza.length !== 0 && dataRegistro >= dataI && dataRegistro <= dataF) {
                var contador = 0;
                var pos = 0;
                for (var x = 0; x < tbNatureza.length; x++) {
                    if (dbd.registros[i].Natureza === tbNatureza[x].natureza) {
                        contador = 1;
                        pos = x;
                        break;
                    }    
                }
                if (contador === 1) {
                    tbNatureza[pos].saldo += Number(dbd.registros[i].Valor);
                    tbNatureza[pos].quantidade += 1;
                } else {
                    var arrayDados = new Array
                    arrayDados.natureza = dbd.registros[i].Natureza;
                    arrayDados.saldo = dbd.registros[i].Valor;
                    arrayDados.quantidade = 1;
                    tbNatureza.push(arrayDados);
                }
            }
        }

    }
    return tbNatureza;
}

function FormatarData(_data) {
    var dd = String(_data.getDate()).padStart(2, '0');
    var dm = String(_data.getMonth() + 1).padStart(2, '0');
    var dy = _data.getFullYear();;
    var mydate = `${dd}/${dm}/${dy}`
    return mydate
}


function error(URL) {
        
let request = new XMLHttpRequest();
request.open('GET', url, false);
request.send();

}