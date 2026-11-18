
let volverAJugar = true;

while (volverAJugar) {

    // 1. Pedirle al usuario que elija
    let usuario = prompt("Elegí: Piedra, Papel o Tijera").toLowerCase();

    // 2. Elegir una opción al azar
    let numero = Math.floor(Math.random() * 3);

    let computadora;

    if (numero == 0) {
        computadora = "piedra";
    } else if (numero == 1) {
        computadora = "papel";
    } else {
        computadora = "tijera";
    }

    // 3. Mostrar las elecciones
    alert("Vos elegiste: " + usuario + "\nLa computadora eligió: " + computadora);

    // 4. Determinar quién ganó
    if (usuario == computadora) {
        alert("¡Empate!");
    } else if (
        (usuario == "piedra" && computadora == "tijera") ||
        (usuario == "papel" && computadora == "piedra") ||
        (usuario == "tijera" && computadora == "papel")
    ) {
        alert("¡Ganaste!");
    } else if (
        usuario == "piedra" ||
        usuario == "papel" ||
        usuario == "tijera"
    ) {
        alert("¡Ganó la computadora!");
    } else {
        alert("Opción incorrecta. Tenés que elegir Piedra, Papel o Tijera.");
    }

    // 5. Preguntar si quiere volver a jugar
    volverAJugar = confirm("¿Querés volver a jugar?");
}
