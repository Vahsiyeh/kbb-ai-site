const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const textInput = document.getElementById('textInput');
const fontSelect = document.getElementById('fontSelect');
const colorPicker = document.getElementById('colorPicker');
const bgColorPicker = document.getElementById('bgColorPicker');
const generateBtn = document.getElementById('generateBtn');

function drawCanvas() {
  ctx.fillStyle = bgColorPicker.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const fontSize = 60;
  ctx.fillStyle = colorPicker.value;
  ctx.font = `${fontSize}px ${fontSelect.value}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const text = textInput.value.trim() || "KBB AI Kapak Fotoğrafı";
  const lines = text.split('\n');

  const x = canvas.width / 2;
  const y = canvas.height / 2;

  for(let i=0; i<lines.length; i++) {
    ctx.fillText(lines[i], x, y + (i - (lines.length-1)/2) * (fontSize + 10));
  }
}

drawCanvas();

textInput.addEventListener('input', drawCanvas);
fontSelect.addEventListener('change', drawCanvas);
colorPicker.addEventListener('input', drawCanvas);
bgColorPicker.addEventListener('input', drawCanvas);

generateBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'kapak_fotografi.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});
