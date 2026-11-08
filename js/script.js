const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

root.dataset.theme = savedTheme === "dark" ? "dark" : "light";

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#theme-toggle");

    function updateToggle() {
        const isDark = root.dataset.theme === "dark";
        toggle.setAttribute("aria-pressed", isDark);
        toggle.textContent = `Switch to ${isDark ? "light" : "dark"} mode`;
    }

    toggle.addEventListener("click", () => {
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", root.dataset.theme);
        updateToggle();
    });

    updateToggle();
});
