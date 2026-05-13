import express from 'express';
import * as controlador from './modulos/jugadores/controlador.jugadores.mjs';
import { auditoriaPeticion } from './middlewares/middleware.auditoria.mjs';

const app = express();
const PUERTO = 3000;

// Configuración de middlewares globales
app.use(express.json());
app.use(auditoriaPeticion); // Aplicación del middleware propio 


// Rutas API REST (Entidades)
app.get('/api/v1/jugadores', controlador.obtenerTodos);
app.get('/api/v1/jugadores/:id', controlador.obtenerUno);

// Ruta orientada a PROCEDIMIENTOS (Acción lógica sobre los datos)
// No respeta los principios REST porque invoca un proceso de cálculo ("tasacion")
app.get('/api/v1/acciones/tasacion-plantel', controlador.ejecutarTasacion);

app.listen(PUERTO, () => {
    console.log(`Servidor de aplicaciones iniciado en puerto ${PUERTO}`);
});