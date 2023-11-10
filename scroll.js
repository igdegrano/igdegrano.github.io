window.addEventListener('scroll', function() {
    var div = document.querySelector('header');
    if (window.scrollY > 10) {
        div.classList.add('sticky');
    } else {
        div.classList.remove('sticky');
    }
});