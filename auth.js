let currentUser = null;
function login() {
  const e = document.getElementById("authEmail").value;
  const p = document.getElementById("authPassword").value;
  if (!e || !p) return alert("Enter email & password.");
  currentUser = { email: e, name: "Demo User" };
  alert(`Logged in as ${currentUser.email}`);
  updateUIAfterLogin();
}
function signup() {
  const e = document.getElementById("authEmail").value;
  const p = document.getElementById("authPassword").value;
  if (!e || !p) return alert("Enter email & password.");
  currentUser = { email: e, name: "New User" };
  alert(`Signup successful. Welcome, ${currentUser.email}`);
  updateUIAfterLogin();
}
function updateUIAfterLogin() {
  document.querySelector(".header p").textContent = `Welcome, ${currentUser.name}`;
}
