const users = [];

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert("login succesful");
    window.location.href = "homepage.html";
  } else {
    alert("invalid email or password");
  }
}

function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (users.some((u) => u.email === email)) {
    alert("Email already registered");
  } else {
    users.push({ email, password });
    alert("Signup successful. You can now login");
    window.location.href = "homepage.html";
  }
}

function logout() {
  window.location.href = "login.html";
}
