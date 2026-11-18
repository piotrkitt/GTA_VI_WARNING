const RE = /(GTA|Grand Theft Auto)\s*(VI|6)\b/i;

function showWarning() {
  if (document.getElementById("gta-warning")) return;
  const originalTitle = document.title;

  // Ukryj całą stronę i zostaw tylko ostrzeżenie
  const style = document.createElement("style");
  style.textContent = `
    html { overflow: hidden !important; background: #d00 !important; }
    body { display: none !important; }
    #gta-warning {
      position: fixed !important;
      top: 0 !important; left: 0 !important;
      width: 100vw !important; height: 100vh !important;
      z-index: 2147483647 !important;
      display: flex !important; flex-direction: column !important;
      align-items: center !important; justify-content: center !important;
      gap: 48px !important;
      box-sizing: border-box !important; margin: 0 !important; padding: 24px !important;
      background: #d00 !important; color: #fff !important;
      font: bold 64px/1.2 sans-serif !important; text-align: center !important;
    }
    #gta-warning button {
      all: unset !important;
      cursor: pointer !important;
      padding: 16px 32px !important;
      border: 3px solid #fff !important; border-radius: 8px !important;
      background: transparent !important; color: #fff !important;
      font: bold 22px/1.2 sans-serif !important;
    }
    #gta-warning button:hover { background: #fff !important; color: #d00 !important; }
  `;
  document.documentElement.appendChild(style);

  const box = document.createElement("div");
  box.id = "gta-warning";

  const text = document.createElement("div");
  text.textContent = "⚠️ WARNING: GTA VI CONTENT - RUN AWAY ⚠️";

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "I AM AN ADULT, OPEN ANYWAY";
  button.addEventListener("click", () => {
    box.remove();
    style.remove();
    document.title = originalTitle;
  });

  box.append(text, button);
  document.documentElement.appendChild(box);
  document.title = "WARNING: GTA VI CONTENT - RUN AWAY";
}

function check() {
  const text = document.title + " " + (document.body?.innerText || "");
  if (RE.test(text)) {
    observer.disconnect();
    showWarning();
  }
}

// Strony doładowujące treść dynamicznie (YouTube, X itd.)
let timer;
const observer = new MutationObserver(() => {
  clearTimeout(timer);
  timer = setTimeout(check, 500);
});
observer.observe(document.documentElement, { childList: true, subtree: true });

check();
