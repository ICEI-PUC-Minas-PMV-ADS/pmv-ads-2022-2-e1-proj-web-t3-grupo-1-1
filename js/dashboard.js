google.charts.load('current', {'packages': ['corechart', 'bar']});

var dataHoje = new Date;

var dbd = JSON.parse(localStorage.getItem('db_Registros'));
if (!dbd) {
    dbd = db
};
localStorage.setItem('db_Registros', JSON.stringify(dbd));

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
            width:'80%',
            height:'100%',
            top:'15',
            right: '10',
            bottom: '18',
            left:'90',
        },
        legend: {
            position: 'none'
        },
        is3D: true
    }

    var grafico = new google.visualization.ColumnChart(document.getElementById('data-graphic'));
        grafico.draw(tabela, opcoes);
}

function Graficar() {
    google.charts.setOnLoadCallback(desenharPizza);
}


function PreencherVencimentos() {
    let tbBody = document.getElementById('tbRegistroVencimento');
    var today = new Date()
    var saldoAtual = 0;
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

        saldoAtual += valor
        
        if(dataL > today) {
            let tr = tbBody.insertRow();
            let tdCodigo = tr.insertCell();
            let tdData = tr.insertCell();
            let tdDescriçao = tr.insertCell();
            let tdValor = tr.insertCell();
        
            tdCodigo.innerText = dbd.registros[i].Cod;
            tdData.innerText = dbd.registros[i].Data;
            tdDescriçao.innerText = dbd.registros[i].Descriçao;
            tdValor.innerText = Number(dbd.registros[i].Valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        }
    }
    saldoAtual = Number(saldoAtual).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    document.getElementById('SaldoCaixa').value = saldoAtual;
}

function PreencherGrafico(){
    var tbNatureza = [];
    if(document.getElementById('date-graphicI').value ==='' || document.getElementById('date-graphicF').value ===''){
        for (var i = 0; i < dbd.registros.length; i++) {
            if (tbNatureza.length === 0 && dbd.registros[i].ES === 'S') {
                var arrayInit = {}
                arrayInit.natureza = dbd.registros[i].Natureza;
                arrayInit.saldo = Number(dbd.registros[i].Valor);
                arrayInit.quantidade = 1;
                tbNatureza.unshift(arrayInit);
            } else if(tbNatureza.length !== 0 && dbd.registros[i].ES === 'S') {
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
            if (tbNatureza.length === 0 && dbd.registros[i].ES === 'S' && dataRegistro >= dataI && dataRegistro <= dataF) {
                var arrayInit = {}
                arrayInit.natureza = dbd.registros[i].Natureza;
                arrayInit.saldo = Number(dbd.registros[i].Valor);
                arrayInit.quantidade = 1;
                tbNatureza.unshift(arrayInit);
            } else if(tbNatureza.length !== 0 && dbd.registros[i].ES === 'S' && dataRegistro >= dataI && dataRegistro <= dataF) {
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

function DataAtual(){
    var today = new Date().toLocaleDateString();
                        var dd = today.slice(0,2);
                        var dm = today.slice(3,5);
                        var dy = today.slice(6,10);
                        var mydate = dy + "-" + dm  + "-" + dd;
                        document.getElementById("data-dashboard").value = mydate;
}

function FormatarData(_data) {
    var dd = String(_data.getDate()).padStart(2, '0');
    var dm = String(_data.getMonth() + 1).padStart(2, '0');
    var dy = _data.getFullYear();;
    var mydate = `${dd}/${dm}/${dy}`
    return mydate
}