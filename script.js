var audio = new Audio('song1.mp3');
audio.loop = true; // Set the loop attribute to true to play the audio in a loop
audio.play();

// You can also use the 'ended' event to restart the audio when it finishes
audio.addEventListener('ended', function() {
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();
});


var messages = [
    "Just in case you need to know, I fall in love with you a little bit more Little bit, little bit, a little bit more",
    "Every time I think I've lost my way I fall in love with you a little bit more Little bit, little bit more than before",
    "Even on the days I'm not so sure I fall in love with you a little bit more",
    "I thought I knew every little thing about you There's always more of you to learn",
    "You try your best to show your worst Baby, you can rest assured",
    "Baby, you can rest assured I'll always be here for you Always be here for you"
];

var currentTypeItInstance;

function changeContent(imageSrc, index) {
    // Get the imgpart div and set its inner HTML to display the selected image
    document.getElementById('imgpart').innerHTML = '<img id="im" src="' + imageSrc + '">';

    // Clear the previous TypeIt instance if it exists
    if (currentTypeItInstance) {
        currentTypeItInstance.destroy();
    }

    // Set the inner HTML of the message element to an empty string
    document.getElementById('message').innerHTML = '';

    // Create a new TypeIt instance to display the message in the textpart with a typewriter effect
    currentTypeItInstance = new TypeIt('#message', {
        strings: [messages[index]], // Use an array with only the current message
        speed: 50, // Adjust the typing speed
    }).go();
}
