const contactBtn = document.getElementById("contactBtn");
const landingPage = document.getElementById("landingPage");
const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");
const userDashboard = document.getElementById("userDashboard");
const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");
const registerForm = document.getElementById("registerForm");
const loginFormElement = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const usernameSpan = document.getElementById("username");

contactBtn.addEventListener("click", () => {
  landingPage.classList.add("hidden");
  if (localStorage.getItem("currentUser")) {
    showDashboard();
  } else {
    registrationForm.classList.remove("hidden");
  }
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registrationForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  registrationForm.classList.remove("hidden");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserExist = users.find(
    (user) => user.username === username || user.email === email
  );

  if (isUserExist) {
    alert("Username or email already exists");
  } else {
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", username);
    showDashboard();
  }
});

loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", username);
    showDashboard();
  } else {
    alert("Invalid username or password");
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  userDashboard.classList.add("hidden");
  landingPage.classList.remove("hidden");
});

function showDashboard() {
  const currentUser = localStorage.getItem("currentUser");
  usernameSpan.textContent = currentUser;
  landingPage.classList.add("hidden");
  registrationForm.classList.add("hidden");
  loginForm.classList.add("hidden");
  userDashboard.classList.remove("hidden");
}

// Check if user is already logged in
if (localStorage.getItem("currentUser")) {
  showDashboard();
}
