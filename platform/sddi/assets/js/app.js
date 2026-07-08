const toggle = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

if (toggle && sidebar && main) {

    toggle.addEventListener('click', () => {

        sidebar.classList.toggle('collapsed');
        main.classList.toggle('expanded');

    });

}