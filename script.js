function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  if (username && password) {
    localStorage.setItem(`user_${username}`, password);
    alert("Inscription réussie !");
  } else {
    alert("Remplissez tous les champs.");
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const storedPass = localStorage.getItem(`user_${username}`);
  if (storedPass && storedPass === password) {
    localStorage.setItem("logged_user", username);
    showWelcome(username);
  } else {
    alert("Identifiants incorrects.");
  }
}

function showWelcome(username) {
  document.querySelectorAll(".form-block").forEach(div => div.style.display = "none");
  document.getElementById("status").style.display = "block";
  document.getElementById("user-name").innerText = username;
}

function logout() {
  localStorage.removeItem("logged_user");
  location.reload();
}

window.onload = () => {
  const loggedUser = localStorage.getItem("logged_user");
  if (loggedUser) showWelcome(loggedUser);
};
