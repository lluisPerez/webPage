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
            <img src="Fotos lluis/Musclos_Salsa.jpg" alt="Musclos">
            <div class="menu-text">Musclo de buixot amb salsa cafe de París</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/PatatesBraves.jpg" alt="Braves">
            <div class="menu-text">Patates braves</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/Pa_Foie.jpg" alt="Foie">
            <div class="menu-text">Foie d'ànec</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/Pures_Verdures.jpg" alt="Pures">
            <div class="menu-text">Tast de pures de verdures</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/Wagyu.jpg" alt="Wagyu">
            <div class="menu-text">Wagyu japonés </div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/Salmo_Alaska.jpg" alt="Salmó">
            <div class="menu-text">Salmó d'Alaska</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/Arros_Negre.png" alt="Arrós">
            <div class="menu-text">Arrós negre amb chipirons i llengostins</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/Ratatouille.jpg" alt="Ratatoullie">
            <div class="menu-text">Ratatoullie</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/CheeseCake.png" alt="Cheescake">
            <div class="menu-text">Cheescake amb fruits del bosc</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/LemonPie.jpg" alt="Lemon pie">
            <div class="menu-text">Lemon pie</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/gelat.jpg" alt="Gelat">
            <div class="menu-text">Gelat de vainilla</div> <!-- Text explicatiu -->
        </div>
        <div class="menu-item">
            <img src="Fotos lluis/MousseXoco.jpg" alt="Mousse">
            <div class="menu-text">Mousse de xocolata</div> <!-- Text explicatiu -->
        </div>
    </div>
</section>
`,
    galeria: `<section id="gallery" class="container my-5">
    <h2>Galeria</h2>

    <!-- Carousel 1 -->
    <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- First Slide -->
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_1.jpg" alt="Image 1" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_2.jpg" alt="Image 2" class="d-block w-100">
                    </div>
                </div>
            </div>
            <!-- Second Slide -->
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_3.jpg" alt="Image 3" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_4.jpg" alt="Image 4" class="d-block w-100">
                    </div>
                </div>
            </div>
            <!-- Third Slide -->
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_5.jpg" alt="Image 5" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_6.jpg" alt="Image 6" class="d-block w-100">
                    </div>
                </div>
            </div>
        </div>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Carousel 2 -->
    <div id="carousel2" class="carousel slide my-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- First Slide -->
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_7.jpg" alt="Image 7" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_8.jpg" alt="Image 8" class="d-block w-100">
                    </div>
                </div>
            </div>
            <!-- Second Slide -->
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_9.jpg" alt="Image 9" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_10.jpg" alt="Image 10" class="d-block w-100">
                    </div>
                </div>
            </div>
            <!-- Third Slide -->
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_11.jpg" alt="Image 11" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_12.jpg" alt="Image 12" class="d-block w-100">
                    </div>
                </div>
            </div>
        </div>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Carousel 3 -->
    <div id="carousel3" class="carousel slide my-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- First Slide -->
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_13.jpg" alt="Image 13" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_14.jpg" alt="Image 14" class="d-block w-100">
                    </div>
                </div>
            </div>
            <!-- Second Slide -->
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_15.jpg" alt="Image 15" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_16.jpg" alt="Image 16" class="d-block w-100">
                    </div>
                </div>
            </div>
            <!-- Third Slide -->
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-6">
                        <img src="Celler/Imatge_17.jpg" alt="Image 17" class="d-block w-100">
                    </div>
                    <div class="col-md-6">
                        <img src="Celler/Imatge_18.jpg" alt="Image 18" class="d-block w-100">
                    </div>
                </div>
            </div>
        </div>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
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

// Esdeveniments per a cada botó de navegació
document.querySelectorAll("nav ul li button").forEach(button => {
    button.addEventListener("click", () => {
        const page = button.getAttribute("data-page");
        loadSection(page);
    });
});
