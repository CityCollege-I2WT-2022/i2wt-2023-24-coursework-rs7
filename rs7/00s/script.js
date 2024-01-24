// Execute the following code when the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables
    var currentIndex = 0; // Current index of the displayed player

    var players = document.querySelectorAll('.player-card'); // Select all elements with class 'player-card'
    var totalPlayers = players.length; // Total number of player cards

    // Function to show/hide player cards based on the provided index
    function showPlayer(index) {
        // Iterate through all player cards using forEach
        players.forEach((player, idx) => {
            // Set display property to 'block' for the player at the current index, 'none' for others
            player.style.display = idx === index ? 'block' : 'none';
        });
    }

    // Event listener for the 'prev' button
    document.getElementById('prev').addEventListener('click', function () {
        // Update the current index, ensuring it stays within valid bounds
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalPlayers - 1;
        // Show the player corresponding to the updated index
        showPlayer(currentIndex);
    });
    // Event listener for the 'next' button
    document.getElementById('next').addEventListener('click', function () {
        // Update the current index, ensuring it loops back to 0 if it exceeds the total number of players
        currentIndex = currentIndex < totalPlayers - 1 ? currentIndex + 1 : 0;
        // Show the player corresponding to the updated index
        showPlayer(currentIndex);
    });
    // Show the first player initially when the page loads
    showPlayer(0);
});
