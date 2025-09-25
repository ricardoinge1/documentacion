---
sidebar_position: 2
---

# Login

:::info Secure Authentication
Elenix uses two-factor authentication (2FA) to ensure maximum security for your account.
:::

<div className="hero-banner">
  <div className="hero-content">
    <h2>🔒 Login Process</h2>
    <p>Login is done through the Elenix platform, in the invitation email you will receive a temporary password that will be used to access only the first time, since when accessing you must update it. To complete your registration, the use of authentication applications such as Microsoft Authenticator or Google Authenticator is mandatory.</p>
  </div>
</div>

## 📱 Required Authentication Applications

<div className="feature-grid">
  <div className="feature-card">
    <h4>🔵 Google Authenticator</h4>
    <p>Free Google application for 2FA codes</p>
  </div>
  <div className="feature-card">
    <h4>🔶 Microsoft Authenticator</h4>
    <p>Microsoft authentication solution</p>
  </div>
</div>

<div className="doc-image-container">
  <img src={require('./img/google-authenticator.webp').default} alt="Google Authenticator" style={{ width: '300px', height: '300px' }} className="doc-image doc-image-medium" />
  <img src={require('./img/microsoft-authenticator.webp').default} alt="Microsoft Authenticator" style={{ width: '300px', height: '300px' }} className="doc-image doc-image-medium" />
</div>

## 🛠️ Step-by-Step Process

### 📧 Email Confirmation

:::info
When you receive the invitation email, click on the "confirm email" button, this button will take you to the login of the platform, enter your email and the password of the invitation.
:::

### 🔑 Password Change

:::warning
Next, it will request the password change, you must perform this step to continue advancing. You must meet the 8 password requirements to change it successfully.
:::

### 📱 Authentication Configuration

:::tip
Once the password has been updated, it will request to link through a QR code, open your authentication application and scan the code that appears on the screen.
:::

<div className="doc-image-container">
  <img src={require('./img/google-2fa.jpg').default} alt="Google 2FA" style={{ width: '300px', height: '600px' }} className="doc-image doc-image-medium" />
  <img src={require('./img/microsoft-2fa.webp').default} alt="Microsoft 2FA" style={{ width: '300px', height: '600px' }} className="doc-image doc-image-medium" />
</div>

### ✅ Elenix Access

:::note
With the new password saved you can see the home page of Elenix.
:::

### 🔒 Continuous Security

:::warning Important
As a security measure, each time you log in it will be necessary to authenticate through your application. We recommend editing the name ".." to Elenix in your authentication application to make it easier to identify when logging in.
:::

:::tip Next Step
Now that you have access, explore the [general architecture](../arquitectura-general/Diagrama.md) of the system.
:::
