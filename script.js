document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    // Usuarios válidos
    const validUsers = [
      { user: "celeste", pass: "2005", role: "user" },
      { user: "kevin", pass: "2004", role: "admin" }
    ];
  
    const userFound = validUsers.find(u => u.user === username && u.pass === password);
  
    if (userFound) {
      errorMessage.style.color = "lightgreen";
      errorMessage.textContent = `✨ Bienvenida/o ${username.charAt(0).toUpperCase() + username.slice(1)} ❤️`;
  
      setTimeout(() => {
        if (userFound.role === "admin") {
          window.location.href = "admin-dashboard.html";
        } else {
          window.location.href = "celeste.html";
        }
      }, 1500);
    } else {
      errorMessage.style.color = "#ff4d6d";
      errorMessage.textContent = "Oops 😢... usuario o clave incorrectos.";
    }
  });
  