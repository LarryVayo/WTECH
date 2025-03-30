let currentPage = 1;
const totalPages = 3;

// Vyber všetky odkazy (tlačidlá)
const links = document.querySelectorAll('.pagination li a');

// Funkcia na aktualizáciu tried
function updatePagination() {
    // Najprv odstráň .active zo všetkých tlačidiel
    links.forEach(link => link.classList.remove('active', 'disabled'));

    // Prejdi všetky tlačidlá a zisti, či je to šípka alebo číslo
    links.forEach(link => {
        const page = link.getAttribute('data-page');

        if (page === String(currentPage)) {
            // Nájde link s data-page == currentPage a označí ho ako active
            link.classList.add('active');
        }
        if (page === 'prev' && currentPage === 1) {
            // Na prvej strane je šípka doľava neaktívna
            link.classList.add('disabled');
        }
        if (page === 'next' && currentPage === totalPages) {
            // Na poslednej strane je šípka doprava neaktívna
            link.classList.add('disabled');
        }
    });
}

// Počiatočná inicializácia
updatePagination();

// Pridaj event listener na každé tlačidlo
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // zamedzí reloadu stránky
        const page = link.getAttribute('data-page');

        if (page === 'prev') {
            // Posun doľava (ak nie sme na 1)
            if (currentPage > 1) {
                currentPage--;
            }
        } else if (page === 'next') {
            // Posun doprava (ak nie sme na totalPages)
            if (currentPage < totalPages) {
                currentPage++;
            }
        } else {
            // Klik na konkrétne číslo
            currentPage = parseInt(page);
        }

        updatePagination();
        console.log('Aktuálna strana:', currentPage);
    });
});