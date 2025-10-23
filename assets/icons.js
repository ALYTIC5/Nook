// Lightweight custom markers using divIcons (no image files needed)
(function () {
  const css = `
    .nook-pin { width:24px;height:24px;border-radius:50%;background:#6c4df6;border:3px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,.25); }
    .nook-user { width:14px;height:14px;border-radius:50%;background:#10b981;border:5px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,.25); }
    .nook-flag { width:0;height:0;border-left:10px solid #6c4df6;border-top:6px solid transparent;border-bottom:6px solid transparent; transform: translate(6px, -7px);}
  `;
  const style = document.createElement('style'); style.innerHTML = css; document.head.appendChild(style);
  window.NookIcons = {
    pin:  L.divIcon({ className:'nook-pin',  iconSize:[24,24], iconAnchor:[12,12] }),
    user: L.divIcon({ className:'nook-user', iconSize:[24,24], iconAnchor:[12,12] }),
    flag: L.divIcon({ className:'nook-flag', iconSize:[16,16], iconAnchor:[8,8] })
  };
})();
