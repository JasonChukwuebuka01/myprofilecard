
function updateEpochTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    if (timeElement) {
        // Date.now() returns the number of milliseconds since Jan 1, 1970
        timeElement.textContent = Date.now();
    }
};

// Update the time immediately on load
updateEpochTime();


setInterval(updateEpochTime, 10);
