if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Giphy/sw.js', { scope: '/Giphy/' })})}