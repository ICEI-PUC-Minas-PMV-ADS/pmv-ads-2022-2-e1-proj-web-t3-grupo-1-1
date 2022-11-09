        //https://www.youtube.com/watch?v=Zwv9qRyVeU4&t=1407s -> GitHub
        
        var accessData = [];

        function users() {  accessData = JSON.parse(this.responseText); }
        
        function error(err) { console.log('Erro:', err); }
        
        var xhr = new XMLHttpRequest();
        xhr.onload = users;
        xhr.onerror = error;
        xhr.open('GET', "access.json", false);
        xhr.send();
        
        function validate() {
                let door = "locked";
                let nameUser = document.getElementById("login").value;
                let passwordUser = document.getElementById("password").value;

                accessData.map((i) => {
                        if (nameUser == i.login) {
                                if (passwordUser == i.password) {
                                        door = "open"
                                        document.getElementById("entrada-sistema").setAttribute('onsubmit', 'return false')
                                } else { 
                                        door = "close"
                                        document.getElementById("entrada-sistema").setAttribute('onsubmit', 'return true') 
                                }
                        }
                })
                if (door == "open") {
                        window.location.href = "http://127.0.0.1:5500/dashboard.html";
                }
        }