// Cuenta atrás: 2 días desde ahora
const now = new Date();
const targetDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.querySelector(".countdown-box").innerHTML = "¡Ya estamos juntos! 💖";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Calendario
document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: [
      {
        title: "Nos conocimos 💘",
        start: "2023-11-11"
      },
      {
        title: "Cumplimos mes 🎉",
        start: "2025-06-11"
      },
      {
        title: "Día de vernos 💖",
        start: targetDate.toISOString().slice(0, 10),
        color: "#ff69b4"
      }
    ]
  });
  calendar.render();
});
