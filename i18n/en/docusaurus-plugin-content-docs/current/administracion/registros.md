---
sidebar_position: 4
---

# Logs

:::info What are Logs?
Logs are a chronological history of all events and actions that occur on the platform. They serve as a crucial tool for auditing, security, and technical diagnostics.
:::

<div className="hero-banner">
  <div className="hero-content">
    <h2>⚙️ System Logs</h2>
    <p>A detailed record of activity for auditing and diagnostic purposes.</p>
  </div>
</div>

## 📝 Purpose and Types of Logs

Logs are fundamental to the platform's operation and security. Different types of events are captured to serve various purposes:

- **Access Logs:** These document login attempts (successful and failed), logouts, and the IP address from which the connection is made. They are vital for detecting unauthorized access attempts.
- **Audit Logs (Changes):** These keep a history of important actions taken by users, such as the creation, modification, or deletion of critical data (e.g., changing a permission, adding a user, etc.). They answer the question: "Who did what, and when?".
- **Error Logs:** These capture any failures or unexpected application behavior. They are the primary tool for the technical team to diagnose and resolve issues quickly.

## 🗳️ Access and Information Sensitivity

Access to this information is strictly controlled due to the sensitive nature of the data it contains.

> Logs serve to document activities that occur within the site, such as access, errors, or changes made. Their purpose is to provide a history that facilitates monitoring, fault diagnosis, security, and technical decision-making. Due to its high sensitivity, the visibility of this information is subject to prior authorization from administrators and is not predetermined for any role.

:::warning Strictly Controlled Access
Access to logs is not a standard feature. It is granted only on a case-by-case basis, with a valid justification and after explicit approval from Elenix administration. No user role has access to this view by default.
:::

<div className="doc-image-container">
  <img src={require('./img/registro-consultas.jpg').default} alt="Log query preview" className="doc-image doc-image-large" />
</div>

This section displays a list of the activities carried out on the platform.

### Process for Requesting Access

If you need to access the logs for auditing purposes or to investigate an incident, you must follow this process:

1.  **Identify the Need:** Be clear about what information you need to consult, the time period (dates and times), and the reason for the request.
2.  **Make a Formal Request:** Contact the Elenix support team or your designated account manager.
3.  **Provide Justification:** You will need to explain the reason for your request in detail. For example: "We need to review the access logs for the user `example@company.com` between May 10th and 11th to investigate possible anomalous activity."
4.  **Review and Delivery:** The Elenix team will evaluate the request. If approved, you will be provided with a secure extract of the requested logs. Direct access to the logging tool is not granted.
