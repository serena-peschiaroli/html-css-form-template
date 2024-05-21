document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      fakeSubmit();
    }
  });

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    if (
      !name ||
      !lastname ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return false;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(String(phone));
  }

  function fakeSubmit() {
    const submitButton = document.querySelector(".btn");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Create Account";
      alert("Form submitted successfully!");
      form.reset();
    }, 2000); 
  }
});
