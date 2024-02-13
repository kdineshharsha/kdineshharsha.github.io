function validation() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let form = document.getElementById("form");
  let password_length = password.length;
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = "Incorrect Password...!";

  setTimeout(function () {
    document.body.removeChild(toast);
  }, 3000);

  console.log(password_length);
  if (password_length != 6 && username != "") {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    document.body.appendChild(toast);
  }
}


