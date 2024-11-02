document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".content");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons and content
            buttons.forEach((btn) => btn.classList.remove("active"));
            contents.forEach((content) => content.classList.remove("active"));

            // Add 'active' class to clicked button and corresponding content
            button.classList.add("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });
});
