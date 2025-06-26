function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".profile-icon")) {
    const menu = document.getElementById("dropdown-menu");
    if (menu && menu.style.display === "block") {
      menu.style.display = "none";
    }
  }
};

function toggleCompletedTasks() {
  const completedList = document.getElementById("completed-tasks-list");
  const toggleIcon = document.getElementById("toggle-icon");

  if (completedList.classList.contains("hidden")) {
    completedList.classList.remove("hidden");
    toggleIcon.classList.add("rotated");
    toggleIcon.innerHTML = "&#9650;";
  } else {
    completedList.classList.add("hidden");
    toggleIcon.classList.remove("rotated");
    toggleIcon.innerHTML = "&#9660;";
  }
}