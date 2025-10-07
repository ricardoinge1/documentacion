---
sidebar_position: 1
---

# Permisos y gestión de usuarios

:::tip
Este apartado se encuentra habilitado únicamente para los administradores o personal con el permiso correspondiente
:::

## 🚫 Permisos

Los permisos pueden ser personalizados conforme a las necesidades del usuario final, existen dos roles predeterminados en la plataforma observador y admin, cada uno con características diferentes:

:::info Observador
Este usuario únicamente puede ver los datos de la empresa a la cual se le ha asignado, los permisos predeterminados no le permiten descargar información o acceder a características como mapa de calor, únicamente puede consultar datos y ubicaciones.
:::

:::info Admin
Es el administrador de la cuenta, rol más alto en la jerarquía de Elenix, además de ver la información y descargarla, puede dar de alta usuarios, ubicaciones y empresas, así como asignar características especiales, por ejemplo, puede asignar a uno o varios observadores para que descarguen información o puedan ver el mapa de calor. Este rol se recomienda para personal de TI y directivos.
:::

## 📋 Gestión de usuarios

Este apartado se muestra en la barra lateral con el nombre “Usuarios”

<div className="doc-image-container">
  <img src={require('./img/gestion-usuarios.jpg').default} alt="Vista previa de mapa de calor" className="doc-image doc-image-large" />
</div>

En la esquina superior derecha se muestran tres opciones “Lista de usuarios”, “Agregar usuario” y “Vincular usuario”

La vista predeterminada es “Lista de usuarios” en la cual, se muestra un listado de los usuarios junto con su rol, estado y confirmación si se encuentra activo. En acciones se muestran tres iconos, los cuales tienen las siguientes características:

<div className="callout callout-info">
  <strong><img src={require('./img/reenviar-logo.jpg').default} alt="Botón Volver al mapa" style={{height: '2.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} /> Reenviar credenciales</strong>

Si un usuario desea cambiar de contraseña, no ha recibido el correo para darse de alta o desea cambiar de dispositivo en el cual tiene su aplicación de autenticación, este botón hará llegar nuevamente el correo de inicio como la primera vez.

</div>

<div className="callout callout-info">
  <strong><img src={require('./img/cambiar-rol-logo.jpg').default} alt="Botón Volver al mapa" style={{height: '2.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} /> Cambiar rol</strong>

Este botón permite cambiar la jerarquía del usuario, por ejemplo, si se dio de alta como observador y queremos asignarlo como admin o viceversa.

</div>

<div className="callout callout-info">
  <strong><img src={require('./img/desactivar-usuario-logo.jpg').default} alt="Botón Volver al mapa" style={{height: '2.5em', verticalAlign: 'middle', margin: '0 0.2em', borderRadius: '8px'}} /> Desactivar usuario</strong>

Con este botón damos de baja a los usuarios de la plataforma.

</div>

En segundo lugar, tenemos “Agregar usuario” para dar de alta un nuevo usuario, se mostrará la siguiente ventana.

<div className="doc-image-container">
  <img src={require('./img/agregar-usuario.jpg').default} alt="Vista previa de mapa de calor" className="doc-image doc-image-small" />
</div>

<div className="doc-image-container">
  <img src={require('./img/crear-usuario.jpg').default} alt="Vista previa de mapa de calor" className="doc-image doc-image-small" />
</div>

Primero, se ingresa el nombre completo del usuario a activar, después el correo electrónico que estará vinculado a la cuenta y por último el rol que se le asignará (observador o admin). Para finalizar, el botón “Crear usuario” genera el alta y envía el correo para la configuración de la cuenta.

Por último “vincular usuario” sirve para asignar un usuario a dos o más empresas

<div className="doc-image-container">
  <img src={require('./img/vincular-usuario.jpg').default} alt="Vista previa de mapa de calor" className="doc-image doc-image-small" />
</div>

:::tip Por ejemplo:
Si tenemos a Juan Pérez asignado a “Empresa 1” como su empresa predeterminada, con vincular usuario podemos asignarlo también a “Empresa 2” y “Empresa 3” de ser necesario, a cada empresa vinculada también se le asignará un rol.
:::
