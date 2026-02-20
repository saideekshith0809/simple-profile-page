function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const msg = document.getElementById("loginMsg");

  if (user === "admin" && pass === "1234") {
    msg.textContent = "Login Successful!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Invalid Credentials!";
    msg.style.color = "red";
  }
}
function toggleLoginPass() {
  const passField = document.getElementById("loginPass");
  passField.type = (passField.type === "password") ? "text" : "password";
}
function logout() {
  document.getElementById("loginUser").value = "";
  document.getElementById("loginPass").value = "";
  document.getElementById("loginMsg").textContent = "Logged out successfully.";
  document.getElementById("loginMsg").style.color = "blue";
}
