---
sidebar_position: 1
---

# Visitantes

<div className="callout callout-info">
  <strong>📝 Nota</strong>

En esta página se muestran los datos referentes a los **[visitantes](../glosario/-glosario)**

</div>

<div className="hero-banner">
  <div className="hero-content">
    <h2>👥 Datos de visitantes</h2>
    <p>Un vistazo a quiénes nos visitan: datos, perfiles y estadísticas.</p>
  </div>
</div>

## 🪪 Tarjetas de información

<div className="doc-image-container">
  <img src={require('./img/tarjetas-de-informacion.jpg').default} alt="Diagrama de Arquitectura" className="doc-image doc-image-large" />
</div>

Estas tarjetas muestran el resumen de actividades correspondiente al periodo seleccionado.

## 👁️ Flujo de visitantes

<div className="doc-image-container">
  <img src={require('./img/flujo-de-visitantes.jpg').default} alt="Diagrama de Arquitectura" className="doc-image doc-image-large" />
</div>

<div style={{textAlign: 'justify'}}>
Esta gráfica muestra la tendencia de los visitantes durante el periodo seleccionado, es decir, el conteo de personas correspondiente a las fechas seleccionadas.
</div>

Inicialmente se muestra gráficamente esta tendencia, mientras que en los recuadros inferiores se encuentra el resumen de los datos obtenidos de la misma. El periodo indica los días seleccionados en el calendario, en este ejemplo se visualizan 7 días, Total se refiere a la cantidad de personas contadas, es decir, los visitantes que en este ejemplo da un total de 11,967 personas, el recuadro siguiente se refiere al promedio de personas por día que se han detectado y por último en pico se refiere a la mayor cantidad de personas registradas en un solo día.

En la esquina inferior izquierda se muestra un porcentaje dinámico el cual cambia apuntando hacia arriba o hacia abajo, esto se refiere a que el por puede ir al alza o a la baja con relación al periodo anterior seleccionado, es decir, si seleccionamos un periodo de 7 días, este porcentaje indicaría un incremento o decremento con respecto a los 7 días anteriores y así sucesivamente dependiendo del periodo elegido.

## 👁️‍🗨️ Interacción de los visitantes

<div className="doc-image-container">
  <img src={require('./img/interaccion-de-los-visitantes.jpg').default} alt="Diagrama de Arquitectura" className="doc-image doc-image-small" />
</div>

<div style={{textAlign: 'justify'}}>
La gráfica presenta un panorama general sobre el nivel de interacción de los visitantes. En ella se reflejan indicadores clave que permiten evaluar tanto el volumen de visitas como la calidad del tiempo que los usuarios permanecen activos. Su propósito es mostrar si existe un equilibrio entre la cantidad de personas que acceden y el grado de compromiso que logran mantener durante su visita. En términos generales, este tipo de análisis ayuda a identificar si se está logrando captar la atención del público o si, por el contrario, se requiere trabajar en estrategias que incrementen la retención y mejoren la experiencia del usuario.
</div>

## 🧾 Comparación del nivel de interacción

<div className="doc-image-container">
  <img src={require('./img/comparacion-interaccion.jpg').default} alt="Comparación del nivel de interacción" className="doc-image doc-image-large" />
</div>

<div style={{textAlign: 'justify'}}>
La gráfica muestra la relación entre la visibilidad que tiene el contenido y el nivel real de interacción que logra generar. Se contrasta la cantidad de personas contadas en la zona de monitoreo (exposición) con aquellas que efectivamente muestran interés (impacto), lo que permite identificar la brecha existente entre alcance potencial e impacto real. 
Este tipo de visualización es útil para comprender hasta qué punto la exposición se traduce en atención genuina y para evaluar la efectividad de las estrategias de comunicación o de exhibición implementadas.
</div>

## 🗺️ Mapa

<div style={{textAlign: 'justify'}}>
Este mapa presenta la distribución geográfica de los dispositivos, mostrando de manera visual en qué ubicaciones se encuentran desplegados. 
</div>
<div className="doc-image-container">
  <img src={require('./img/mapa.jpg').default} alt="Mapa de ubicaciones" className="doc-image doc-image-large" />
</div>

<div style={{textAlign: 'justify'}}>
Debajo del título “Ubicaciones de Espectadores” se muestran la cantidad de ubicaciones y vistas obtenidas para los dispositivos registrados. 
En el caso de las ubicaciones con este marcador <img src={require('./img/marcador-logo.png').default} alt="Marcador de ubicación única" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em'}} /> indican que sólo existe una **[locación](../glosario/-glosario)** en el punto señalado. El mapa también agrupa las ubicaciones de los dispositivos en marcadores que muestran un número total dentro de un círculo <img src={require('./img/circulo-logo.png').default} alt="Marcador de ubicación única" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em'}} />. Este número representa la cantidad de dispositivos concentrados en un área específica. A medida que se acerca la vista, estos marcadores se desglosan en ubicaciones más detalladas, permitiendo visualizar con mayor precisión la distribución exacta de los dispositivos.
Al hacer clic en cualquier ubicación abrirá una ventana informativa con los detalles preliminares de los dispositivos asignados.
</div>
<div className="doc-image-container">
  <img src={require('./img/dispositivos-asignados.jpg').default} alt="Detalle preliminar de ubicación" className="doc-image doc-image-small" />
</div>

<div style={{textAlign: 'justify'}}>
La primer línea de la ventana mostrará el nombre de la ubicación, este nombre es personalizado y puede asignarse como el usuario lo decida, por ejemplo, puede nombrarse como “Tienda norte” o “TN-001”. 
A continuación, muestra la cantidad de vistas, estas vistas se mostrarán por defecto de un periodo de 7 días. Después de las vistas se muestra la latitud y longitud de la ubicación y por último, encontramos un botón llamado “Ver detalles” al presionarlo muestra la siguiente información.
</div>

### 🔩 Ver detalles

#### Detalles de Ubicación

<div className="doc-image-container">
  <img src={require('./img/detalles-ubicacion.jpg').default} alt="Detalles de Ubicación" className="doc-image doc-image-medium" />
</div>
<div style={{textAlign: 'justify'}}>
En esta tarjeta se muestra nuevamente la latitud y longitud, así como la cantidad de dispositivos asignados a dicha ubicación, por ejemplo, si tenemos un recinto de 3 pisos puede ser que tengamos activo un dispositivo por nivel.
</div>

#### Mapa de ubicación

<div className="doc-image-container">
  <img src={require('./img/mapa-ubicacion.jpg').default} alt="Mapa de ubicación" className="doc-image doc-image-large" />
</div>
<div style={{textAlign: 'justify'}}>
En este mapa se resalta únicamente el marcador de la ubicación seleccionada, para ver todas las ubicaciones nuevamente hay que regresar al mapa anterior haciendo clic en el botón “Volver al mapa” <img src={require('./img/volver-mapa.jpg').default} alt="Botón Volver al mapa" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} />.      
</div>

#### Dispositivos

<div className="doc-image-container">
  <img src={require('./img/dispositivos.jpg').default} alt="Listado de dispositivos" className="doc-image doc-image-small" />
</div>
<div style={{textAlign: 'justify'}}>
Aquí se muestra un listado de los dispositivos activos, el primer renglón muestra el nombre asignado al mismo, suponiendo que tengamos un dispositivo asignado a un piso en específico, este dispositivo podría nombrarse “Piso 1” o “Zona norte”, todos los nombres son personalizables conforme a las necesidades del proyecto. Debajo del nombre se muestra un id generado de manera automática por Elenix, este id no es personalizable. 
También podremos acceder a información adicional al presionar “Ver dispositivo” 
</div>

### 📱 Ver dispositivo

<div style={{textAlign: 'justify'}}>
En esta sección se detalla la ubicación de cada dispositivo con información adicional como la dirección en el que se encuentran
</div>
<div className="doc-image-container">
  <img src={require('./img/ver-dispositivo.jpg').default} alt="Detalle de dispositivo" className="doc-image doc-image-small" />
</div>
<div style={{textAlign: 'justify'}}>
También se muestran las cámaras asignadas a cada dispositivo, por ejemplo, si tenemos 4 cámaras disponibles aquí se muestra el listado y nombre de cada una 
</div>
<div className="doc-image-container">
  <img src={require('./img/listado-camaras.jpg').default} alt="Cámaras asignadas" className="doc-image doc-image-large" />
</div>
<div style={{textAlign: 'justify'}}>
Si contamos con <mark style={{backgroundColor: '#7FFF00', padding: '0.2em 0.4em', borderRadius: '4px'}}>Membresía pendiente</mark> podemos generar imágenes al presionar “Generar mapa de calor”, esta herramienta como su nombre lo indica creará un mapa de calor de la cámara seleccionada en el rango deseado.
</div>
<div className="doc-image-container">
  <img src={require('./img/camara-mapa-calor.jpg').default} alt="Generar mapa de calor" className="doc-image doc-image-small" />
</div>
<div style={{textAlign: 'justify'}}>
Para seleccionar el rango deseado debemos hacer la selección desde el calendario en la esquina superior derecha, como en los otros apartados. Este rango aplicará para todas las cámaras por igual.
</div>
<div className="doc-image-container">
  <img src={require('./img/rango-camaras.jpg').default} alt="Seleccionar rango de calendario" className="doc-image doc-image-medium" />
</div>
<div style={{textAlign: 'justify'}}>
Una vez generada la imagen se abrirá una ventana nueva para mostrar una vista previa.
</div>
<div className="doc-image-container">
  <img src={require('./img/vista-previa.jpg').default} alt="Vista previa de mapa de calor" className="doc-image doc-image-large" />
</div>
<div style={{textAlign: 'justify'}}>
En la esquina superior derecha se muestra un botón “Limpiar mapa de calor” <img src={require('./img/limpiar-mapa.jpg').default} alt="Botón Volver al mapa" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} /> al presionarlo desaparecerá el mapa generado, para recuperar la imagen se debe repetir el proceso. Al hacer clic en “Descargar mapa de calor” <img src={require('./img/descargar-mapa.jpg').default} alt="Botón Volver al mapa" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} /> se descargará un archivo en .png. Sólo podemos generar imágenes una a la vez y descargarlas de manera individual.
</div>
