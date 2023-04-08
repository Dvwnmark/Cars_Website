const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const loginPage = document.getElementById("login-page");

registerButton.addEventListener("click", () => {
  loginPage.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  loginPage.classList.remove("right-panel-active");
});