---
sidebar_position: 4
---

# Registros

:::info ¿Qué son los Registros?
También conocidos como "logs", son un historial cronológico de todos los eventos y acciones que ocurren en la plataforma. Sirven como una herramienta crucial para la auditoría, seguridad y diagnóstico técnico.
:::

<div className="hero-banner">
  <div className="hero-content">
    <h2>⚙️ Registros del Sistema</h2>
    <p>Un registro detallado de la actividad para fines de auditoría y diagnóstico.</p>
  </div>
</div>

## 📝 Propósito y Tipos de Registros

Los registros son fundamentales para la operatividad y seguridad de la plataforma. Se capturan diferentes tipos de eventos para cubrir distintos propósitos:

- **Registros de Acceso:** Documentan los intentos de inicio de sesión (exitosos y fallidos), cierres de sesión y la dirección IP desde la que se realiza la conexión. Son vitales para detectar intentos de acceso no autorizados.
- **Registros de Auditoría (Changes):** Guardan un historial de las acciones importantes realizadas por los usuarios, como la creación, modificación o eliminación de datos críticos (por ejemplo, cambiar un permiso, añadir un usuario, etc.). Responden a la pregunta: "¿Quién hizo qué y cuándo?".
- **Registros de Errores:** Capturan cualquier fallo o comportamiento inesperado de la aplicación. Son la herramienta principal para que el equipo técnico pueda diagnosticar y solucionar problemas rápidamente.

## 🗳️ Acceso y Sensibilidad de la Información

El acceso a esta información está rigurosamente controlado debido a la naturaleza sensible de los datos que contiene.

> Los registros sirven para documentar las actividades que ocurren dentro de la página, como accesos, errores o cambios realizados. Su propósito es brindar un historial que facilite la supervisión, el diagnóstico de fallos, la seguridad y la toma de decisiones técnicas. Debido a su alta sensibilidad la visibilidad de esta información está sujeta a previa autorización de los administradores y no está predeterminada para ningún rol.

:::warning Acceso Estrictamente Controlado
El acceso a los registros no es una funcionalidad estándar. Se concede únicamente caso por caso, con una justificación válida y tras la aprobación explícita de la administración de Elenix. Ningún rol de usuario tiene acceso a esta vista por defecto.
:::

<div className="doc-image-container">
  <img src={require('./img/registro-consultas.jpg').default} alt="Vista previa de mapa de calor" className="doc-image doc-image-large" />
</div>
En este apartado se muestra un listado de las actividades que se llevan a cabo en la plataforma.

### Proceso para Solicitar Acceso

Si por motivos de auditoría o para la investigación de un incidente necesita acceder a los registros, debe seguir el siguiente proceso:

1.  **Identificar la Necesidad:** Tenga claro qué información necesita consultar, el período de tiempo (fechas y horas) y el motivo de la solicitud.
2.  **Realizar la Solicitud Formal:** Póngase en contacto con el equipo de soporte de Elenix o su administrador de cuenta designado.
3.  **Proporcionar Justificación:** Deberá explicar detalladamente el motivo de su solicitud. Por ejemplo: "Necesitamos revisar los logs de acceso del usuario `ejemplo@empresa.com` entre el día 10 y 11 de mayo para investigar una posible actividad anómala".
4.  **Revisión y Entrega:** El equipo de Elenix evaluará la solicitud. Si es aprobada, se le proporcionará un extracto de los registros solicitados de forma segura. No se concede acceso directo a la herramienta de logs.
