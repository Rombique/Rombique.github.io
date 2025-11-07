(function() {

  let settings = {
    banners: [
      {
        id: '92a6d64b-ac2e-4394-a1d2-34c932154e88',
        browsers: ['Chrome'],
        os: ['Win', 'Linux'],
        showTime: 3000,
      }
    ]
  }

  function initBanner() {
    if (settings.banners.length === 0)
      return;
    var showTime = 0;

    var match = settings.banners.some(banner => {
      var browserMatch = banner.browsers.some(b => isBr(b));
      let osMatch = banner.os.some(o => isOs(o)));
      showTime = banner.showTime;
      return browserMatch && osMatch;
    });

    if (!match)
      return;

    var style = document.createElement('style');
    style.textContent = `
        .bnnr812 {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 100px;
            background: url('https://placehold.co/200x100') no-repeat center;
            background-size: cover;
            border: 1px solid #ccc;
            cursor: pointer;
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .bnnr812cb {
            position: absolute;
            top: -10px;
            right: -10px;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-weight: bold;
        }
        .bnnr812cb:hover {
            background: #f00;
            color: #fff;
        }
    `;
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.className = 'bnnr812';
    banner.id = 'bnnr812';
    banner.innerHTML = `
        <a href="https://ya.ru" target="_blank" style="width: 100%; height: 100%;"></a>
        <div class="bnnr812cb" id="bnnr812cb">✕</div>
    `;
    document.body.appendChild(banner);

    document.getElementById('bnnr812cb').addEventListener('click', closeBanner);

    function closeBanner() {
      document.getElementById('bnnr812').style.display = 'none';
    }

    setTimeout(function() {
      document.getElementById('bnnr812').style.display = 'flex';
    }, showTime);
  }

  function isOs(os) { return navigator.userAgent.indexOf(os) > -1; }
  function isBr(b) { return navigator.userAgent.toLowerCase().indexOf(b) > -1; }
})();
