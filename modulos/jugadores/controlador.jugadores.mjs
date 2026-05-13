import * as modelo from './modelo.jugadores.mjs';

/**
 * Capa de control. Gestiona la lógica de las peticiones y define las respuestas HTTP.
 */

// 1. Endpoint REST: Obtener todos
export function obtenerTodos(req, res) {
    const datos = modelo.obtenerTodos();
    res.status(200).json({ status: "success", data: datos });
}

// 1. Endpoint REST: Obtener uno por ID (Ruta con parámetro)
export function obtenerUno(req, res) {
    const idJugador = Number(req.params.id);
    const resultado = modelo.obtenerUno(idJugador);

    if (resultado.length > 0) {
        res.status(200).json({ status: "success", data: resultado[0] });
    } else {
        // Tratamiento de errores para recursos no encontrados
        res.status(404).json({ status: "error", mensaje: `Jugador con ID ${idJugador} no localizado.` });
    }
}

// 2. Implementación de un procedimiento (Fuera de REST)
export function ejecutarTasacion(req, res) {
    const estadisticas = modelo.calcularEstadisticas();

    // La respuesta sigue el formato de la API REST pero la ruta es procedimental
    res.status(200).json({
        status: "success",
        operacion: "Tasación de Plantel Profesional",
        resultado: estadisticas
    });
}