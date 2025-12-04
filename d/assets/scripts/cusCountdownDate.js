function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const timeDifference = targetDate - now;

    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds, timeDifference };
}

function updateCountdown() {
    const countdownElements = document.querySelectorAll('[cusTimeCountdown-date]');

    countdownElements.forEach(countdownElement => {
        const dateAttr = countdownElement.getAttribute("cusTimeCountdown-date");
        const timeAttr = countdownElement.getAttribute("cusTimeCountdown-time");
        const timeZoneAttr = countdownElement.getAttribute("cusTimeCountdown-timeZone");

        const [day, month, year] = dateAttr.split("-").map(Number);
        const [hour, minute] = timeAttr.split(":").map(Number);

        if (isNaN(day) || isNaN(month) || isNaN(year) || isNaN(hour) || isNaN(minute)) {
            countdownElement.textContent = "Invalid date/time format";
            return;
        }

        const timeZoneOffset = parseInt(timeZoneAttr.replace('GMT', ''), 10);
        const targetDate = new Date(Date.UTC(year, month - 1, day, hour - timeZoneOffset, minute));

        if (isNaN(targetDate.getTime())) {
            countdownElement.textContent = "Invalid target date";
            return;
        }

        const { days, hours, minutes, seconds, timeDifference } = calculateTimeRemaining(targetDate);

        if (timeDifference <= 0) {
            countdownElement.textContent = "JAM Started";
        } else {
            const timeParts = [];
            if (days > 0) timeParts.push(`<span>${days}d</span>`);
            if (hours > 0) timeParts.push(`<span>${hours}hr</span>`);
            if (minutes > 0) timeParts.push(`<span>${minutes}min</span>`);
            if (seconds > 0) timeParts.push(`<span>${seconds}sec</span>`);

            countdownElement.innerHTML = timeParts.join(',&nbsp;') + ' ';
        }
    });
}

setInterval(updateCountdown, 1000);
