document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const header = document.getElementById("header");

    content.classList.add("fade-in");
    header.classList.add("fade-in");

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            content.classList.add("fade-out");
            header.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = link.href;
            }, 1000);
        });
    });
});


function createSnowflakes() {
    const snowContainer = document.getElementById('snow');
    const snowflakeCount = 40;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.width = `${Math.random() * 7 + 3}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 20}s`;

        snowContainer.appendChild(snowflake);
    }
}

createSnowflakes();

/// <div class="snow" id="snow"></div> ///
