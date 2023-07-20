export const modalContactUs = () => {
    const html = document.querySelector('html');
    const contactUsBtns = document.querySelectorAll('.contactUs');
    const modalContactUs = document.querySelector('.modalContactUs');
    const modalContactUsCloseBtn = document.querySelector('.modalContactUs--bg');
  
    contactUsBtns.forEach((contactUsBtn) => {
      contactUsBtn.addEventListener('click', () => {
        modalContactUs.style.display = "block";
        html.style.overflow = 'hidden';
      });
    });
  
    modalContactUs.addEventListener('click', (e) => {
      if (e.target === modalContactUs || e.target === modalContactUsCloseBtn) {
        modalContactUs.style.display = "none";
        html.style.overflow = 'auto';
      }
    });
  };
  