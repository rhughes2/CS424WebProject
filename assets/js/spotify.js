function addSpotifyIcon() {
    const socialIconsSection = document.querySelector('.social-icons-section');
  
    // Create anchor element for Spotify
    const spotifyLink = document.createElement('a');
    spotifyLink.href = 'https://www.spotify.com';
    spotifyLink.target = '_blank';
    spotifyLink.rel = 'noopener noreferrer';
    spotifyLink.title = 'Visit our Spotify page';
  
    // Create Font Awesome Spotify icon
    const spotifyIcon = document.createElement('i');
    spotifyIcon.className = 'fab fa-spotify';
    spotifyLink.appendChild(spotifyIcon);
  
    // Append the Spotify link to the social-icons-section
    socialIconsSection.appendChild(spotifyLink);
  }
  
  addSpotifyIcon();
  