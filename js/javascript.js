function registro() {
    var request = new Request('https://localhost:44308/api/autor', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ced: document.getElementById("cedula").value,
            nom: document.getElementById("nombre1").value,
            nom2: document.getElementById("nombre2").value,
            ap: document.getElementById("apellido1").value,
            ap2: document.getElementById("apellido2").value,
            clave: document.getElementById("clave").value,
            email: document.getElementById("correo").value,
            edad: parseInt(document.getElementById("edad").value),

        })
    });

    fetch(request)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {

            alert(data);
        })
        .catch(function (err) {
            console.error(err);
        });
}

function autenticara() {
    var ced = document.getElementById("ced").value;
    var clave = document.getElementById("clave").value;
    var request = new Request('https://localhost:44308/api/autor/'+ced+"/"+clave, {

        method: 'Get',

    });

    fetch(request)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            if (data =="si"){
                localStorage.setItem("ced",ced);
                window.open("articulos.html");
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}

function ingresoart() {
    var request = new Request('https://localhost:44369/api/valuesController1', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ced: localStorage.getItem("ced"),
            titulo: document.getElementById("titulo_art").value,
            descripcion : document.getElementById("descripcion_art").value,
            contenido: document.getElementById("contenido_art").value,
            fecha: new Date().getFullYear()+"-"+parseInt( new Date().getMonth()+1)+"-"+new Date().getDate(),
        })
    });

    fetch(request)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {

            alert(data);
        })
        .catch(function (err) {
            console.error(err);
        });
}

function eliminarart(){
    ced =localStorage.getItem("ced");
    titulo= document.getElementById("titulo_art").value;
    var request = new Request('https://localhost:44369/api/valuesController1/'+ced+"/"+titulo+"/", {
        method: 'Delete',
        
    });

    fetch(request)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {

            alert(data);
        })
        .catch(function (err) {
            console.error(err);
        });
}