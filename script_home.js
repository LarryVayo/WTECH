
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


const sizeOptions = document.querySelectorAll('.size-option');

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        // odstráň .active zo všetkých
        sizeOptions.forEach(o => o.classList.remove('active'));
        // pridaj .active na kliknutý
        option.classList.add('active');
    });
});


const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const qtyInput = document.querySelector('.qty-input');

minusBtn.addEventListener('click', () => {
    let currentValue = parseInt(qtyInput.value) || 0;
    if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
    }
});

plusBtn.addEventListener('click', () => {
    let currentValue = parseInt(qtyInput.value) || 0;
    qtyInput.value = currentValue + 1;
});



const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

// Pre každý thumbnail pridáme event listener na kliknutie
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src; // Zmení zdroj hlavného obrázka na zdroj kliknutého thumbnailu
    });
});