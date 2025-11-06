document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");

  // イントロが終わったらメインをフェードイン
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.add("show");
  }, 4000); // 4秒後に切り替え
});
