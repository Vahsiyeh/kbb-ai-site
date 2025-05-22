function generateCover() {
  const title = document.getElementById("title").value;
  const style = document.getElementById("style").value;
  const platform = document.getElementById("platform").value;
  const preview = document.getElementById("preview");

  // Arka plan stilleri
  const backgrounds = {
    neon: "linear-gradient(135deg, #ff00ff, #00ffff)",
    minimal: "#f1f1f1",
    fun: "linear-gradient(135deg, #ff6600, #ffff66)",
    dark: "#222"
  };

  preview.style.background = backgrounds[style];
  preview.style.color = style === "minimal" ? "#000" : "#fff";
  preview.innerText = `${platform.toUpperCase()} - ${title}`;

  document.getElementById("preview-area").classList.remove("hidden");
}

function downloadImage() {
  html2canvas(document.getElementById("preview")).then(canvas => {
    const link = document.createElement("a");
    link.download = "kapak-foto.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("preview-area").classList.add("hidden");
}