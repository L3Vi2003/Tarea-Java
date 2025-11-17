/*AREA DE SALUD*/

function presion() {
    let s = parseInt(document.getElementById("sis").value);
    let d = parseInt(document.getElementById("dias").value);
    let r = "";

    if (s < 120 && d < 80) r = "Normal";
    else if (s < 130 && d < 80) r = "Elevada";
    else if (s < 140 || d < 90) r = "Hipertensión Grado 1";
    else r = "Hipertensión Grado 2";

    document.getElementById("r1").innerHTML = r;
}

function temperaturas() {
    let n = parseInt(document.getElementById("pacientes").value);
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += parseFloat(prompt("Temperatura del paciente #" + i));
    }

    document.getElementById("r2").innerHTML = "Promedio: " + (suma / n).toFixed(2);
}

function fiebre() {
    let temp = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));
    let cont = 0;

    while (temp !== 0) {
        if (temp >= 38) cont++;
        temp = parseFloat(prompt("Ingrese temperatura:"));
    }

    document.getElementById("r3").innerHTML = "Pacientes con fiebre: " + cont;
}

function triage() {
    let c = parseInt(document.getElementById("codigoT").value);
    let r;

    switch (c) {
        case 1: r = "Rojo"; break;
        case 2: r = "Amarillo"; break;
        case 3: r = "Verde"; break;
        case 4: r = "Azul"; break;
        default: r = "Código inválido";
    }

    document.getElementById("r4").innerHTML = r;
}

function saturacion() {
    let cont = 0, valor, seguir;

    do {
        valor = parseFloat(prompt("Saturación:"));
        cont++;
        seguir = prompt("¿Continuar? (si/no)");
    } while (seguir.toLowerCase() === "si");

    document.getElementById("r5").innerHTML = "Mediciones registradas: " + cont;
}

/*AREA DE MEDIO AMBIENTE*/

function calidadAire() {
    let x = parseInt(document.getElementById("aqi").value);
    let r = "";

    if (x <= 50) r = "Bueno";
    else if (x <= 100) r = "Moderado";
    else if (x <= 150) r = "Dañino para grupos sensibles";
    else if (x <= 200) r = "Dañino";
    else r = "Muy peligroso";

    document.getElementById("a1").innerHTML = r;
}

function ruido() {
    let n = parseInt(document.getElementById("rmed").value);
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += parseFloat(prompt("Ruido dB #" + i));
    }

    document.getElementById("a2").innerHTML = "Promedio: " + (suma / n).toFixed(2);
}

function focos() {
    let temp = parseFloat(prompt("Temperatura (0 fin):"));
    let cont = 0;

    while (temp !== 0) {
        if (temp > 45) cont++;
        temp = parseFloat(prompt("Temperatura (0 fin):"));
    }

    document.getElementById("a3").innerHTML = "Focos de calor: " + cont;
}

function residuoF() {
    let c = parseInt(document.getElementById("residuo").value);
    let r;

    switch (c) {
        case 1: r = "Orgánico"; break;
        case 2: r = "Plástico"; break;
        case 3: r = "Papel/Cartón"; break;
        case 4: r = "Vidrio"; break;
        default: r = "Código inválido";
    }

    document.getElementById("a4").innerHTML = r;
}

function rio() {
    let nivel, seguir;

    do {
        nivel = parseFloat(prompt("Nivel del río (m):"));
        if (nivel > 3) alert("⚠ ALERTA: El río supera los 3 metros");
        seguir = prompt("¿Continuar? (si/no)");
    } while (seguir.toLowerCase() === "si");

    document.getElementById("a5").innerHTML = "Monitoreo finalizado.";
}

/*AREA DE ASTRONOMIA*/

function brillo() {
    let m = parseFloat(document.getElementById("mag").value);
    let r;

    if (m < 0) r = "Extremadamente brillante";
    else if (m < 1) r = "Muy brillante";
    else if (m < 2) r = "Brillante";
    else if (m < 6) r = "Débil";
    else r = "No visible";

    document.getElementById("s1").innerHTML = r;
}

function distancias() {
    let n = parseInt(document.getElementById("planetas").value);
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += parseFloat(prompt("Distancia #" + i + " (millones km)"));
    }

    document.getElementById("s2").innerHTML = "Promedio: " + (suma / n).toFixed(2);
}

function crateres() {
    let d = parseFloat(prompt("Diámetro (0 fin):"));
    let cont = 0;

    while (d !== 0) {
        if (d > 50) cont++;
        d = parseFloat(prompt("Diámetro (0 fin):"));
    }

    document.getElementById("s3").innerHTML = "Cráteres grandes: " + cont;
}

function celeste() {
    let c = parseInt(document.getElementById("cuerpo").value);
    let r;

    switch (c) {
        case 1: r = "Estrella"; break;
        case 2: r = "Planeta"; break;
        case 3: r = "Cometa"; break;
        case 4: r = "Asteroide"; break;
        case 5: r = "Galaxia"; break;
        default: r = "Código inválido";
    }

    document.getElementById("s4").innerHTML = r;
}

function lux() {
    let valor, seguir;
    let msg = "";

    do {
        valor = parseFloat(prompt("Nivel de luz (lux):"));
        if (valor < 5) msg = "Noche profunda";
        seguir = prompt("¿Continuar? (si/no)");
    } while (seguir.toLowerCase() === "si");

    document.getElementById("s5").innerHTML = msg || "Registro finalizado";
}
