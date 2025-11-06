// ページ読み込み時にアニメーションを制御
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");

  // 3.5秒後にイントロを非表示にし、メインを表示
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
    mainContent.classList.add("show");
  }, 4000);
});
