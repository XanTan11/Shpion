function startGame() {
  totalPlayers = parseInt(document.getElementById("players").value);
  const selectedTheme = document.getElementById("theme").value;
  const pool = themes[selectedTheme];

  roles = [];

  // одинаковая роль для всех кроме шпиона
  const mainRole = pool[Math.floor(Math.random() * pool.length)];

  for (let i = 0; i < totalPlayers - 1; i++) {
    roles.push(mainRole);
  }

  roles.push("🕵️ ШПИОН");
  roles.sort(() => Math.random() - 0.5);

  currentPlayer = 0;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  // Показываем кнопку завершения игры всегда
  document.getElementById("endBtn").classList.remove("hidden");

  updatePlayer();
}

function nextPlayer() {
  currentPlayer++;

  if (currentPlayer >= totalPlayers) {
    document.getElementById("playerText").innerText = "Игра началась!";
    document.getElementById("role").innerText = "Обсуждайте 😈";
    // Скрываем только кнопку "Следующий", оставляем "Завершить игру"
    document.getElementById("nextBtn").style.display = "none";
    return;
  }

  updatePlayer();
}

function endGame() {
  // Перезагружаем страницу для нового раунда
  location.reload();
}