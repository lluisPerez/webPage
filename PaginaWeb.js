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
            <p>La cuina del restaurant es fonamenta en tres grans pilars: la sostenibilitat, la proximitat i la passió per l’art culinari. Els germans Roca creuen fermament en el respecte per la terra i els seus productes, apostant per una cuina que respecti els cicles naturals i els productes de temporada. Així, treballen estretament amb petits productors locals i utilitzen ingredients de màxima qualitat per crear plats que no només són una explosió de sabors, sinó també una experiència visual i sensorial per als comensals.</p>
            <p>La filosofia de cuina de "El Celler de Can Roca" combina tècniques tradicionals amb innovació i creativitat, oferint als clients una experiència única, on cada plat té una història pròpia. La recerca constant de la perfecció i la cura en cada detall fa que el restaurant sigui una destinació imprescindible per als amants de la bona cuina.</p>
            <img src="cuina-principal.jpg" alt="Filosofia del Restaurant" class="imagen-filosofia">
        </div>
    </div>
</section>

    `,
    menu: `
<section id="menu">
    <h2>El Menú</h2>
    <div class="menu-grid">
        <div class="menu-item">
            <img src="Musclos_Salsa.jpg" alt="Musclos">
            <div class="menu-text">Musclo de buixot amb salsa cafe de París</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="PatatesBraves.jpg" alt="Braves">
            <div class="menu-text">Patates braves</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Pa_Foie.jpg" alt="Foie">
            <div class="menu-text">Foie d'ànec</div> <!-- Text explicatiu -->
        </div>
                    <div class="menu-item">
            <img src="Pures_Verdures.jpg" alt="Pures">
            <div class="menu-text">Tast de pures de verdures</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Wagyu.jpg" alt="Wagyu">
            <div class="menu-text">Wagyu japonés </div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Salmo_Alaska.jpg" alt="Salmó">
            <div class="menu-text">Salmó d'Alaska</div> <!-- Text explicatiu -->
        </div>
                    <div class="menu-item">
            <img src="Arros_Negre.png" alt="Arrós">
            <div class="menu-text">Arrós negre amb chipirons i llengostins</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Ratatouille.jpg" alt="Ratatoullie">
            <div class="menu-text">Ratatoullie</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="CheeseCake.png" alt="Cheescake">
            <div class="menu-text">Cheescake amb fruits del bosc</div> <!-- Text explicatiu -->
        </div>
                    <div class="menu-item">
            <img src="LemonPie.jpg" alt="Lemon pie">
            <div class="menu-text">Lemon pie</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="gelat.jpg" alt="Gelat">
            <div class="menu-text">Gelat de vainilla</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="MousseXoco.jpg" alt="Mousse">
            <div class="menu-text">Mousse de xocolata</div> <!-- Text explicatiu -->
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
            <img src="Imatge_1.jpg" alt="Image 1">
            <img src="Imatge_2.jpg" alt="Image 2">
            <img src="Imatge_3.jpg" alt="Image 3">
            <img src="Imatge_4.jpg" alt="Image 4">
            <img src="Imatge_5.jpg" alt="Image 5">
            <img src="Imatge_6.jpg" alt="Image 6">
        </div>

        <!-- Fila 2 -->
        <div class="gallery-row">
            <img src="Imatge_7.jpg" alt="Image 7">
            <img src="Imatge_8.jpg" alt="Image 8">
            <img src="Imatge_9.jpg" alt="Image 9">
            <img src="Imatge_10.jpg" alt="Image 10">
            <img src="Imatge_11.jpg" alt="Image 11">
            <img src="Imatge_12.jpg" alt="Image 12">
        </div>

        <!-- Fila 3 -->
        <div class="gallery-row">
            <img src="Imatge_13.jpg" alt="Image 13">
            <img src="Imatge_14.jpg" alt="Image 14">
            <img src="Imatge_15.jpg" alt="Image 15">
            <img src="Imatge_16.jpg" alt="Image 16">
            <img src="Imatge_17.jpg" alt="Image 17">
            <img src="Imatge_18.jpg" alt="Image 18">
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
