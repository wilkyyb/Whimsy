const userName = 'Juuso'; 

// Main function to update the greeting and clock
function updateClockAndGreeting() {
    const greetingElement = document.getElementById('greeting');
    const clockElement = document.getElementById('clock');
    
    const now = new Date();
    const { hours, minutes } = getTime(now); 
    const formattedTime = formatTime(hours, minutes); 
    
    const greeting = getGreeting(hours); 

    greetingElement.textContent = `${greeting}, ${userName}! 👋`;
    clockElement.textContent = `Kello on nyt ${formattedTime}`;  
}

// Function to extract hours and minutes from a Date object
function getTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return { hours, minutes };
}

// Updated: Function to format time to a 24-hour format (HH:mm)
function formatTime(hours, minutes) {
    // Adds a leading zero if hours or minutes are less than 10
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    return `${formattedHours}:${formattedMinutes}`;
}

// Function to determine the greeting message based on the time of day
function getGreeting(hours) {
    if (hours < 12) {
        return 'Hyvää huomenta'; 
    } else if (hours < 18) {
        return 'Hyvää iltapäivää'; 
    } else {
        return 'Hyvää iltaa'; 
    }
}

// Set interval to update greeting and clock every minute
setInterval(updateClockAndGreeting, 60000);

// Initial call to display greeting and clock immediately
updateClockAndGreeting();
