document.addEventListener('DOMContentLoaded', function () {
    const quotes = document.querySelectorAll('.quote');
    let index = 0;

    function showNextQuote() {
        quotes[index].style.opacity = 0;
        index = (index + 1) % quotes.length;
        quotes[index].style.opacity = 1;
    }

    setInterval(showNextQuote, 2000);
});
