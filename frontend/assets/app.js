(function () {
  function scaleToFit() {
    var screenW = 430;
    var screenH = 932;
    var wrapper = document.querySelector('.responsive-wrapper');
    var canvas = document.querySelector('.screen-canvas');
    var scaler = document.querySelector('.scale-container');
    if (!wrapper || !canvas || !scaler) return;
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var scale = Math.min(vw / screenW, vh / screenH);
    scaler.style.transform = 'scale(' + scale + ')';
  }

  window.addEventListener('resize', scaleToFit);
  window.addEventListener('orientationchange', scaleToFit);
  document.addEventListener('DOMContentLoaded', scaleToFit);
})();
