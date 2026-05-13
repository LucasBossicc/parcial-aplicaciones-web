export function auditoriaPeticion(req, res, next) {

    // Instanciación y formateo de marca de tiempo (Timestamp) con localización regional 
    // Se fuerza la zona horaria 'America/Argentina/Cordoba' para garantizar precisión en los logs locales.
    const timestamp = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Cordoba' });

    // Registro de eventos (Logging) en la salida estándar (stdout).
    // Se realiza una interpolación de cadenas para capturar el Verbo HTTP (req.method) y el Endpoint (req.url).
    console.log(`[AUDITORIA] Petición ${req.method} en ruta: ${req.url} - Fecha: ${timestamp}`);
    res.setHeader('X-Procesado-Por', 'Servidor-Lucas-IES21');
    // Transferencia del control de ejecución. 
    // Es vital para no bloquear el ciclo de vida de la petición (Request-Response Cycle).
    next();
}