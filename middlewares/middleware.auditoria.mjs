/**
 * Middleware de aplicación de desarrollo propio.
 * Realiza la captura de metadatos de la petición (Auditoría) antes de procesar el recurso.
 */
export function auditoriaPeticion(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`[AUDITORIA] Petición ${req.method} en ruta: ${req.url} - Fecha: ${timestamp}`);

    // Inyectamos un encabezado personalizado para demostrar el procesamiento del middleware
    res.setHeader('X-Procesado-Por', 'Servidor-Lucas-IES21');

    next(); // Cede el control al siguiente middleware o controlador
}