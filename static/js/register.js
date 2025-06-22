document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    const password = this.password.value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      e.preventDefault();
    }
  });
