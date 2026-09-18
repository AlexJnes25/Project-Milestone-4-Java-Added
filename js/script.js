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

  // SKILLS LIST

const skillInput =
  document.getElementById("skillInput");

const addSkillButton =
  document.getElementById("addSkillButton");

const skillsList =
  document.getElementById("skillsList");

const statusMessage =
  document.getElementById("statusMessage");

if (skillInput && addSkillButton &&
    skillsList && statusMessage) {

  function addSkill() {

    const skill = skillInput.value.trim();

    if (skill === "") {
      statusMessage.textContent =
        "Please enter a skill first.";
      skillInput.focus();
      return;
    }

    const li = document.createElement("li");

    li.textContent = skill;

    skillsList.appendChild(li);

    statusMessage.textContent =
      skill + " added successfully!";

    skillInput.value = "";
    skillInput.focus();
  }

  addSkillButton.addEventListener(
    "click",
    addSkill
  );

  skillInput.addEventListener(
    "keydown",
    function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        addSkill();
      }
    }
  );

}
