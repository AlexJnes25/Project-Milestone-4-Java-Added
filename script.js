// Show and hide the Skills section
const toggleSkillsButton = document.querySelector("#toggleSkills");
const skillsList = document.querySelector("#skillsList");

toggleSkillsButton.addEventListener("click", function () {
  const isHidden = skillsList.hidden;

  skillsList.hidden = !isHidden;
  toggleSkillsButton.textContent = isHidden
    ? "Hide Skills"
    : "Show Skills";

  toggleSkillsButton.setAttribute("aria-expanded", isHidden);
});


// Contact form validation
const contactForm = document.querySelector("#contactForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");


contactForm.addEventListener("submit", function (event) {
  let formIsValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.setAttribute("aria-invalid", "true");
    formIsValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    emailInput.setAttribute("aria-invalid", "true");
    formIsValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter a message.";
    messageInput.setAttribute("aria-invalid", "true");
    formIsValid = false;
  }

  if (!formIsValid) {
    event.preventDefault();
  }
});


// Clear errors when corrected
nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() !== "") {
    nameError.textContent = "";
    nameInput.removeAttribute("aria-invalid");
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.value.trim() !== "") {
    emailError.textContent = "";
    emailInput.removeAttribute("aria-invalid");
  }
});

messageInput.addEventListener("input", function () {
  if (messageInput.value.trim() !== "") {
    messageError.textContent = "";
    messageInput.removeAttribute("aria-invalid");
  }
});
