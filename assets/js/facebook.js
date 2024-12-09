function addFacebookIcon() {
    const socialIconsSection = document.querySelector('.social-icons-section');
  
    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://www.facebook.com';
    facebookLink.target = '_blank';
    facebookLink.rel = 'noopener noreferrer';
    facebookLink.title = 'Visit our Facebook page';
  
    const facebookIcon = document.createElement('i');
    facebookIcon.className = 'fab fa-facebook';
    facebookLink.appendChild(facebookIcon);
  
    socialIconsSection.appendChild(facebookLink);
  }
  
  addFacebookIcon();
  