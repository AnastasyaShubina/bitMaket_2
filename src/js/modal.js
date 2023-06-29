export const modal = () => {
    const contactUsBtn = document.querySelector('.header--container__contactUs a');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.close');
    const html = document.querySelector('html');

    contactUsBtn.addEventListener('click', () => {
        modal.style.transform = "translateX(0px)";
        modal.classList.add('bounce');
        // html.style.overflowY = 'hidden';
    });

    modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalCloseBtn) {
        modal.style.transform = "translateX(500px)";
        modal.classList.remove('bounce');
        // html.style.overflowY = 'auto';
    }
    });
}