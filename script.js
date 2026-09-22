document.addEventListener("DOMContentLoaded", function () {

    /* ANIMACIONES */

    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(function (element) {
        observer.observe(element);
    });


    /* CONTADOR */

    const eventDate = new Date("December 12, 2026 21:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        if (distance > 0) {

            if (daysElement) {
                daysElement.textContent = days;
            }

            if (hoursElement) {
                hoursElement.textContent = hours;
            }

            if (minutesElement) {
                minutesElement.textContent = minutes;
            }

            if (secondsElement) {
                secondsElement.textContent = seconds;
            }

        } else {

            if (daysElement) daysElement.textContent = "0";
            if (hoursElement) hoursElement.textContent = "0";
            if (minutesElement) minutesElement.textContent = "0";
            if (secondsElement) secondsElement.textContent = "0";
        }
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);


    /* MÚSICA */

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    if (music && musicButton) {

        musicButton.addEventListener("click", function () {

            if (music.paused) {
                music.play()
                    .then(function () {
                        musicButton.textContent = "🔊 Música";
                    })
                    .catch(function () {
                        musicButton.textContent = "▶ Música";
                    });

            } else {

                music.pause();
                musicButton.textContent = "🔇 Música";
            }
        });
    }

});
