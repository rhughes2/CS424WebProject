function addInstagramIcon() {
    const socialIconsSection = document.querySelector('.social-icons-section');
  
    const instagramLink = document.createElement('a');
    instagramLink.href = 'https://www.instagram.com';
    instagramLink.target = '_blank';
    instagramLink.rel = 'noopener noreferrer';
    instagramLink.title = 'Visit our Instagram page';
  
    const instagramIcon = document.createElement('i');
    instagramIcon.className = 'fab fa-instagram';
    instagramLink.appendChild(instagramIcon);
  
    socialIconsSection.appendChild(instagramLink);
  }
  
  addInstagramIcon();
  