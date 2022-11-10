google.charts.load('current', {'packages': ['corechart']});

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

//function DataAtualDashboard() {
//    const today = new Date().toLocaleDateString();
//    var dy = String(today.getDate()).padStart(2, '0');
//    var mt = string((today.getMonth()+1)).padStart(2, '0');
//    var yr = string(today.getFullYear());
//}
// DataAtualDashboard();