chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'LiteWrite',
    'bounds': {
      'width': 800,
      'height': 700
    }
  });
});