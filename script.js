// JavaScript code for the website

function showLocationPopup() {
    var popup = document.getElementById("location-popup");
    popup.style.display = "block";
}

function getLocation() {
    // Code to get user's location here
    // You'll need to implement this part using the Geolocation API or other methods
    // Once you have the location, you can store it or perform other actions
    // For this example, we'll simply close the popup
    var popup = document.getElementById("location-popup");
    popup.style.display = "none";
}
