document.querySelector('.btn-explore').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#highlights').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.btn-contact').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add delay for highlights items to appear
const highlightItems = document.querySelectorAll('.highlight-item');
highlightItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});
