// Hide loader after page load
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Toggle light/dark mode
function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute("data-theme");
  root.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
}
