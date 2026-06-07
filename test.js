(function() {

  let settings = {
    banners: [
      {
        id: '92a6d64b-ac2e-4394-a1d2-34c932154e88',
        browsers: ['Chrome'],
        os: ['Win', 'Linux'],
        showTime: 3000,
        imgUrl: 'https://placehold.co/200x100'
      }
    ],
    key: "AAALR3jatVZbb9pKEH7Pr0Cobycha-_FdtRWopAKJyQQnKbQuELGXgcXY1zbXEqU_372YsAom4dUqkm042--nZmdmV3v80mNPXV_kRRelNAsr1_UHgXGn-e9JFje-ompj0Gh6GgMr2vEABiZmoXPNMO0LEB0y6yfKui6oJsW1JGmY3CmWYhgAnQIlXTI6TogmgYNALUzXQMGsrBuWko6EnRN1y0CCOF0BAkhCCnptoj9Y1bTP3-c1MDGxCZgj1b-y4cQi0Dik9DABAHI5JAEYM_zAfCrczSAPTYgFGATGtD4rHQssqDUwDc16E0Nfktz5XMNUarm3oYrMVBro0QUSql1RN4MpV1HFljHSqVYnbLSjliesmdiLy_GrE3DiPdg_dlNOOyy1nPZu6tuPrd-uufpJU_VdVUelDxlu1V5qOSp-qzCs8v4_nGDVT2WK61C8DWEXkP4FXTlS4hUMdY0EsXgCI6SMsVV2CnXb1RNOLti6LiKllFWy-GUYVZL6cXxYk2DcZTmXPkocakDDfE7P4Qg8YsLDknk596SH0c0KeygDNFpB7-G3wsw61rY-NJBEwq7k-vN5iqdb-_-24TGwOziwdfW8PJTJRxphEWzW33DbGgN9JqRZtFqPKN_JC-YgfXv-ywbDnv4ad5bp9OnYnrjdbvfJ9-mt-0VmGxG-tNdL4RNhbd0OTmY-tvAxW6SJh7tpKBZ6Pn0p-smzSDIaJ7XPtV2qzmHOsPbtw7DPvQH9k1zMBqz19PaB-ey1bttl--M1GfL9Ap6Tf8w7rtW6SZXPptDuMC6SbgXsrdhMuayozHJ4AxH53rWQEyETIRcQEwwmdDhNPWRwJRipvIcYEpuS735mZLbV-94N7G5z3-9zZkbHj0fYTmicsRyZH-PfUozXsf-chJHvqzEuaU9xMP7UXOE4MT6-vTQt70RKtZhZ0b7wF7FXx7OnXazdb8VleizBph6GQ3k7PnAmmrpvPerR3Fn21l9o20zbNo_5nfhb79jY6s1A_m284CDGz67Kbeo3ec9tN-TpzWxDd3kMgnSRZQUTIlwQ4NmQ8cNlvQLxPLMq9BnN5EoL1inX1OaenG0ojzzvNiVBp4u8uLWm1PZwkeWKqx5sdydNmb1ZEr3PthOoulYeCkP9eqxlC6ygsMitgOazw4b8F3ZOVjOabai2fFefleZ2IH24iaqzyUPmn8nRdBKQrYoFv4iHq94GhbiQ6-riPlyktBi7MkjQd4HxJmgvBUUmZfk3PlYOOD0ZZDWj4gvx_MOl0_O9uYJ3UbeGbtr6odpLyfy4Ja31YCG3jIuWm_O2_NyP4vSolyeI9Jdg3t1kst7a0P8KrC8voi23cO7ZhNZrbZa_eTl5H8nNLic"
  }

  function initBanner() {
    if (settings.banners.length === 0)
      return;
    var showTime = 0;
    var imgUrl = '';

    var match = settings.banners.some(banner => {
      var browserMatch = banner.browsers.some(b => isBr(b));
      let osMatch = banner.os.some(o => isOs(o));
      showTime = banner.showTime;
      imgUrl = banner.imgUrl;
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
            background: url(` + imgUrl + `) no-repeat center;
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

  initBanner();

  function isBr(b) { return navigator.userAgent.indexOf(b) > -1; }
  function isOs(os) { return navigator.platform.toLowerCase().indexOf(os.toLowerCase()) > -1; }
})();
