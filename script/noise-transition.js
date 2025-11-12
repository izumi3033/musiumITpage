// =========================
// ノイズ遷移アニメーション
// =========================
const transition = document.getElementById('noise-transition');
const canvas = document.getElementById('noise-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ノイズを描画する関数
function drawNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const buffer = new Uint32Array(imageData.data.buffer);
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = (255 << 24) | // alpha
                (Math.random() * 255 << 16) |
                (Math.random() * 255 << 8) |
                (Math.random() * 255);
  }
  ctx.putImageData(imageData, 0, 0);
}

// 「不気味の谷」ボタンをクリックしたら演出開始
document.querySelector('.uncanny-card .visit-btn').addEventListener('click', (e) => {
  e.preventDefault(); // すぐに遷移しない

  transition.classList.add('active'); // ノイズ画面を表示

  let noiseInterval = setInterval(drawNoise, 30);

  setTimeout(() => {
    document.querySelector('.noise-title').classList.add('show');
  }, 500);

  // 3.5秒後に遷移
  setTimeout(() => {
    clearInterval(noiseInterval);
    window.location.href = 'uncany.html'; // 不気味の谷詳細ページへ
  }, 3500);
});
