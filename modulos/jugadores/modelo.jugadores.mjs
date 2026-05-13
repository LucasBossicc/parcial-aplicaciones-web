import plantel from "../../jugadores.mjs";

/**
 * Capa de abstracción de datos (Modelo).
 * Encargada de la interacción con la persistencia de datos del plantel.
 */

export function obtenerTodos() {
    return plantel.datos;
}

export function obtenerUno(id) {
    return plantel.datos.filter((jugador) => Number(jugador.id) === id);
}

// Lógica para el punto 2: Procedimiento fuera de REST
export function calcularEstadisticas() {
    const totalJugadores = plantel.datos.length;
    const inversionTotal = plantel.datos.reduce((acc, j) => acc + j.valorMercado, 0);

    return {
        cantidadIntegrantes: totalJugadores,
        valorTotalPlantel: inversionTotal,
        promedioValor: inversionTotal / totalJugadores
    };
}