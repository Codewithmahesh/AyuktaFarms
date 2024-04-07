let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


// typewriter
document.addEventListener('DOMContentLoaded', () => {
    let title = document.querySelector('.main_heading');
    let originalText = title.textContent.trim();
    let name = "About Us";
    let dots = "..";
    let index = 0;
    let effectApplied = false;

    const typeWriter = () => {
        if (!effectApplied) {
            if (index < name.length) {
                title.innerText = name.slice(0, index + 1);
            } else {
                let newText = originalText + dots.slice(0, index - name.length + 1).toLowerCase();
                title.innerText = newText;
            }

            index++;

            if (!effectApplied && index === name.length + dots.length) {
                index = name.length; // To prevent index from exceeding name length
            }

            setTimeout(typeWriter, 300);
        }
    }

    typeWriter();
});


