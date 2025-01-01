 function updateTime() {
            const timerElement = document.getElementById("timer"); // Get the timer element
            const now = new Date(); // Get the current date and time

            // Format the date and time
            const formattedDate = now.toLocaleDateString(); // e.g., "1/1/2025"
            const formattedTime = now.toLocaleTimeString(); // e.g., "12:00:00 PM"

            // Update the timer's content
            timerElement.textContent = `${formattedDate}, ${formattedTime}`;
        }

        // Update the time every second
        setInterval(updateTime, 1000);

        // Call the function immediately to avoid delay
        updateTime();