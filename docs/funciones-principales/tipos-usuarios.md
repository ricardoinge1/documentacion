---
sidebar_position: 3
---

# Tipos de Usuarios

:::info Sistema de Roles
Elenix cuenta con un sistema de roles jerárquico que permite controlar el acceso y las funcionalidades según el tipo de usuario.
:::

<div className="hero-banner">
  <div className="hero-content">
    <h2>👥 Gestión de Usuarios y Permisos</h2>
    <p>Sistema de roles diseñado para garantizar seguridad y control de acceso apropiado según las responsabilidades de cada usuario.</p>
  </div>
</div>

## 🔐 Roles Disponibles

### 👑 Administrador

<div className="callout callout-info">
  <strong>🎯 Acceso Completo:</strong> Control total sobre la plataforma, usuarios y configuraciones del sistema.
</div>

**Permisos y Funcionalidades:**

- ✅ **Gestión de usuarios:** Crear, editar y eliminar cuentas
- ✅ **Configuración del sistema:** Modificar parámetros globales
- ✅ **Acceso a todos los datos:** Visualización completa de métricas y reportes
- ✅ **Gestión de dispositivos:** Agregar, configurar y eliminar dispositivos
- ✅ **Exportación de datos:** Descargar reportes y análisis
- ✅ **Configuración de alertas:** Establecer notificaciones y umbrales
- ✅ **Auditoría del sistema:** Acceso a logs y registros de actividad

:::note Responsabilidades
El administrador es responsable de la configuración inicial del sistema y la gestión de usuarios.
:::

### ⚙️ Operador

<div className="callout callout-warning">
  <strong>🔧 Acceso Operativo:</strong> Permisos para operar y monitorear el sistema sin modificar configuraciones críticas.
</div>

**Permisos y Funcionalidades:**

- ✅ **Monitoreo en tiempo real:** Visualización de datos actuales
- ✅ **Gestión de dispositivos básica:** Reiniciar y configurar parámetros básicos
- ✅ **Generación de reportes:** Crear y exportar análisis estándar
- ✅ **Configuración de alertas básicas:** Establecer notificaciones personales
- ❌ **Gestión de usuarios:** No puede crear o eliminar cuentas
- ❌ **Configuración del sistema:** Sin acceso a parámetros críticos
- ❌ **Auditoría completa:** Acceso limitado a logs del sistema

:::tip Uso Recomendado
Ideal para personal técnico que necesita operar el sistema diariamente sin riesgo de modificar configuraciones críticas.
:::

### 👁️ Solo Visualización

<div className="callout callout-tip">
  <strong>📊 Acceso de Consulta:</strong> Permisos únicamente para visualizar datos y reportes sin capacidad de modificación.
</div>

**Permisos y Funcionalidades:**

- ✅ **Visualización de dashboards:** Acceso a todas las métricas y gráficas
- ✅ **Consulta de reportes:** Ver análisis históricos y en tiempo real
- ✅ **Filtrado de datos:** Usar calendarios y filtros para análisis específicos
- ✅ **Exportación básica:** Descargar reportes en formatos estándar
- ❌ **Modificación de configuraciones:** Sin permisos de edición
- ❌ **Gestión de dispositivos:** No puede modificar parámetros
- ❌ **Creación de alertas:** Sin capacidad de configurar notificaciones
- ❌ **Acceso administrativo:** Sin permisos de gestión

:::note Casos de Uso
Perfecto para directivos, analistas o personal que necesita consultar información sin riesgo de modificar el sistema.
:::

## 🔄 Gestión de Roles

### Asignación de Permisos

<div className="feature-grid">
  <div className="feature-card">
    <h4>🎯 Principio de Menor Privilegio</h4>
    <p>Cada usuario recibe únicamente los permisos necesarios para sus funciones específicas.</p>
  </div>
  <div className="feature-card">
    <h4>🔒 Seguridad por Capas</h4>
    <p>Sistema jerárquico que previene accesos no autorizados a funciones críticas.</p>
  </div>
  <div className="feature-card">
    <h4>📋 Auditoría Completa</h4>
    <p>Registro detallado de todas las acciones realizadas por cada tipo de usuario.</p>
  </div>
  <div className="feature-card">
    <h4>⚡ Cambios Dinámicos</h4>
    <p>Los administradores pueden modificar roles y permisos en tiempo real.</p>
  </div>
</div>

## 📊 Matriz de Permisos

| Funcionalidad | Administrador | Operador | Solo Visualización |
|---------------|:-------------:|:--------:|:------------------:|
| Ver dashboards | ✅ | ✅ | ✅ |
| Exportar reportes | ✅ | ✅ | ✅ |
| Configurar dispositivos | ✅ | ⚠️ Básico | ❌ |
| Gestionar usuarios | ✅ | ❌ | ❌ |
| Configurar sistema | ✅ | ❌ | ❌ |
| Crear alertas | ✅ | ⚠️ Básico | ❌ |
| Acceder a logs | ✅ | ⚠️ Limitado | ❌ |

:::warning Importante
Los cambios de rol requieren reiniciar sesión para que los nuevos permisos tomen efecto.
:::

---

## 🚀 Mejores Prácticas

<div className="callout callout-info">
  <strong>💡 Recomendaciones:</strong>
  <ul>
    <li>Asigna roles según las responsabilidades reales del usuario</li>
    <li>Revisa periódicamente los permisos asignados</li>
    <li>Utiliza cuentas de "Solo Visualización" para stakeholders externos</li>
    <li>Mantén un número mínimo de administradores</li>
  </ul>
</div>

:::tip Siguiente Paso
Ahora que conoces los tipos de usuario, explora la [barra lateral](./barra-lateral.md) para navegar eficientemente por la plataforma.
:::
