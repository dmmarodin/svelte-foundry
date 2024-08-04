<script>let className = '';
export { className as class };
// https://www.cssportal.com/css-loader-generator/
</script>

<div class="sk-icon {className}">
	<div class="sk-spinner" />
</div>

<style scoped>:root {
  --bg-darker: #17191f;
  --bg-dark: #1f2129;
  --bg-mid: #282a36;
  --bg-light: #2d303d;
  --txt-dark: #636979;
  --txt-mute: #80889c;
  --txt-bright: #9da6be;
  --txt-white: #dee2ed;
  --acc-mute: #393e4b;
  --acc-blue: #3057a8;
  --acc-purple: #644a9a;
  --acc-green: #3b9181;
  --acc-red: #a6194f;
  --acc-yellow: #c58e22;
}

.sk-spinner {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #766df4 94%, rgba(0, 0, 0, 0)) top/8px 8px no-repeat, conic-gradient(rgba(0, 0, 0, 0) 30%, #766df4);
  -webkit-mask: radial-gradient(farthest-side, rgba(0, 0, 0, 0) calc(100% - 8px), #000 0);
  animation: spinner 1s infinite linear;
}

@keyframes spinner {
  to {
    transform: rotate(1turn);
  }
}</style>
