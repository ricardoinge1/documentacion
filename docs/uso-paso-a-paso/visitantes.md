---
sidebar_position: 1
---

# Visitantes

<div className="callout callout-info">
  <strong>📝 Nota</strong>

En esta página se muestran los datos referentes a los **[visitantes](../glosario/glosario.md)**

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

Este apartado evalúa la calidad
