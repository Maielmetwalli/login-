
document.getElementById("signup-form").addEventListener("submit", function () {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirm-password").value.trim();
  let userObj = {
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };
  let isValid = true;
  let reqInput = ["username", "email", "password", "confirm-password"];

  reqInput.forEach((inpu) => {
    let input = document.getElementById(inpu);
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
    if (isValid) {
      alert(JSON.stringify(userObj));
    }
  });
});
function setCookie(name, value, dayToLive) {
  const date = new Date();
  date.setTime(date.getTime() + dayToLive * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function getCookie(name) {
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookiesArray = decodedCookies.split("; ");
  let result = null;
  cookiesArray.forEach((cookie) => {
    if (cookie.indexOf(name) === 0) {
      result = cookie.substring(name.length + 1);
    }
  });
  return result;
}
function deleteCookie(name) {
  setCookie(name, null, null);
}
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "123") {
    setCookie("loggedInUser", username, 3);
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("user").textContent = username;
    document.getElementById("loginForm").style.display = "none";
  } else {
    alert("please enter a correct username or password");
  }
}
function logout() {
  deleteCookie("loggedInUser");
  document.getElementById("loginForm").style.display = "flex";
  document.getElementById("loggedIn").style.display = "none";
}
window.onload = function () {
  const loggedInAdmin = getCookie("loggedInUser");
  if (loggedInAdmin) {
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("user").textContent = loggedInAdmin;
    document.getElementById("loginForm").style.display = "none";
  }
};

