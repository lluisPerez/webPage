// Selecció del contenidor principal
const mainContent = document.getElementById("main-content");



// Continguts per seccions
const sections = {
    presentacio: `
<section id="presentacio">
    <h2>Història i Filosofia</h2>
    <div class="content">
        <!-- Història -->
        <div class="historia">
            <h3>La Història</h3>
            <img src="img_portada_els3.jpg" alt="Història del Restaurant" class="imagen-historia">
            <p>El Celler de Can Roca va obrir les seves portes el 1986 a Girona. Des dels seus inicis humils com un petit restaurant familiar, s’ha convertit en un referent mundial de la cuina contemporània, gràcies al treball dels tres germans Roca: Joan, Josep i Jordi. Amb el temps, han anat ampliant la seva oferta gastronòmica, incorporant nous plats innovadors que fusionen tradició i modernitat, i guanyant reconeixement internacional.</p>
            <p>Durant les primeres dècades de funcionament, el restaurant va créixer gràcies a la seva capacitat d’adaptar-se als nous temps i a l’aposta per una cuina d’avantguarda, treballant amb productes locals i d’alta qualitat. Avui en dia, "El Celler de Can Roca" és un dels restaurants més guardonats i reconeguts a nivell mundial.</p>
        </div>

        <!-- Filosofia -->
        <div class="filosofia">
            <h3>La Filosofia</h3>
            <img src="img_portada_els3.jpg" alt="Filosofia del Restaurant" class="imagen-filosofia">
            <p>La cuina del restaurant es fonamenta en tres grans pilars: la sostenibilitat, la proximitat i la passió per l’art culinari. Els germans Roca creuen fermament en el respecte per la terra i els seus productes, apostant per una cuina que respecti els cicles naturals i els productes de temporada. Així, treballen estretament amb petits productors locals i utilitzen ingredients de màxima qualitat per crear plats que no només són una explosió de sabors, sinó també una experiència visual i sensorial per als comensals.</p>
            <p>La filosofia de cuina de "El Celler de Can Roca" combina tècniques tradicionals amb innovació i creativitat, oferint als clients una experiència única, on cada plat té una història pròpia. La recerca constant de la perfecció i la cura en cada detall fa que el restaurant sigui una destinació imprescindible per als amants de la bona cuina.</p>
        </div>
    </div>
</section>

    `,
    menu: `
    <section id="menu">
        <h2>El Menú</h2>
        <div class="menu-grid">
            <div class="menu-item">
                <img src="https://via.placeholder.com/400x300?text=Ostra" alt="Ostra">
                <div class="menu-text">Ostra al vapor amb destil·lat de terra</div> <!-- Text explicatiu -->
            </div>
            <div class="menu-item">
                <img src="https://via.placeholder.com/400x300?text=Consomé" alt="Consomé">
                <div class="menu-text">Consomé de poma verda</div> <!-- Text explicatiu -->
            </div>
            <div class="menu-item">
                <img src="https://via.placeholder.com/400x300?text=Postres" alt="Postres">
                <div class="menu-text">Postres làctiques de Jordi Roca</div> <!-- Text explicatiu -->
            </div>
        </div>
    </section>
`,

galeria: `
<section id="gallery" class="image-container">
    <h2>Galeria</h2>
    <div class="gallery" class="image-wrapper">
        <!-- Fila 1 -->
        <div class="gallery-row">
            <img src="image1.jpg" alt="Image 1">
            <img src="image2.jpg" alt="Image 2">
            <img src="image3.jpg" alt="Image 3">
            <img src="image4.jpg" alt="Image 4">
            <img src="image5.jpg" alt="Image 5">
            <img src="image6.jpg" alt="Image 6">
        </div>

        <!-- Fila 2 -->
        <div class="gallery-row">
            <img src="image7.jpg" alt="Image 7">
            <img src="image8.jpg" alt="Image 8">
            <img src="image9.jpg" alt="Image 9">
            <img src="image10.jpg" alt="Image 10">
            <img src="image11.jpg" alt="Image 11">
            <img src="image12.jpg" alt="Image 12">
        </div>

        <!-- Fila 3 -->
        <div class="gallery-row">
            <img src="image13.jpg" alt="Image 13">
            <img src="image14.jpg" alt="Image 14">
            <img src="image15.jpg" alt="Image 15">
            <img src="image16.jpg" alt="Image 16">
            <img src="image17.jpg" alt="Image 17">
            <img src="image18.jpg" alt="Image 18">
        </div>
    </div>
</section>
`,
    enllacos: `
        <section id="enllacos">
            <h2>Enllaços d'Interès</h2>
            <ul>
                <li><a href="https://cellercanroca.com" target="_blank">Pàgina Oficial d'El Celler de Can Roca</a></li>
                <li><a href="https://www.theworlds50best.com" target="_blank">The World's 50 Best Restaurants</a></li>
                <li><a href="https://www.michelin.com" target="_blank">Guia Michelin</a></li>
                <li><a href="https://www.girona.cat/turisme" target="_blank">Turisme a Girona</a></li>
            </ul>
        </section>
    `
};

// Funció per carregar contingut
function loadSection(section) {
    mainContent.innerHTML = sections[section];
}

// Inicialitza amb la pàgina de presentació
loadSection("presentacio");

// Esdeveniments per a cada botó
document.querySelectorAll("nav ul li button").forEach(button => {
    button.addEventListener("click", () => {
        const page = button.getAttribute("data-page");
        loadSection(page);
    });
});
