---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Pantalla de inicio

:::info Resumen
En la pantalla de inicio se muestran los datos referentes a los
espectadores (generar vínculo a glosario) obtenidos de todos
los dispositivos activos. De esta información se generan las
gráficas que se muestran a lo largo de la página.
:::

<div className="hero-banner">
  <div className="hero-content">
    <h2>🎯 Panel de Control Principal</h2>
    <p>Monitorea, analiza y controla todos tus dispositivos desde una interfaz intuitiva y moderna.</p>
  </div>
</div>
<div className="doc-image-container">
  <img src={require('./img/pantalla-de-inicio.jpg').default} alt="Pantalla de inicio" className="doc-image doc-image-large" />
</div>

## 🎨 Personalización de Interfaz

### Selector de tema

:::tip Funcionalidad
Este switch cambia el tema de la plataforma, el
tema por defecto es claro, al hacer clic cambiará a
oscuro.
:::

**Características:**

- ✅ Tema claro (por defecto)
- 🌙 Tema oscuro
- 🔄 Cambio instantáneo

  <div className="doc-image-container">
    <img src={require('./img/switch-theme.gif').default} alt="Switch theme" className="doc-image doc-image-large" />
  </div>

### Selector de Idioma:

<div className="callout callout-info">
  <strong>🌐 Multiidioma:</strong> Elenix se encuentra disponible en inglés y 
español, siendo este último el idioma por defecto, al 
hacer clic cambiará a inglés, para regresar al idioma 
original, haz clic nuevamente. El cambio de idioma 
puede realizarse tantas veces como sean necesarias.
</div>
  <div className="doc-image-container">
    <img src={require('./img/switch-text.gif').default} alt="Switch text" className="doc-image doc-image-large" />
  </div>

## 📅 Sistema de Filtrado Temporal

### Selector de Fechas

  <div className="doc-image-container">
    <img src={require('./img/calendario.jpg').default} alt="Calendario" className="doc-image doc-image-medium" />
  </div>
  <div style={{textAlign: 'justify'}}>
  El calendario ofrece la posibilidad de elegir un rango de 
fechas, mostrando únicamente los datos correspondientes
al periodo seleccionado. Esta herramienta se muestra a 
través de los diferentes apartados de la plataforma y su 
selección.
  </div>

  <div className="doc-image-container">
    <img src={require('./img/calendario-ex.jpg').default} alt="Ejemplo de calendario" className="doc-image doc-image-medium" />
  </div>
  <div style={{textAlign: 'justify'}}>
  Al hacer clic en el segundo icono se desplegará un calendario para seleccionar el primer rango deseado, por ejemplo, como se muestra en la imagen, la primer fecha es el 12 de agosto de 2025.
  </div>

  <div className="doc-image-container">
    <img src={require('./img/calendario-ex2.jpg').default} alt="Ejemplo de calendario 2" className="doc-image doc-image-medium" />
  </div>

  <div style={{textAlign: 'justify'}}>
  El tercer icono indicará la segunda fecha, esto quiere decir que el límite del análisis se encuentra en esta fecha, por ejemplo, como se indica en la imagen es el 21 de agosto de 2025. Una vez seleccionados los rangos de inicio y término, haz clic en “Aplicar” para guardar los cambios.

El botón “Rápido” permite seleccionar rangos de fecha predeterminados. Dando clic en el rango seleccionado se aplicará de forma automática. Estos rangos predeterminados siempre tomarán la fecha actual como último día, por ejemplo, si seleccionamos “1 día” y nos encontramos a 26 de agosto, es el día que mostrará en el análisis, pero si seleccionamos “7 días” el rango será del 20 de agosto al 26 de agosto, y así sucesivamente.

  </div>

  <div className="doc-image-container">
    <img src={require('./img/calendario-ex3.jpg').default} alt="Ejemplo de calendario 3" className="doc-image doc-image-medium" />
  </div>

## 📊 Panel de Métricas

### Tarjetas de Información

  <div className="doc-image-container">
    <img src={require('./img/tarjetas.jpg').default} alt="Tarjetas de información" className="doc-image doc-image-large" />
  </div>

  <div style={{textAlign: 'justify'}}>
  En este apartado encontrarás información clave y primordial sobre el análisis de imágenes obtenido, tal cual su nombre lo establece indica los datos obtenidos del análisis, estos datos son dinámicos, ya que, responden conforme a la solicitud de la fecha seleccionada.
  </div>

## 📈 Análisis Visual de Datos

### Gráfica de Espectadores Diarios

  <div className="doc-image-container">
    <img src={require('./img/grafica.jpg').default} alt="Gráfica de espectadores diarios" className="doc-image doc-image-large" />
  </div>

  <div style={{textAlign: 'justify'}}>
  Esta gráfica representa visualmente el comportamiento de los espectadores, también en el periodo seleccionado por el calendario. En el primer recuadro de la izquierda indica el periodo que se ha seleccionado, para este ejemplo de trata de un periodo de 30 días. El segundo recuadro muestra el total de espectadores que hemos tenido en ese periodo, la gráfica representa que en 30 días hemos tenido 7,212 espectadores. El tercer recuadro promedia la cantidad de espectadores por día, esto quiere decir, que divide la cantidad de espectadores en total entre el número de días del periodo (7,212/30=240.4) en caso de obtener números con decimales, se hará el redondeo correspondiente para mostrar cantidades cerradas. Por último, el cuarto recuadro muestra la cantidad máxima de espectadores que se obtuvo en un día, en este ejemplo se muestran 741, por lo tanto, podemos concluir que el día 22 de agosto tuvimos la mayor cantidad de espectadores en el periodo de 30 días, para conocer la fecha indicada, en caso de no visualizarla al inferior de la gráfica, pasar el cursor sobre la barra más alta nos dará más información.
  </div>

  <div className="doc-image-container">
    <img src={require('./img/grafica2.jpg').default} alt="Detalle de gráfica" className="doc-image doc-image-large" />
  </div>

## 🌍 Análisis Geográfico

### Principales ubicaciones

  <div className="doc-image-container">
    <img src={require('./img/principales-ubicaciones.jpg').default} alt="Principales ubicaciones" className="doc-image doc-image-large" />
  </div>

  <div style={{textAlign: 'justify'}}>
  Esta tabla muestra del mayor al menor, los 10 estados con mayor tiempo de visualización y el tiempo obtenido de cada uno, en caso de tener.
  </div>

### Mapa de calor por estado

  <div className="doc-image-container">
    <img src={require('./img/mapa-calor.jpg').default} alt="Mapa de calor por estado" className="doc-image doc-image-large" />
  </div>

<div style={{textAlign: 'justify'}}>
  Este mapa interactivo muestra por intensidad de color la 
información obtenida de los espectadores, es decir, el o 
los estados con menor cantidad de espectadores se 
mostrará con un color claro, mientras que los estados con
más espectadores se mostrarán en un color intenso.
Cada estado mostrará el resumen de su actividad dando 
clic directamente sobre el mismo. Una vez dentro de la 
información por estado se mostrará la siguiente 
información:
  </div>

### Resumen de información

  <div className="doc-image-container">
    <img src={require('./img/resumen-informacion.jpg').default} alt="Resumen de información" className="doc-image doc-image-large" />
  </div>

Tal como en la página de inicio, estas tarjetas
muestran un resumen de información relevante
con respecto al comportamiento de los
espectadores y visitantes en todo el estado.

### Espectadores por municipio

  <div className="doc-image-container">
    <img src={require('./img/espectadores-por-municipio.jpg').default} alt="Espectadores por municipio" className="doc-image doc-image-medium" />
  </div>

Esta gráfica de barras muestra la cantidad de
personas que han observado el contenido en
todas las locaciones del estado.

### Distribución

  <div className="doc-image-container">
    <img src={require('./img/distribucion.jpg').default} alt="Distribución" className="doc-image doc-image-small" />
  </div>

Esta gráfica muestra el porcentaje
correspondiente a los espectadores por
municipio, por ejemplo, si tenemos 3 municipios
en el mismo estado mostrará con porcentajes la
distribución de los espectadores en cada uno de
ellos.

### Detalles de ubicación

:::tip Navegación Interactiva
Haz clic en cualquier estado del mapa para acceder a su información detallada y estadísticas específicas.
:::

En este apartado se mostrarán todas las
locaciones correspondientes al estado
seleccionado en el mapa, incluyendo:

- **Ubicaciones activas** por municipio
- **Dispositivos conectados** en tiempo real
- **Estadísticas de rendimiento** por zona
- **Historial de actividad** por ubicación

### Buscar y filtrar ubicaciones

  <div className="doc-image-container">
    <img src={require('./img/buscar-filtrar-ubicaciones.jpg').default} alt="Buscar y filtrar ubicaciones" className="doc-image doc-image-large" />
  </div>

Este buscador muestra la cantidad de
ubicaciones y dispositivos activos en el
estado, también permite buscar por dirección
la locación deseada con un máximo de 100
caracteres.

### Detalles de ubicaciones

  <div className="doc-image-container">
    <img src={require('./img/detalles-de-ubicacion.jpg').default} alt="Detalles de ubicaciones" className="doc-image doc-image-large" />
  </div>

En esta tabla se muestran los detalles de cada
ubicación, así como la cantidad de dispositivos
asignados a cada una de ellas. Al hacer una búsqueda
en el apartado superior "Buscar y filtrar ubicaciones"
el resultado se mostrará en esta tabla.
Si cuentas con el analítico de mapa de calor, este se puede visualizar desde este apartado.

  <div className="doc-image-container">
    <img src={require('./img/analitico-mapa-calor.jpg').default} alt="Botón view" className="doc-image doc-image-large" />
  </div>

El botón "view" te llevará directamente a los
dispositivos aptos para extraer esta información.

:::warning Importante
Para acceder al mapa de calor detallado, asegúrate de tener los permisos necesarios y que el dispositivo tenga esta funcionalidad habilitada.
:::

## ⏰ Análisis Temporal

### Horas pico de visualización

:::note Información Clave
Esta gráfica muestra por hora cuál es la afluencia más
alta de visitantes.
:::

  <div className="doc-image-container">
    <img src={require('./img/horas-pico.jpg').default} alt="Horas pico de visualización" className="doc-image doc-image-large" />
  </div>
 <div className="doc-image-container">
    <img src={require('./img/horas-pico-visualizacion2.jpg').default} alt="Horas pico de visualización" className="doc-image doc-image-large" />
  </div>
<div style={{textAlign: 'justify'}}>
Poniendo el cursor sobre la barra del día deseado
mostrará más información, por ejemplo, el día que se
muestra en el ejemplo (29 de agosto) corresponde a la
mayor afluencia del periodo seleccionado, de este día de
máxima afluencia se muestra la información en las
tarjetas inferiores a la gráfica. De izquierda a derecha se
muestra primero el total de espectadores (del periodo
seleccionado), en este caso son 7 días, enseguida se
muestra la hora pico, esta se refiere a la hora en la que
hubo mayor afluencia en el día más visualizado por los
espectadores, después muestra la mayor cantidad de
espectadores que hubo en el momento con mayor
afluencia, y por último “puntos de datos” se refiere a la
cantidad de días seleccionados, estos días corresponden
al periodo elegido en el calendario, para este ejemplo, el
calendario se ve de la siguiente manera:
</div>

<div className="doc-image-container">
    <img src={require('./img/calendario.jpg').default} alt="Horas pico de visualización" className="doc-image doc-image-large" />
  </div>

## 📋 Resumen de Funcionalidades

<div className="feature-grid">
  <div className="feature-card">
    <h4>🎨 Personalización</h4>
    <p>Cambia entre temas claro y oscuro, y selecciona tu idioma preferido (Español/Inglés).</p>
  </div>
  <div className="feature-card">
    <h4>📅 Filtrado Temporal</h4>
    <p>Selecciona rangos de fechas personalizados o utiliza filtros rápidos predefinidos para análisis específicos.</p>
  </div>
  <div className="feature-card">
    <h4>📊 Métricas Dinámicas</h4>
    <p>Tarjetas informativas que se actualizan según el período seleccionado y gráficas interactivas de espectadores.</p>
  </div>
  <div className="feature-card">
    <h4>🗺️ Mapas Interactivos</h4>
    <p>Mapa de calor por estados con navegación por clic y análisis detallado por ubicación.</p>
  </div>
  <div className="feature-card">
    <h4>📍 Gestión de Ubicaciones</h4>
    <p>Búsqueda y filtrado de ubicaciones con detalles de dispositivos y acceso al mapa de calor.</p>
  </div>
  <div className="feature-card">
    <h4>📈 Análisis por Municipio</h4>
    <p>Gráficas de barras y distribución porcentual de espectadores por municipio dentro de cada estado.</p>
  </div>
  <div className="feature-card">
    <h4>⏰ Patrones Temporales</h4>
    <p>Identificación de horas pico y análisis de comportamiento de espectadores por períodos específicos.</p>
  </div>
  <div className="feature-card">
    <h4>🔍 Navegación Intuitiva</h4>
    <p>Interfaz interactiva con tooltips informativos y acceso directo a dispositivos desde la tabla de ubicaciones.</p>
  </div>
</div>

:::tip Próximos Pasos
¿Listo para explorar más funciones? Continúa explorando las demás secciones de la documentación.
:::
