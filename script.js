// ALEX'S PORTFOLIO JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

  // ==================================
  // 1. ADD A SKILL
  // ==================================

  const skillInput =
    document.getElementById("skillInput");

  const addSkillButton =
    document.getElementById("addSkillButton");

  const skillsList =
    document.getElementById("skillsList");

  const statusMessage =
    document.getElementById("statusMessage");

  if (skillInput && addSkillButton && skillsList) {

    function addSkill() {

      const skill = skillInput.value.trim();

      if (skill === "") {
        if (statusMessage) {
          statusMessage.textContent =
            "Please enter a skill first.";
        }

        skillInput.focus();
        return;
      }

      const item = document.createElement("li");

      item.textContent = skill;

      skillsList.appendChild(item);

      if (statusMessage) {
        statusMessage.textContent =
          skill + " was added successfully!";
      }

      skillInput.value = "";

      skillInput.focus();
    }

    addSkillButton.addEventListener("click", addSkill);

    skillInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        addSkill();
      }
    });

  }


  // ==================================
  // 2. THEME SELECTOR
  // ==================================

  const themeSelect =
    document.getElementById("themeSelect");

  if (themeSelect) {

    themeSelect.addEventListener("change", function () {

      document.body.classList.remove(
        "theme-blue",
        "theme-green",
        "theme-purple"
      );

      document.body.classList.add(
        "theme-" + themeSelect.value
      );

    });

  }


  // ==================================
  // 3. CONTACT FORM VALIDATION
  // ==================================

  const contactForm =
    document.getElementById("contact-form");

  if (contactForm) {

    const nameInput =
      document.getElementById("contact-name");

    const emailInput =
      document.getElementById("contact-email");

    const messageInput =
      document.getElementById("contact-message");

    const formStatus =
      document.getElementById("form-status");

    const fields = [
      {
        input: nameInput,
        error: document.getElementById("name-error")
      },
      {
        input: emailInput,
        error: document.getElementById("email-error")
      },
      {
        input: messageInput,
        error: document.getElementById("message-error")
      }
    ];

    function showError(field, message) {
      field.input.setAttribute("aria-invalid", "true");
      field.error.textContent = message;
    }

    function clearError(field) {
      field.input.removeAttribute("aria-invalid");
      field.error.textContent = "";
    }

    fields.forEach(function (field) {
      field.input.addEventListener("input", function () {
        clearError(field);
        formStatus.textContent = "";
      });
    });

    contactForm.addEventListener("submit", function (event) {

      // Stop the browser from refreshing the page.
      event.preventDefault();

      let valid = true;
      let firstInvalid = null;

      formStatus.textContent = "";

      fields.forEach(clearError);

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      function markInvalid(field, message) {
        showError(field, message);
        valid = false;

        if (!firstInvalid) {
          firstInvalid = field.input;
        }
      }

      // Validate name
      if (name === "") {
        markInvalid(fields[0], "Please enter your name.");
      }

      // Validate email
      if (email === "") {
        markInvalid(fields[1], "Please enter your email.");
      } else if (!emailInput.validity.valid) {
        markInvalid(fields[1], "Please enter a valid email address.");
      }

      // Validate message
      if (message === "") {
        markInvalid(fields[2], "Please enter a message.");
      }

      // Stop if any fields are invalid.
      if (!valid) {
        formStatus.textContent =
          "Please correct the errors in the form.";

        formStatus.className = "form-message error";

        firstInvalid.focus();
        return;
      }

      // All fields passed validation.
      formStatus.textContent =
        "Success! Your form passed validation. " +
        "This is a demo, so no message was sent.";

      formStatus.className = "form-message success";

      contactForm.reset();

    });

  }

});
