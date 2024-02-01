const users = [];

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(
    (u) => u.username === email && u.password === password
  );

  if (user) {
    alert("Login successful!");
    // Redirect or perform additional actions after successful login
  } else {
    alert("Invalid email or password");
  }
}

function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Check if the email is already registered
  if (users.some((u) => u.username === username)) {
    alert("Email already registered");
  } else {
    users.push({ email, password });
    alert("Signup successful! Please login.");
    // You may redirect to the login page after successful signup
  }
}
