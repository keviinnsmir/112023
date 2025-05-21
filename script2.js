const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

let hearts = [];
const heartImage = new Image();
heartImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Heart_corazón.svg/1024px-Heart_corazón.svg.png";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: 20 + Math.random() * 20,
    speed: 1 + Math.random() * 2,
    opacity: 0.5 + Math.random() * 0.5
  };
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    ctx.globalAlpha = heart.opacity;
    ctx.drawImage(heartImage, heart.x, heart.y, heart.size, heart.size);
    heart.y -= heart.speed;
    if (heart.y + heart.size < 0) {
      hearts[index] = createHeart();
    }
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawHearts);
}

function init() {
  resizeCanvas();
  for (let i = 0; i < 30; i++) {
    hearts.push(createHeart());
  }
  drawHearts();
}

window.addEventListener("resize", resizeCanvas);
heartImage.onload = init;
