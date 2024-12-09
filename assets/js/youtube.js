function addYouTubeIcon() {
    const footer = document.querySelector('footer .social-icons-section'); // Find the social icons container

    // Create a new anchor tag for the YouTube link
    const youtubeLink = document.createElement('a');
    youtubeLink.href = 'https://www.youtube.com'; // Set the YouTube URL
    youtubeLink.target = '_blank'; // Open the link in a new tab
    youtubeLink.rel = 'noopener noreferrer'; // Security measure when using target="_blank"
    youtubeLink.title = 'Visit our YouTube channel'; // Tooltip text

    // Create an icon using Font Awesome
    const youtubeIcon = document.createElement('i');
    youtubeIcon.className = 'fab fa-youtube'; // Font Awesome class for YouTube icon
    youtubeIcon.style.fontSize = '32px'; // Adjust icon size
    youtubeIcon.style.color = '#FF0000'; // YouTube red color

    // Add hover effect
    youtubeIcon.onmouseover = () => (youtubeIcon.style.color = '#CC0000'); // Darker red on hover
    youtubeIcon.onmouseout = () => (youtubeIcon.style.color = '#FF0000'); // Default red on mouse out

    // Append the icon to the anchor tag
    youtubeLink.appendChild(youtubeIcon);

    // Append the anchor tag to the footer's social icons section
    footer.appendChild(youtubeLink);
}

// Call the function on page load
window.onload = function () {
    addYouTubeIcon();
};
