// Store login status
let isLoggedIn = false;

// Login Function
function login() {
  const usernameField = document.getElementById("loginUser");
  const passwordField = document.getElementById("loginPass");
  const msg = document.getElementById("loginMsg");

  const username = usernameField.value.trim();
  const password = passwordField.value.trim();

  // Check if already logged in
  if (isLoggedIn) {
    msg.textContent = "You are already logged in!";
    msg.style.color = "orange";
    return;
  }

  // Validate empty fields
  if (username === "" || password === "") {
    msg.textContent = "Please enter both username and password.";
    msg.style.color = "red";
    return;
  }

  // Simple authentication
  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    isLoggedIn = true;

    msg.textContent = "Login Successful! Welcome, " + username + ".";
    msg.style.color = "green";

    // Disable inputs after login
    usernameField.disabled = true;
    passwordField.disabled = true;
  } else {
    msg.textContent = "Invalid username or password.";
    msg.style.color = "red";
  }
}

// Toggle Password Visibility
function toggleLoginPass() {
  const passField = document.getElementById("loginPass");

  if (passField.type === "password") {
    passField.type = "text";
  } else {
    passField.type = "password";
  }
}

// Logout Function
function logout() {
  const usernameField = document.getElementById("loginUser");
  const passwordField = document.getElementById("loginPass");
  const msg = document.getElementById("loginMsg");

  if (!isLoggedIn) {
    msg.textContent = "You are not logged in.";
    msg.style.color = "gray";
    return;
  }

  isLoggedIn = false;

  // Reset fields
  usernameField.value = "";
  passwordField.value = "";

  usernameField.disabled = false;
  passwordField.disabled = false;

  msg.textContent = "Logged out successfully.";
  msg.style.color = "blue";
}

// Allow Enter key to trigger login
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    login();
  }
});
