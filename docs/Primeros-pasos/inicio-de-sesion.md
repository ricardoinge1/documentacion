---
sidebar_position: 2
---

# Inicio de Sesión

:::info Autenticación Segura
Elenix utiliza autenticación de dos factores (2FA) para garantizar la máxima seguridad de tu cuenta.
:::

<div className="hero-banner">
  <div className="hero-content">
    <h2>🔒 Proceso de Inicio de Sesión</h2>
    <p>El inicio de sesión se realiza a través de la plataforma de Elenix, en el correo de invitación recibirás una contraseña temporal que servirá para acceder sólo la primera vez, ya que al acceder deberás actualizarla. Para completar tu registro es obligatorio el uso de aplicaciones de autenticación como Microsoft Authenticator o Google Authenticator.</p>
  </div>
</div>

## 📱 Aplicaciones de Autenticación Requeridas

<div className="feature-grid">
  <div className="feature-card">
    <h4>🔵 Google Authenticator</h4>
    <p>Aplicación gratuita de Google para códigos 2FA</p>
  </div>
  <div className="feature-card">
    <h4>🔶 Microsoft Authenticator</h4>
    <p>Solución de autenticación de Microsoft</p>
  </div>
</div>

<div className="doc-image-container">
  <img src={require('./img/google-authenticator.webp').default} alt="Google Authenticator" style={{ width: '300px', height: '300px' }} className="doc-image doc-image-medium" />
  <img src={require('./img/microsoft-authenticator.webp').default} alt="Microsoft Authenticator" style={{ width: '300px', height: '300px' }} className="doc-image doc-image-medium" />
</div>

## 🛠️ Proceso Paso a Paso

### 📧 Confirmación de Correo

:::info
Al recibir el correo de invitación, da clic al botón "confirmar correo", este botón te llevará al inicio de sesión de la plataforma, ingresa tu correo y la contraseña de la invitación.
:::

### 🔑 Cambio de Contraseña

:::warning
A continuación, solicitará el cambio de contraseña, deberás realizar este paso para seguir avanzando. Deberás cumplir los 8 requisitos de la contraseña para cambiarla exitosamente.
:::

### 📱 Configuración de Autenticación

:::tip
Una vez actualizada la contraseña, solicitará enlazarse por medio de un código QR, abre tu aplicación de autenticación y escanea el código que aparece en la pantalla.
:::

<div className="doc-image-container">
  <img src={require('./img/google-2fa.jpg').default} alt="Google 2FA" style={{ width: '300px', height: '600px' }} className="doc-image doc-image-medium" />
  <img src={require('./img/microsoft-2fa.webp').default} alt="Microsoft 2FA" style={{ width: '300px', height: '600px' }} className="doc-image doc-image-medium" />
</div>

### ✅ Acceso a Elenix

:::note
Con la nueva contraseña guardada podrás ver la página de inicio de Elenix.
:::

### 🔒 Seguridad Continua

:::warning Importante
Como medida de seguridad, cada que inicies sesión será necesario autenticar a través de tu aplicación. Recomendamos editar en tu aplicación de autenticación el nombre de ".." a Elenix para que sea más fácil identificarla al iniciar sesión.
:::

:::tip Siguiente Paso
Ahora que tienes acceso, explora la [arquitectura general](../arquitectura-general/Diagrama.md) del sistema.
:::
