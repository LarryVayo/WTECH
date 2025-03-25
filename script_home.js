
// Event listener pre vyhľadávaciu ikonu (lupu)
document.querySelector('.icon-find').addEventListener('click', function(event) {
    event.preventDefault(); // zabránime predvolenej akcii odkazu
    document.querySelector('.searching_bar').classList.toggle('active');
});

// Event listener pre hamburger menu
const hamburger = document.querySelector('.hamburger');
const categories = document.querySelector('.categories');

hamburger.addEventListener('click', () => {
    // Prepína triedu .active na elemente .categories
    categories.classList.toggle('active');
});