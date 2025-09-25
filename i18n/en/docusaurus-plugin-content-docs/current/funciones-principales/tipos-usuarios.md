---
sidebar_position: 3
---

# User Types

:::info Role System
Elenix has a hierarchical role system that allows controlling access and functionalities according to the user type.
:::

<div className="hero-banner">
  <div className="hero-content">
    <h2>👥 User and Permissions Management</h2>
    <p>Role system designed to ensure security and appropriate access control according to the responsibilities of each user.</p>
  </div>
</div>

## 🔐 Available Roles

### 👑 Administrator

<div className="callout callout-info">
  <strong>🎯 Full Access:</strong> Total control over the platform, users, and system settings.
</div>

**Permissions and Functionalities:**

- ✅ **User management:** Create, edit, and delete accounts
- ✅ **System configuration:** Modify global parameters
- ✅ **Access to all data:** Complete visualization of metrics and reports
- ✅ **Device management:** Add, configure, and delete devices
- ✅ **Data export:** Download reports and analyses
- ✅ **Alert configuration:** Set notifications and thresholds
- ✅ **System auditing:** Access to logs and activity records

:::note Responsibilities
The administrator is responsible for the initial system configuration and user management.
:::

### ⚙️ Operator

<div className="callout callout-warning">
  <strong>🔧 Operational Access:</strong> Permissions to operate and monitor the system without modifying critical settings.
</div>

**Permissions and Functionalities:**

- ✅ **Real-time monitoring:** Visualization of current data
- ✅ **Basic device management:** Restart and configure basic parameters
- ✅ **Report generation:** Create and export standard analyses
- ✅ **Basic alert configuration:** Set personal notifications
- ❌ **User management:** Cannot create or delete accounts
- ❌ **System configuration:** No access to critical parameters
- ❌ **Complete audit:** Limited access to system logs

:::tip Recommended Use
Ideal for technical personnel who need to operate the system daily without the risk of modifying critical settings.
:::

### 👁️ View Only

<div className="callout callout-tip">
  <strong>📊 Consultation Access:</strong> Permissions only to view data and reports without modification capability.
</div>

**Permissions and Functionalities:**

- ✅ **Dashboard visualization:** Access to all metrics and graphs
- ✅ **Report consultation:** View historical and real-time analyses
- ✅ **Data filtering:** Use calendars and filters for specific analyses
- ✅ **Basic export:** Download reports in standard formats
- ❌ **Configuration modification:** No editing permissions
- ❌ **Device management:** Cannot modify parameters
- ❌ **Alert creation:** No ability to configure notifications
- ❌ **Administrative access:** No management permissions

:::note Use Cases
Perfect for executives, analysts, or personnel who need to consult information without the risk of modifying the system.
:::

## 🔄 Role Management

### Permission Assignment

<div className="feature-grid">
  <div className="feature-card">
    <h4>🎯 Principle of Least Privilege</h4>
    <p>Each user receives only the permissions necessary for their specific functions.</p>
  </div>
  <div className="feature-card">
    <h4>🔒 Layered Security</h4>
    <p>Hierarchical system that prevents unauthorized access to critical functions.</p>
  </div>
  <div className="feature-card">
    <h4>📋 Complete Audit</h4>
    <p>Detailed record of all actions performed by each type of user.</p>
  </div>
  <div className="feature-card">
    <h4>⚡ Dynamic Changes</h4>
    <p>Administrators can modify roles and permissions in real time.</p>
  </div>
</div>

## 📊 Permissions Matrix

| Functionality     | Administrator |  Operator  | View Only |
| ----------------- | :-----------: | :--------: | :-------: |
| View dashboards   |      ✅       |     ✅     |    ✅     |
| Export reports    |      ✅       |     ✅     |    ✅     |
| Configure devices |      ✅       |  ⚠️ Basic  |    ❌     |
| Manage users      |      ✅       |     ❌     |    ❌     |
| Configure system  |      ✅       |     ❌     |    ❌     |
| Create alerts     |      ✅       |  ⚠️ Basic  |    ❌     |
| Access logs       |      ✅       | ⚠️ Limited |    ❌     |

:::warning Important
Role changes require a session restart for the new permissions to take effect.
:::

---

## 🚀 Best Practices

<div className="callout callout-info">
  <strong>💡 Recommendations:</strong>
  <ul>
    <li>Assign roles according to the actual responsibilities of the user</li>
    <li>Periodically review assigned permissions</li>
    <li>Use "View Only" accounts for external stakeholders</li>
    <li>Maintain a minimum number of administrators</li>
  </ul>
</div>

:::tip Next Step
Now that you know the user types, explore the [sidebar](./barra-lateral.md) to navigate efficiently through the platform.
:::
