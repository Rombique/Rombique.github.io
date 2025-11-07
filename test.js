(function() {
  var style = document.createElement('style');
  style.textContent = 
    '.bnnr812 {\n' +
    '    position: fixed;\n' +
    '    top: 50%;\n' +
    '    left: 50%;\n' +
    '    transform: translate(-50%, -50%);\n' +
    '    width: 200px;\n' +
    '    height: 100px;\n' +
    '    background: url(\'https://placehold.co/250x100\') no-repeat center;\n' +
    '    background-size: cover;\n' +
    '    border: 1px solid #ccc;\n' +
    '    cursor: pointer;\n' +
    '    display: none;\n' +
    '    justify-content: center;\n' +
    '    align-items: center;\n' +
    '    z-index: 1000;\n' +
    '}\n' +
    '.bnnr812cb {\n' +
    '    position: absolute;\n' +
    '    top: -10px;\n' +
    '    right: -10px;\n' +
    '    background: #fff;\n' +
    '    border: 1px solid #ccc;\n' +
    '    border-radius: 50%;\n' +
    '    width: 20px;\n' +
    '    height: 20px;\n' +
    '    display: flex;\n' +
    '    justify-content: center;\n' +
    '    align-items: center;\n' +
    '    cursor: pointer;\n' +
    '    font-weight: bold;\n' +
    '}\n' +
    '.bnnr812cb:hover {\n' +
    '    background: #f00;\n' +
    '    color: #fff;\n' +
    '}';
  document.head.appendChild(style);

  var banner = document.createElement('div');
  banner.className = 'bnnr812';
  banner.id = 'bnnr812';
  banner.innerHTML = '<a href="https://ya.ru" target="_blank" style="width: 100%; height: 100%;"></a><div class="bnnr812cb" id="bnnr812cb">✕</div>';
  document.body.appendChild(banner);

  function closeBanner() {
    document.getElementById('bnnr812').style.display = 'none';
  }

  function detectOS() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Win') > -1) return 'Windows';
    if (userAgent.indexOf('Mac') > -1) return 'macOS';
    if (userAgent.indexOf('Linux') > -1) return 'Linux';
    if (userAgent.indexOf('Android') > -1) return 'Android';
    if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) return 'iOS';
    return 'Unknown';
  }

  function detectBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('firefox') > -1) {
      return 'Firefox';
    } else if (userAgent.indexOf('chrome') > -1) {
      return 'Chrome';
    } else if (userAgent.indexOf('safari') > -1) {
      return 'Safari';
    } else if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1) {
      return 'Opera';
    } else if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1) {
      return 'Internet Explorer';
    } else if (userAgent.indexOf('edge') > -1) {
      return 'Edge';
    } else {
      return 'Unknown';
    }
  }
  console.log(detectOS());
  console.log(detectBrowser());

  if (
    detectOS() === 'Windows' &&
    detectBrowser() === 'Chrome') {
    setTimeout(function() {
      document.getElementById('bnnr812').style.display = 'flex';
    }, 3000);
  }

  document.getElementById('bnnr812cb').addEventListener('click', closeBanner);
})();
