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
