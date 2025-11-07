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

  setTimeout(function() {
    document.getElementById('bnnr812').style.display = 'flex';
  }, 3000);

  document.getElementById('bnnr812cb').addEventListener('click', closeBanner);
})();
