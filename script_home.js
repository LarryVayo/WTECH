
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


const images = [
    'images/bicycle.jpg',
    'images/ski2.jpg',
    'images/ski3.webp'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');

setInterval(() => {
    // Fade out obrázka
    slideshow.style.opacity = 0;

    // Po 1 sekunde zmeň zdroj obrázka a fade in
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.src = images[currentIndex];
        slideshow.style.opacity = 1;
    }, 1000); // 1000 ms = 1 sekunda (čas pre fade out/in)
}, 6000); // Prehrávanie obrázka každé 3 sekundy (vrátane času fade efektu)






const sizeOptions = document.querySelectorAll('.size-option');

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        // odstráň .active zo všetkých
        sizeOptions.forEach(o => o.classList.remove('active'));
        // pridaj .active na kliknutý
        option.classList.add('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
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
});


const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

// Pre každý thumbnail pridáme event listener na kliknutie
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src; // Zmení zdroj hlavného obrázka na zdroj kliknutého thumbnailu
    });
});



// Získaj referenciu na plus tlačidlo a skryté input
const addImageBtn = document.getElementById('addImageBtn');
const fileInput = document.getElementById('fileInput');

// Kliknutím na plus tlačidlo -> otvorí sa dialóg na výber súboru
addImageBtn.addEventListener('click', () => {
    fileInput.click();
});

// Keď používateľ vyberie súbor
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    console.log("Nahraný súbor:", file);
    // Tu môžeš súbor zobraziť ako nový thumbnail, odoslať na server, atď.
});




const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', function() {
    const icon = this.querySelector('i');
    // Ak má ikona triedu 'far', prepni ju na 'fas'
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        // Inak ju vráť späť na 'far'
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
});