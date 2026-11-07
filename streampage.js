(function () {
  var allowedHost = 'ehdbsduvsddhbhbsd.blogspot.com';
  var redirectTo  = 'https://www.vivosports.live/';

  // Domain lock: any other domain gets redirected
  if (location.hostname !== allowedHost) {
    location.replace(redirectTo + location.search);
    return;
  }

  // Stream loader: reads ?vivo= and plays it in the iframe
  var load = function () {
    var link  = new URLSearchParams(location.search).get('vivo');
    var frame = document.getElementById('videoFrame');
    if (link && frame && /^https?:\/\//i.test(link)) {
      frame.src = link;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
