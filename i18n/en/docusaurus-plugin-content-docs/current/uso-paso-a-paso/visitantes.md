---
sidebar_position: 1
---

# Visitors

<div className="callout callout-info">
  <strong>📝 Note</strong>

This page displays data related to **[visitors](../glosario/-glosario)**

</div>

<div className="hero-banner">
  <div className="hero-content">
    <h2>👥 Visitor Data</h2>
    <p>A look at who visits us: data, profiles, and statistics.</p>
  </div>
</div>

## 🪪 Information Cards

<div className="doc-image-container">
  <img src={require('./img/tarjetas-de-informacion.jpg').default} alt="Architecture Diagram" className="doc-image doc-image-large" />
</div>

These cards show the summary of activities for the selected period.

## 👁️ Visitor Flow

<div className="doc-image-container">
  <img src={require('./img/flujo-de-visitantes.jpg').default} alt="Architecture Diagram" className="doc-image doc-image-large" />
</div>

<div style={{textAlign: 'justify'}}>
This graph shows the trend of visitors during the selected period, that is, the count of people corresponding to the selected dates.
</div>

Initially, this trend is shown graphically, while the summary of the data obtained from it is in the lower boxes. The period indicates the days selected in the calendar, in this example 7 days are displayed. Total refers to the number of people counted, that is, the visitors, which in this example is a total of 11,967 people. The next box refers to the average number of people detected per day, and finally, peak refers to the largest number of people registered in a single day.

In the lower-left corner, a dynamic percentage is displayed which changes by pointing up or down. This refers to whether the percentage is trending up or down in relation to the previously selected period. That is, if we select a 7-day period, this percentage would indicate an increase or decrease compared to the previous 7 days, and so on depending on the chosen period.

## 👁️‍🗨️ Visitor Interaction

<div className="doc-image-container">
  <img src={require('./img/interaccion-de-los-visitantes.jpg').default} alt="Visitor interaction" className="doc-image doc-image-small" />
</div>

<div style={{textAlign: 'justify'}}>
The graph presents a general overview of the visitors' interaction level. It reflects key indicators that allow evaluating both the volume of visits and the quality of the time that users remain active. Its purpose is to show if there is a balance between the number of people who access and the degree of engagement they manage to maintain during their visit. In general terms, this type of analysis helps to identify if the public's attention is being captured or if, on the contrary, it is necessary to work on strategies that increase retention and improve the user experience.
</div>

## 🧾 Comparison of Interaction Level

<div className="doc-image-container">
  <img src={require('./img/comparacion-interaccion.jpg').default} alt="Comparison of interaction level" className="doc-image doc-image-large" />
</div>

<div style={{textAlign: 'justify'}}>
The graph shows the relationship between the visibility of the content and the actual level of interaction it manages to generate. It contrasts the number of people counted in the monitoring area (exposure) with those who actually show interest (impact), which allows identifying the existing gap between potential reach and real impact.
This type of visualization is useful for understanding the extent to which exposure translates into genuine attention and for evaluating the effectiveness of the communication or exhibition strategies implemented.
</div>

## 🗺️ Map

<div style={{textAlign: 'justify'}}>
This map presents the geographical distribution of the devices, showing visually in which locations they are deployed.
</div>
<div className="doc-image-container">
  <img src={require('./img/mapa.jpg').default} alt="Map of locations" className="doc-image doc-image-large" />
</div>

<div style={{textAlign: 'justify'}}>
Below the title "Viewer Locations" are the number of locations and views obtained for the registered devices.
In the case of locations with this marker <img src={require('./img/marcador-logo.png').default} alt="Single location marker" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em'}} />, they indicate that there is only one **[location](../glosario/-glosario)** at the indicated point. The map also groups device locations into markers that show a total number within a circle <img src={require('./img/circulo-logo.png').default} alt="Grouped location marker" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em'}} />. This number represents the number of devices concentrated in a specific area. As you zoom in, these markers break down into more detailed locations, allowing you to visualize the exact distribution of the devices with greater precision.
Clicking on any location will open an information window with the preliminary details of the assigned devices.
</div>
<div className="doc-image-container">
  <img src={require('./img/dispositivos-asignados.jpg').default} alt="Preliminary location detail" className="doc-image doc-image-small" />
</div>

<div style={{textAlign: 'justify'}}>
The first line of the window will show the name of the location, this name is customizable and can be assigned as the user decides, for example, it can be named "North Store" or "NS-001".
Next, it shows the number of views, these views will be shown by default for a period of 7 days. After the views, the latitude and longitude of the location are shown, and finally, we find a button called "View details". Pressing it shows the following information.
</div>

### 🔩 View Details

#### Location Details

<div className="doc-image-container">
  <img src={require('./img/detalles-ubicacion.jpg').default} alt="Location Details" className="doc-image doc-image-medium" />
</div>
<div style={{textAlign: 'justify'}}>
This card shows the latitude and longitude again, as well as the number of devices assigned to that location. For example, if we have a 3-story building, we may have one active device per level.
</div>

#### Location Map

<div className="doc-image-container">
  <img src={require('./img/mapa-ubicacion.jpg').default} alt="Location map" className="doc-image doc-image-large" />
</div>
<div style={{textAlign: 'justify'}}>
This map highlights only the marker of the selected location. To see all the locations again, you have to go back to the previous map by clicking the "Back to map" button <img src={require('./img/volver-mapa.jpg').default} alt="Back to map button" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} />.
</div>

#### Devices

<div className="doc-image-container">
  <img src={require('./img/dispositivos.jpg').default} alt="List of devices" className="doc-image doc-image-small" />
</div>
<div style={{textAlign: 'justify'}}>
Here is a list of active devices. The first line shows the name assigned to it. Assuming we have a device assigned to a specific floor, this device could be named "Floor 1" or "North Zone". All names are customizable according to the needs of the project. Below the name, an ID generated automatically by Elenix is displayed; this ID is not customizable.
We can also access additional information by pressing "View device".
</div>

### 📱 View Device

<div style={{textAlign: 'justify'}}>
This section details the location of each device with additional information such as the address where they are located.
</div>
<div className="doc-image-container">
  <img src={require('./img/ver-dispositivo.jpg').default} alt="Device detail" className="doc-image doc-image-small" />
</div>
<div style={{textAlign: 'justify'}}>
It also shows the cameras assigned to each device. For example, if we have 4 available cameras, the list and name of each one is shown here.
</div>
<div className="doc-image-container">
  <img src={require('./img/listado-camaras.jpg').default} alt="Assigned cameras" className="doc-image doc-image-large" />
</div>
<div style={{textAlign: 'justify'}}>
If we have a <mark style={{backgroundColor: '#7FFF00', padding: '0.2em 0.4em', borderRadius: '4px'}}>Pending Membership</mark> we can generate images by pressing "Generate heatmap". This tool, as its name indicates, will create a heatmap of the selected camera in the desired range.
</div>
<div className="doc-image-container">
  <img src={require('./img/camara-mapa-calor.jpg').default} alt="Generate heatmap" className="doc-image doc-image-small" />
</div>
<div style={{textAlign: 'justify'}}>
To select the desired range, we must make the selection from the calendar in the upper right corner, as in the other sections. This range will apply to all cameras equally.
</div>
<div className="doc-image-container">
  <img src={require('./img/rango-camaras.jpg').default} alt="Select calendar range" className="doc-image doc-image-medium" />
</div>
<div style={{textAlign: 'justify'}}>
Once the image is generated, a new window will open to show a preview.
</div>
<div className="doc-image-container">
  <img src={require('./img/vista-previa.jpg').default} alt="Heatmap preview" className="doc-image doc-image-large" />
</div>
<div style={{textAlign: 'justify'}}>
In the upper right corner, there is a "Clear heatmap" button <img src={require('./img/limpiar-mapa.jpg').default} alt="Clear heatmap button" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} />. Pressing it will make the generated map disappear; to recover the image, the process must be repeated. By clicking on "Download heatmap" <img src={require('./img/descargar-mapa.jpg').default} alt="Download heatmap button" style={{height: '1.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} /> a .png file will be downloaded. We can only generate images one at a time and download them individually.
</div>
