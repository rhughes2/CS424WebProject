function addPinterestIcon() {
    const socialIconsSection = document.querySelector('.social-icons-section');
  
    // Create anchor element for Pinterest
    const pinterestLink = document.createElement('a');
    pinterestLink.href = 'https://www.pinterest.com';
    pinterestLink.target = '_blank';
    pinterestLink.rel = 'noopener noreferrer';
    pinterestLink.title = 'Visit our Pinterest page';
    pinterestLink.classList.add('pinterest'); // Add a class for specific styling
  
    // Create Font Awesome Pinterest icon
    const pinterestIcon = document.createElement('i');
    pinterestIcon.className = 'fab fa-pinterest';
    pinterestLink.appendChild(pinterestIcon);
  
    // Append the Pinterest link to the social-icons-section
    socialIconsSection.appendChild(pinterestLink);
  }
  
  addPinterestIcon();
  