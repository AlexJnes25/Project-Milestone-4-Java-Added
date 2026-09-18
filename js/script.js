// ======================================
// ALEX'S PORTFOLIO - SKILLS LIST
// ======================================

function initializeSkills() {

  const input = document.getElementById("skillInput");
  const button = document.getElementById("addSkillButton");
  const list = document.getElementById("skillsList");
  const status = document.getElementById("statusMessage");

  // Skip pages that don't contain the skills feature.
  if (!input || !button || !list || !status) {
    return;
  }

  function addNewSkill() {

    const skill = input.value.trim();

    // Check for empty input.
    if (skill === "") {
      status.textContent = "Please enter a skill first.";
      input.focus();
      return;
    }

    // Create a new skill using JavaScript.
    const newItem = document.createElement("li");

    newItem.textContent = skill;

    // Add the skill to the list.
    list.appendChild(newItem);

    // Display success message.
    status.textContent = skill + " added successfully!";

    // Clear input.
    input.value = "";
    input.focus();
  }

  // Add skill when button is clicked.
  button.addEventListener("click", addNewSkill);

  // Add skill when Enter is pressed.
  input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      event.preventDefault();
      addNewSkill();
    }

  });

  console.log("Skills feature initialized successfully!");
}

// Run JavaScript when the page is ready.
if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeSkills
  );

} else {

  initializeSkills();

}
// ======================================
// CONTACT FORM VALIDATION
// ======================================

function initializeContactForm() {

  const form = document.getElementById("contact-form");

  // Skip pages without a contact form.
  if (!form) {
    return;
  }

  const name = document.getElementById("contact-name");
  const email = document.getElementById("contact-email");
  const message = document.getElementById("contact-message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const status = document.getElementById("form-status");

  // Check that all required elements exist.
  if (!name || !email || !message ||
      !nameError || !emailError ||
      !messageError || !status) {
    console.error("Contact form elements are missing.");
    return;
  }

  function showError(input, errorElement, text) {
    errorElement.textContent = text;
    input.setAttribute("aria-invalid", "true");
  }

  function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.removeAttribute("aria-invalid");
  }

  // Clear errors when the user edits a field.
  const fields = [
    [name, nameError],
    [email, emailError],
    [message, messageError]
  ];

  fields.forEach(function(field) {

    field[0].addEventListener("input", function() {

      clearError(field[0], field[1]);
      status.textContent = "";
      status.className = "form-message";

    });

  });

  // Validate when the form is submitted.
  form.addEventListener("submit", function(event) {

    // Prevent the page from refreshing.
    event.preventDefault();

    let valid = true;
    let firstInvalid = null;

    status.textContent = "";
    status.className = "form-message";

    fields.forEach(function(field) {
      clearError(field[0], field[1]);
    });

    // Validate name.
    if (name.value.trim() === "") {

      showError(
        name,
        nameError,
        "Please enter your name."
      );

      valid = false;
      firstInvalid = firstInvalid || name;
    }

    // Validate email.
    if (email.value.trim() === "") {

      showError(
        email,
        emailError,
        "Please enter your email."
      );

      valid = false;
      firstInvalid = firstInvalid || email;

    } else if (!email.validity.valid) {

      showError(
        email,
        emailError,
        "Please enter a valid email address."
      );

      valid = false;
      firstInvalid = firstInvalid || email;
    }

    // Validate message.
    if (message.value.trim() === "") {

      showError(
        message,
        messageError,
        "Please enter a message."
      );

      valid = false;
      firstInvalid = firstInvalid || message;
    }

    // Show errors.
    if (!valid) {

      status.textContent =
        "Please correct the errors in the form.";

      status.className = "form-message error";

      firstInvalid.focus();
      return;
    }

    // Valid submission.
    status.textContent =
      "Success! Your form passed validation. " +
      "This is a demo, so no message was sent.";

    status.className = "form-message success";

    form.reset();

  });

  console.log("Contact form initialized successfully!");

}

// Run when the document is ready.
if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeContactForm
  );

} else {

  initializeContactForm();

}
// ======================================
// COLOR THEME SELECTOR
// ======================================

function initializeTheme() {

  const themeSelect =
    document.getElementById("theme-select");

  const themeMessage =
    document.getElementById("theme-message");

  // Skip pages without the selector.
  if (!themeSelect || !themeMessage) {
    return;
  }

  themeSelect.addEventListener("change", function() {

    const selectedTheme = themeSelect.value;

    document.body.setAttribute(
      "data-theme",
      selectedTheme
    );

    themeMessage.textContent =
      selectedTheme.charAt(0).toUpperCase() +
      selectedTheme.slice(1) +
      " theme selected.";

  });

}

// Initialize the feature when the page is ready.
if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeTheme
  );

} else {

  initializeTheme();

}
