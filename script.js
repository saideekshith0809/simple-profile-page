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
