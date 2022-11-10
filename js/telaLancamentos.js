function ApresentarLançamentos() {
    let tbBody = document.getElementById('tbRegistros');
        
    for ( i=0; i < db.registros.length; i++ ) {
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
        tdValor.innerText = db.registros[i].Valor;
        tdNatureza.innerText = db.registros[i].Natureza;
        tdTipo.innerText = db.registros[i].ES;
    }
}