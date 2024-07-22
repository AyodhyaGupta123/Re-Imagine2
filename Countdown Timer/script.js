function startTimer() {
    let countdownSeconds = prompt("Enter the number of seconds to countdown:");
    countdownSeconds = parseInt(countdownSeconds, 10);

    if (isNaN(countdownSeconds) || countdownSeconds <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    const timerElement = document.getElementById('timer');
    timerElement.textContent = countdownSeconds;

    const interval = setInterval(() => {
        countdownSeconds--;
        timerElement.textContent = countdownSeconds;

        if (countdownSeconds <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
}
