google.charts.load('current', {'packages': ['corechart']});


var dataHoje = new Date;

function desenharPizza(){
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Natureza');
    tabela.addColumn('number', 'Valor');
    tabela.addRows([
        ['Alimentação', 5000],
        ['Transporte', 2500],
        ['Frete', 2800]
    ]);
    
    var opcoes = {
        backgroundColor: '#efecec',
        chartArea:{
            width:'100%',
            height:'100%',
            top:'10',
            left:'15',
        },
        is3D: true
    }

    var grafico = new google.visualization.PieChart(document.getElementById('data-graphic'));
        grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza);

function PreencherVencimentos() {
    let tbBody = document.getElementById('tbRegistroVencimento');
    for ( i=0; i < db.registros.length; i++ ) {
        let tr = tbBody.insertRow();
        let tdCodigo = tr.insertCell();
        let tdData = tr.insertCell();
        let tdDescriçao = tr.insertCell();
        let tdValor = tr.insertCell();
        var tbGrafico = [];
        var today = new Date()
        for ( i=0; i < db.registros.length; i++ ) {
            var strData = db.registros[i].Data;
            var partesData = strData.split("/");
            var dataL = new Date(partesData[2], partesData[1] - 1, partesData[0]);
            if(dataL > today) {
                tdCodigo.innerText = db.registros[i].Cod;
                tdData.innerText = db.registros[i].Data;
                tdDescriçao.innerText = db.registros[i].Descriçao;
                tdValor.innerText = Number(db.registros[i].Valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            }
        }

    }
}

function PreencherGrafico(){

}

function DataAtual(){
    var today = new Date().toLocaleDateString();
                        var dd = today.slice(0,2);
                        var dm = today.slice(3,5);
                        var dy = today.slice(6,10);
                        var mydate = dy + "-" + dm  + "-" + dd;
                        document.getElementById("data-dashboard").value = mydate;
}