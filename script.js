// Hide loading screen after the page is fully loaded
window.onload = function() {
    const loadingScreen = document.querySelector('.loading');
    loadingScreen.style.display = 'none';  // Hide the loading screen
};

// Optional: You can add a delay to the splash screen if you want it to appear longer before disappearing
setTimeout(function() {
    const loadingScreen = document.querySelector('.loading');
    loadingScreen.style.display = 'none';  // Hide the loading screen after a set time
}, 5000);  // 3000ms = 3 seconds

// Get the last updated date and format it
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdated = document.getElementById('lastUpdated');
    
    // Get the date the page was last modified
    const lastModifiedDate = new Date(document.lastModified);
    
    // Format the date to a readable string
    const formattedDate = lastModifiedDate.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Set the last updated date in the footer
    lastUpdated.textContent = `Last Updated: ${formattedDate}`;
});
