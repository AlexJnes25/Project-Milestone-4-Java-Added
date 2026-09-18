// ADD SKILL INTERACTION

document.addEventListener("DOMContentLoaded", function () {

  const skillInput =
    document.getElementById("skillInput");

  const addSkillButton =
    document.getElementById("addSkillButton");

  const skillsList =
    document.getElementById("skillsList");

  const statusMessage =
    document.getElementById("statusMessage");

 // ======================================
// WORKING SKILLS LIST
// ======================================

function initializeSkills() {

  const input = document.getElementById("skillInput");
  const button = document.getElementById("addSkillButton");
  const list = document.getElementById("skillsList");
  const status = document.getElementById("statusMessage");

  // Skip this feature on pages without a skills list.
  if (!input || !button || !list || !status) {
    return;
  }

  function addNewSkill() {

    const skill = input.value.trim();

    if (skill === "") {
      status.textContent = "Please enter a skill first.";
      input.focus();
      return;
    }

    // Create a new list item using JavaScript.
    const newItem = document.createElement("li");

    newItem.textContent = skill;

    // Add it to the actual HTML list.
    list.appendChild(newItem);

    // Show confirmation.
    status.textContent = skill + " added successfully!";

    // Clear the input.
    input.value = "";
    input.focus();
  }

  // Mouse and keyboard button activation.
  button.addEventListener("click", addNewSkill);

  // Allow Enter inside the input field.
  input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      event.preventDefault();
      addNewSkill();
    }

  });

  console.log("Skills feature initialized successfully!");
}

// Run when the page is ready.
if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeSkills
  );
} else {
  initializeSkills();
}
