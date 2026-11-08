const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

root.dataset.theme = savedTheme === "dark" ? "dark" : "light";

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#theme-toggle");
    const menuToggle = document.querySelector("#menu-toggle");
    const navigation = document.querySelector("#primary-navigation");

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

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isOpen);
        navigation.dataset.open = !isOpen;
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.setAttribute("aria-expanded", "false");
            navigation.dataset.open = "false";
        });
    });

    updateToggle();
});
