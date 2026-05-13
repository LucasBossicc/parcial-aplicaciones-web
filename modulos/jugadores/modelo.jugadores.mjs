import plantel from "../../jugadores.mjs";

export function obtenerTodos() {
    return plantel.datos;
}

export function obtenerUno(id) {
    return plantel.datos.filter((jugador) => Number(jugador.id) === id);
}

//  Procedimiento fuera de REST
// Utilice el método .reduce() para recorrer a todos los jugadores y sumar el contenido de su propiedad valorMercado
// acc es el acumulador que guarda la suma parcial
// j --> valor actual procesando
export function calcularEstadisticas() {
    const totalJugadores = plantel.datos.length;
    const inversionTotal = plantel.datos.reduce((acc, j) => acc + j.valorMercado, 0);

    return {
        cantidadIntegrantes: totalJugadores,
        valorTotalPlantel: inversionTotal,
        promedioValor: inversionTotal / totalJugadores
    };
}