const themeSelect = document.querySelector("#theme-select");
const themeMessage = document.querySelector("#theme-message");
const themes = ["blue", "green", "purple"];
let savedTheme = "blue";
try {
  const stored = window.localStorage.getItem("alex-portfolio-theme");
  if (themes.includes(stored)) savedTheme = stored;
} catch (_error) {
  // The theme still works when browser storage is unavailable.
}
document.body.dataset.theme = savedTheme;
if (themeSelect) {
  themeSelect.value = savedTheme;
  if (themeMessage) themeMessage.textContent = `${savedTheme[0].toUpperCase()}${savedTheme.slice(1)} theme selected.`;
  themeSelect.addEventListener("change", () => {
    const nextTheme = themeSelect.value;
    if (!themes.includes(nextTheme)) return;
    document.body.dataset.theme = nextTheme;
    if (themeMessage) themeMessage.textContent = `${nextTheme[0].toUpperCase()}${nextTheme.slice(1)} theme selected.`;
    try { window.localStorage.setItem("alex-portfolio-theme", nextTheme); } catch (_error) { /* Optional storage. */ }
  });
}

// DOM feature: add a genuine new LI, rather than exposing a pre-written list.
const skillForm = document.querySelector("#skill-form");
if (skillForm) {
  const skillInput = document.querySelector("#skill-input");
  const skillList = document.querySelector("#skills-list");
  const skillMessage = document.querySelector("#skill-message");
  skillForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const skill = skillInput.value.trim();
    if (!skill) {
      skillInput.setAttribute("aria-invalid", "true");
      skillMessage.textContent = "Enter a skill before adding it.";
      skillMessage.dataset.state = "error";
      skillInput.focus();
      return;
    }
    const alreadyExists = [...skillList.children].some((item) => item.textContent.toLowerCase() === skill.toLowerCase());
    if (alreadyExists) {
      skillInput.setAttribute("aria-invalid", "true");
      skillMessage.textContent = "That skill is already in the list.";
      skillMessage.dataset.state = "error";
      skillInput.focus();
      return;
    }
    const item = document.createElement("li");
    item.textContent = skill; // textContent prevents HTML injection.
    skillList.appendChild(item);
    skillInput.removeAttribute("aria-invalid");
    skillMessage.dataset.state = "success";
    skillMessage.textContent = `${skill} added to the list.`;
    skillInput.value = "";
    skillInput.focus();
  });
  skillInput.addEventListener("input", () => {
    skillInput.removeAttribute("aria-invalid");
    skillMessage.textContent = "";
    skillMessage.removeAttribute("data-state");
  });
}

// Client-side form validation demo. It intentionally never sends or saves messages.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  const fields = [
    { input: document.querySelector("#contact-name"), error: document.querySelector("#name-error"), label: "name" },
    { input: document.querySelector("#contact-email"), error: document.querySelector("#email-error"), label: "email" },
    { input: document.querySelector("#contact-message"), error: document.querySelector("#message-error"), label: "message" }
  ];
  const status = document.querySelector("#form-status");
  const showError = (field, message) => {
    field.error.textContent = message;
    if (message) field.input.setAttribute("aria-invalid", "true");
    else field.input.removeAttribute("aria-invalid");
  };
  const validate = (field) => {
    const value = field.input.value.trim();
    if (!value) {
      showError(field, `Please enter your ${field.label}.`);
      return false;
    }
    if (field.label === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showError(field, "Enter a valid email address, such as name@example.com.");
      return false;
    }
    showError(field, "");
    return true;
  };
  fields.forEach((field) => field.input.addEventListener("input", () => {
    if (field.input.getAttribute("aria-invalid") === "true") validate(field);
    status.textContent = "";
    status.removeAttribute("data-state");
  }));
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalid = null;
    fields.forEach((field) => { if (!validate(field) && !firstInvalid) firstInvalid = field.input; });
    if (firstInvalid) {
      status.dataset.state = "error";
      status.textContent = "Please fix the highlighted fields. Your message has not been sent.";
      firstInvalid.focus();
      return;
    }
    status.dataset.state = "success";
    status.textContent = "Validation successful! This is a demo, so no message was sent or saved. Contact me through GitHub instead.";
  });
}
