function addYouTubeIcon() {
    const socialIconsSection = document.querySelector('.social-icons-section');
  
    const youtubeLink = document.createElement('a');
    youtubeLink.href = 'https://www.youtube.com';
    youtubeLink.target = '_blank';
    youtubeLink.rel = 'noopener noreferrer';
    youtubeLink.title = 'Visit our YouTube channel';
  
    const youtubeIcon = document.createElement('i');
    youtubeIcon.className = 'fab fa-youtube';
    youtubeLink.appendChild(youtubeIcon);
  
    socialIconsSection.appendChild(youtubeLink);
  }
  
  addYouTubeIcon();
  