// Selecció del contenidor principal
const mainContent = document.getElementById("main-content");

// Continguts per seccions
const sections = {
    presentacio: {    
        ca: `
            <section id="presentacio">
                <h2>Història i Filosofia</h2>
                <div class="content">
                    <!-- Història -->
                    <div class="historia">
                        <h3>La Història</h3>
                        <img src="Fotos lluis/img_portada_els3.jpg" alt="Història del Restaurant" class="imagen-historia">
                        <p>El Celler de Can Roca va obrir les seves portes el 1986 a Girona. Des dels seus inicis humils com un petit restaurant familiar, s’ha convertit en un referent mundial de la cuina contemporània, gràcies al treball dels tres germans Roca: Joan, Josep i Jordi. Amb el temps, han anat ampliant la seva oferta gastronòmica, incorporant nous plats innovadors que fusionen tradició i modernitat, i guanyant reconeixement internacional.</p>
                        <p>Durant les primeres dècades de funcionament, el restaurant va créixer gràcies a la seva capacitat d’adaptar-se als nous temps i a l’aposta per una cuina d’avantguarda, treballant amb productes locals i d’alta qualitat. Avui en dia, "El Celler de Can Roca" és un dels restaurants més guardonats i reconeguts a nivell mundial.</p>
                    </div>

                    <!-- Filosofia -->
                    <div class="filosofia">
                        <h3>La Filosofia</h3>
                        <p>La cuina del restaurant es fonamenta en tres grans pilars: la sostenibilitat, la proximitat i la passió per l’art culinari. Els germans Roca creuen fermament en el respecte per la terra i els seus productes, apostant per una cuina que respecti els cicles naturals i els productes de temporada. Així, treballen estretament amb petits productors locals i utilitzen ingredients de màxima qualitat per crear plats que no només són una explosió de sabors, sinó també una experiència visual i sensorial per als comensals.</p>
                        <p>La filosofia de cuina de "El Celler de Can Roca" combina tècniques tradicionals amb innovació i creativitat, oferint als clients una experiència única, on cada plat té una història pròpia. La recerca constant de la perfecció i la cura en cada detall fa que el restaurant sigui una destinació imprescindible per als amants de la bona cuina.</p>
                        <img src="Fotos lluis/cuina-principal.jpg" alt="Filosofia del Restaurant" class="imagen-filosofia">
                    </div>
                </div>
            </section>
        `,
        en: `
            <section id="presentacio">
                <h2>History and Philosophy</h2>
                <div class="content">
                    <!-- History -->
                    <div class="historia">
                        <h3>The History</h3>
                        <img src="Fotos lluis/img_portada_els3.jpg" alt="Restaurant History" class="imagen-historia">
                        <p>El Celler de Can Roca opened its doors in 1986 in Girona. From its humble beginnings as a small family restaurant, it has become a global reference in contemporary cuisine, thanks to the work of the three Roca brothers: Joan, Josep, and Jordi. Over time, they have expanded their gastronomic offerings, incorporating new innovative dishes that fuse tradition and modernity, gaining international recognition.</p>
                        <p>During the first decades of its operation, the restaurant grew thanks to its ability to adapt to the times and its commitment to avant-garde cuisine, working with local and high-quality products. Today, "El Celler de Can Roca" is one of the most awarded and recognized restaurants worldwide.</p>
                    </div>

                    <!-- Philosophy -->
                    <div class="filosofia">
                        <h3>The Philosophy</h3>
                        <p>The restaurant’s cuisine is based on three main pillars: sustainability, proximity, and passion for culinary art. The Roca brothers firmly believe in respecting the land and its products, betting on a cuisine that respects natural cycles and seasonal products. They work closely with small local producers and use top-quality ingredients to create dishes that are not only an explosion of flavors but also a visual and sensory experience for diners.</p>
                        <p>The philosophy of "El Celler de Can Roca" combines traditional techniques with innovation and creativity, offering customers a unique experience, where each dish tells its own story. The constant search for perfection and attention to detail make the restaurant a must-visit destination for food lovers.</p>
                        <img src="Fotos lluis/cuina-principal.jpg" alt="Restaurant Philosophy" class="imagen-filosofia">
                    </div>
                </div>
            </section>
        `
    },
    menu: {
        ca: `
            <section id="menu">
                <h2>El Menú</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <img src="Fotos lluis/Musclos_Salsa.jpg" alt="Musclos">
                        <div class="menu-text">Musclo de buixot amb salsa cafe de París</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/PatatesBraves.jpg" alt="Braves">
                        <div class="menu-text">Patates braves</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Pa_Foie.jpg" alt="Foie">
                        <div class="menu-text">Foie d'ànec</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Pures_Verdures.jpg" alt="Pures">
                        <div class="menu-text">Tast de pures de verdures</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Wagyu.jpg" alt="Wagyu">
                        <div class="menu-text">Wagyu japonés </div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Salmo_Alaska.jpg" alt="Salmó">
                        <div class="menu-text">Salmó d'Alaska</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Arros_Negre.png" alt="Arrós">
                        <div class="menu-text">Arrós negre amb chipirons i llengostins</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Ratatouille.jpg" alt="Ratatoullie">
                        <div class="menu-text">Ratatoullie</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/CheeseCake.png" alt="Cheescake">
                        <div class="menu-text">Cheescake amb fruits del bosc</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/LemonPie.jpg" alt="Lemon pie">
                        <div class="menu-text">Lemon pie</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/gelat.jpg" alt="Gelat">
                        <div class="menu-text">Gelat de vainilla</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/MousseXoco.jpg" alt="Mousse">
                        <div class="menu-text">Mousse de xocolata</div>
                    </div>
                </div>
            </section>
        `,
        en: `
            <section id="menu">
                <h2>The Menu</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <img src="Fotos lluis/Musclos_Salsa.jpg" alt="Mussels">
                        <div class="menu-text">Mussels with Paris café sauce</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/PatatesBraves.jpg" alt="Bravas Potatoes">
                        <div class="menu-text">Bravas Potatoes</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Pa_Foie.jpg" alt="Foie">
                        <div class="menu-text">Duck Foie</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Pures_Verdures.jpg" alt="Purées">
                        <div class="menu-text">Tasting of vegetable purées</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Wagyu.jpg" alt="Wagyu">
                        <div class="menu-text">Japanese Wagyu</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Salmo_Alaska.jpg" alt="Salmon">
                        <div class="menu-text">Alaskan Salmon</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Arros_Negre.png" alt="Black Rice">
                        <div class="menu-text">Black rice with squid and prawns</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/Ratatouille.jpg" alt="Ratatouille">
                        <div class="menu-text">Ratatouille</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/CheeseCake.png" alt="Cheesecake">
                        <div class="menu-text">Cheesecake with forest fruits</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/LemonPie.jpg" alt="Lemon Pie">
                        <div class="menu-text">Lemon Pie</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/gelat.jpg" alt="Ice Cream">
                        <div class="menu-text">Vanilla ice cream</div>
                    </div>
                    <div class="menu-item">
                        <img src="Fotos lluis/MousseXoco.jpg" alt="Chocolate Mousse">
                        <div class="menu-text">Chocolate mousse</div>
                    </div>
                </div>
            </section>
        `
    },
    galeria: {
        ca: `
            <section id="gallery" class="container my-5">
                <h2>Galeria</h2>
                <div class="carousel">
                    <!-- Carousel Image -->
                    <img id="carousel" src="" alt="Carousel Image" class="carousel-img" />
                    <!-- Navigation Buttons -->
                    <button id="left-btn" class="carousel-control-prev">Anterior</button>
                    <button id="right-btn" class="carousel-control-next">Següent</button>
                </div>
            </section>
        `,
        en: `
            <section id="gallery" class="container my-5">
                <h2>Gallery</h2>
                <div class="carousel">
                    <!-- Carousel Image -->
                    <img id="carousel" src="" alt="Carousel Image" class="carousel-img" />
                    <!-- Navigation Buttons -->
                    <button id="left-btn" class="carousel-control-prev">Previous</button>
                    <button id="right-btn" class="carousel-control-next">Next</button>
                </div>
            </section>
        `
    },
    enllacos: {
        ca: `
            <section id="enllacos">
                <h2>Enllaços d'Interès</h2>
                <ul>
                    <li><a href="https://cellercanroca.com" target="_blank">Pàgina Oficial d'El Celler de Can Roca</a></li>
                    <li><a href="https://www.theworlds50best.com" target="_blank">The World's 50 Best Restaurants</a></li>
                    <li><a href="https://www.michelin.com" target="_blank">Guia Michelin</a></li>
                    <li><a href="https://www.girona.cat/turisme" target="_blank">Turisme a Girona</a></li>
                </ul>
            </section>
        `,
        en: `
            <section id="enllacos">
                <h2>Links of Interest</h2>
                <ul>
                    <li><a href="https://cellercanroca.com" target="_blank">Official Website of El Celler de Can Roca</a></li>
                    <li><a href="https://www.theworlds50best.com" target="_blank">The World's 50 Best Restaurants</a></li>
                    <li><a href="https://www.michelin.com" target="_blank">Michelin Guide</a></li>
                    <li><a href="https://www.girona.cat/turisme" target="_blank">Tourism in Girona</a></li>
                </ul>
            </section>
        `
    }
};

// Default language
let currentLanguage = "ca";

// Load a specific section based on current language
function loadSection(section) {
    mainContent.innerHTML = sections[section][currentLanguage];
    if (section === "galeria") {
        setupCarousel();
    }
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === "ca" ? "en" : "ca";
    document.getElementById("language-toggle").textContent = currentLanguage === "ca" ? "English" : "Català";

    // Reload the current section based on the new language
    const activeSection = document.querySelector("nav ul li button.active")?.getAttribute("data-page") || "presentacio";
    loadSection(activeSection);
}

// Carousel setup
function setupCarousel() {
    const img = document.getElementById("carousel");
    const rightBtn = document.getElementById("right-btn");
    const leftBtn = document.getElementById("left-btn");

    let pictures = [
        "Celler/Imatge_1.jpg",
        "Celler/Imatge_2.jpg",
        "Celler/Imatge_3.jpg",
        "Celler/Imatge_4.jpg",
        "Celler/Imatge_5.jpg"
    ];

    img.src = pictures[0];
    let position = 0;

    const moveRight = () => {
        position = (position + 1) % pictures.length;
        img.src = pictures[position];
    };

    const moveLeft = () => {
        position = (position - 1 + pictures.length) % pictures.length;
        img.src = pictures[position];
    };

    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
}

// Initialize sections
document.addEventListener("DOMContentLoaded", () => {
    // Load the initial section
    loadSection("presentacio");

    // Add navigation event listeners
    document.querySelectorAll("nav ul li button").forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("data-page");
            document.querySelectorAll("nav ul li button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            loadSection(page);
        });
    });

    // Add language toggle event listener
    const languageToggle = document.getElementById("language-toggle");
    languageToggle.addEventListener("click", toggleLanguage);
    
});
const themeToggleBtn = document.getElementById('theme-toggle');

// Check the current theme from localStorage (if any)
let currentTheme = localStorage.getItem('theme') || 'light'; 

// Apply the theme initially
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '🌞'; // Sun icon for light mode toggle
} else {
    themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode toggle
}

themeToggleBtn.addEventListener('click', () => {
    // Toggle between dark and light theme
    if (currentTheme === 'light') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '🌞'; // Change to sun for light mode
        currentTheme = 'dark'; // Update theme to dark
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙'; // Change to moon for dark mode
        currentTheme = 'light'; // Update theme to light
    }
    
    // Save theme preference in localStorage
    localStorage.setItem('theme', currentTheme);
});
