chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('litewrite.html', {
    id: 'LiteWrite',
    'bounds': {
      'width': 800,
      'height': 700
    }
  });
});