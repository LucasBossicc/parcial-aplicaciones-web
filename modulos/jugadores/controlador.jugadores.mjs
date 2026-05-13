import * as modelo from './modelo.jugadores.mjs';

//  Endpoint REST: Obtener todos
export function obtenerTodos(req, res) {
    const datos = modelo.obtenerTodos();
    res.status(200).json({ status: "success", data: datos });
}

//  Endpoint REST: Obtener uno por ID 
export function obtenerUno(req, res) {
    const idJugador = Number(req.params.id);
    const resultado = modelo.obtenerUno(idJugador);

    if (resultado.length > 0) {
        res.status(200).json({ status: "success", data: resultado[0] });
    } else {
        // para recursos no encontrados
        res.status(404).json({ status: "error", mensaje: `Jugador con ID ${idJugador} no localizado.` });
    }
}

//  (Fuera de REST)
export function ejecutarTasacion(req, res) {
    const estadisticas = modelo.calcularEstadisticas();

    res.status(200).json({
        status: "success",
        operacion: "Tasación de Plantel Profesional",
        resultado: estadisticas
    });
}