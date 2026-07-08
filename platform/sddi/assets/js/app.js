console.log("AMARTRACK Government Design System Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("toggleSidebar");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");

    if (!toggle || !sidebar || !main) {
        console.error("Sidebar elements not found.");
        return;
    }

    toggle.addEventListener("click", () => {

        sidebar.classList.toggle("collapsed");
        main.classList.toggle("expanded");

    });

});