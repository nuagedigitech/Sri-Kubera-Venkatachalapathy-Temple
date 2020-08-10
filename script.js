let currentLocation = window.location.pathname;
let devicePath = '';
if (currentLocation.endsWith('index.html')) {
  currentLocation = currentLocation.slice(0, currentLocation.length - 'index.html'.length);
}

if (/mobile/i.test(navigator.userAgent) && !/ipad|tablet/i.test(navigator.userAgent)) {
  devicePath = 'mobile/index.html';
} else if (/ipad|tablet/i.test(navigator.userAgent)) {
  devicePath = 'tablet/index.html';
} else {
  devicePath = 'desktop/index.html';
}

window.location.replace(currentLocation + devicePath);
