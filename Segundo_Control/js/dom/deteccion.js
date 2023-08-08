const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userAgent(id) {
  const $userDevice = d.querySelector(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/ios/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      firefox: () => ua.match(/firefox/i),
      chrome: () => ua.match(/chrome/i),
      opera: () => ua.match(/opera/i),
      edge: () => ua.match(/edge/i),
      ie: () => ua.match(/trident/i),
      any: function () {
        return (
          this.firefox() ||
          this.chrome() ||
          this.opera() ||
          this.edge() ||
          this.ie()
        );
      },
    };

  $userDevice.innerHTML = `
  <ul>
    <li><text>User Agent</text>: ${ua}</li><br>
    <li><text>Plataforma</text>: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li><br>
    <li><text>Navegador Web</text>: ${isBrowser.any()}</li>
  </ul>
  `;
}
