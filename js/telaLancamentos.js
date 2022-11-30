function ApresentarLançamentos() {
    let tbBody = document.getElementById('tbRegistros');
    tbBody.innerHTML = '';
    var saldoAtual = 0;

    if(document.getElementById('date-graphicI').value ==='' || document.getElementById('date-graphicF').value ==='') {
        for ( i=0; i < db.registros.length; i++ ) {
            var strData = db.registros[i].Data;
            var partesData = strData.split("/");
            var dataL = new Date(partesData[2], partesData[1] - 1, partesData[0]);
            var valor = 0
            
            if(db.registros[i].ES === 'S'){
                valor = valor - Number(db.registros[i].Valor);
            } else {
                valor = valor + Number(db.registros[i].Valor);
            }

            saldoAtual += valor

            let tr = tbBody.insertRow();
            let tdCodigo = tr.insertCell();
            let tdData = tr.insertCell();
            let tdDescriçao = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdNatureza = tr.insertCell();
            let tdTipo = tr.insertCell();
        
            tdCodigo.innerText = db.registros[i].Cod;
            tdData.innerText = db.registros[i].Data;
            tdDescriçao.innerText = db.registros[i].Descriçao;
            tdValor.innerText = Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            tdNatureza.innerText = db.registros[i].Natureza;
            tdTipo.innerText = db.registros[i].ES;    
        }
    } else {
        for ( i=0; i < db.registros.length; i++ ) {
            var strData = db.registros[i].Data;
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

                if(db.registros[i].ES === 'S'){
                    valor = valor - Number(db.registros[i].Valor);
                } else {
                    valor = valor + Number(db.registros[i].Valor);
                }
                saldoAtual += valor

                let tr = tbBody.insertRow();
                let tdCodigo = tr.insertCell();
                let tdData = tr.insertCell();
                let tdDescriçao = tr.insertCell();
                let tdValor = tr.insertCell();
                let tdNatureza = tr.insertCell();
                let tdTipo = tr.insertCell();
                
                tdCodigo.innerText = db.registros[i].Cod;
                tdData.innerText = db.registros[i].Data;
                tdDescriçao.innerText = db.registros[i].Descriçao;
                tdValor.innerText = Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
                tdNatureza.innerText = db.registros[i].Natureza;
                tdTipo.innerText = db.registros[i].ES;                        
            }
        }
    }
    saldoAtual = Number(saldoAtual).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    document.getElementById('SaldoFiltrado').value = saldoAtual;
}