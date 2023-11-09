export const header = () => {
    var blackElements = document.querySelectorAll('.change-black-element'); // Получаем все элементы с классом 'change-black-element'
    var header = document.querySelector('.header');
    var classChange = 'blackHead';

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY; // Получаем позицию скролла

        header.classList.remove(classChange); // Удаляем класс, если он уже присвоен

        blackElements.forEach(function (element) {
            var blackBlockTop = element.getBoundingClientRect().top + window.scrollY; // Получаем начало блока
            var blackBlockBottom = blackBlockTop + element.offsetHeight; // Получаем конец блока

            if (scrollPosition >= blackBlockTop && scrollPosition <= blackBlockBottom) {
                header.classList.add(classChange);
            }
        });
    })
}