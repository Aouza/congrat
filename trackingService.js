// trackingService.js
const GA_MEASUREMENT_ID = "G-9J8664NNFX"; // Substitua pelo seu Measurement ID

export const trackPageView = (pageTitle, pagePath) => {
  if (window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_title: pageTitle,
      page_path: pagePath || window.location.pathname,
    });
  }
};

export const trackEvent = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
