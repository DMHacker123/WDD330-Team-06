export default class Alert {
  constructor(alertsPath = '/json/alerts.json') {
    this.alertsPath = alertsPath;
  }

  async init() {
    try {
      const alerts = await this.loadAlerts();
      if (alerts && alerts.length > 0) {
        this.renderAlerts(alerts);
      }
    } catch (error) {
      console.error('Error loading alerts:', error);
    }
  }

async loadAlerts() {
  const response = await fetch(this.alertsPath);

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}


  renderAlerts(alerts) {
    const section = document.createElement('section');
    section.className = 'alert-list';

    alerts.forEach(alert => {
      const p = document.createElement('p');
      p.textContent = alert.message;
      p.style.backgroundColor = alert.background;
      p.style.color = alert.color;
      section.appendChild(p);
    });

    const alertsContainer = document.querySelector('#alerts');
    if (alertsContainer) {
      alertsContainer.appendChild(section);
    }
  }
}
