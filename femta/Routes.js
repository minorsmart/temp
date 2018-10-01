//    var routesH = new HorizontaleLayout();
//    var routesV = new VerticaleLayout();


function Routes(kleur){
    
    var that = this;
    
    this.MIDDEN = new zim.Container(1000,1000);
    this.route;
    this.keuze;
    
    this.keuze = kleur;
    
    this.routeAan=false;

//    if(this.keuze == "geel"){
//       maakRouteGeel();
//    }else if(this.keuze == "aqua"){
//       maakRouteAqua();
//    }else if(this.keuze == "paars"){
//       maakRoutePaars();
//    }

    
    this.maakRoutePaars = function(){
        
        
        that.route = new lib.routePaars();
        that.MIDDEN.addChild(that.route);
        
        var rect = new zim.Rectangle(526, 944);
        rect.x = 237;
        rect.y = 28;
        rect.alpha = 0;
        that.MIDDEN.addChild(rect);

        var mobiel = new lib.scherm();
        mobiel.x = 500;
        mobiel.y = 500;
        that.MIDDEN.addChild(mobiel);
        
        var mask = zim.setMask(that.route, rect);
        
        //laden
        
        aanHetLaden = true;
        
        frame.loadAssets(["ruimzicht.jpg", "bronsbergen.JPG", "more.jpg", "zutphen.jpg", "trein.png", "doesburg.jpg"], "images/");
        frame.addEventListener("complete", verwerkPlaatjes);
        
        var waiter = new zim.Waiter(that.MIDDEN);
        waiter.show();
        
        function verwerkPlaatjes(){

            aanHetLaden = false;
            
            frame.removeEventListener("complete", verwerkPlaatjes);
            waiter.hide();

            maakStart();

        }
        
        function maakStart(){
            
            
            maakBestemming("Villa Ruimzicht", 
                            "http://www.hotelvillaruimzicht.nl/", 
                            "ruimzicht.jpg", 
                            "verblijf", // tekst
                            ["start route"], //knoppen
                            ["startRoute"]);
            
            that.MIDDEN.addEventListener("startRoute", startRoute);
        }
        
        function startRoute(){
            
            that.MIDDEN.removeEventListener("startRoute", startRoute);
            
            maakBestemming("Museum More", 
                            "http://museummore.nl/", 
                            "more.jpg", 
                            "30 kilometer", // tekst
                            ["start route"], //knoppen
                            ["startMore"]);
            
            that.MIDDEN.addEventListener("startMore", startMore);
            
        }
        
        function startMore(){
            
            that.MIDDEN.removeEventListener("startMore", startMore);
            
            that.route.gotoAndPlay("ruimzicht-bronsbergen");
            that.route.addEventListener("bronsbergen", aankomstBronsbergen);
        }
        
        function aankomstBronsbergen(){
            
            that.route.removeEventListener("bronsbergen", aankomstBronsbergen);
            
            maakBestemming("Even pauze?", 
                            "http://www.bronsbergen.nl/", 
                            "bronsbergen.JPG", 
                            "Fort Bronsbergen", // tekst
                            ["vervolg route"], //knoppen
                            ["vanafBronsbergen"]);
            
            that.MIDDEN.addEventListener("vanafBronsbergen", vanafBronsbergen);
            
        }
        
        function vanafBronsbergen(){
            
            that.MIDDEN.removeEventListener("vanafBronsbergen", vanafBronsbergen);
            
            maakBestemming("Museum More", 
                            "http://museummore.nl/", 
                            "more.jpg", 
                            "11 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["naarMore"]);
            
            that.MIDDEN.addEventListener("naarMore", naarMore);
            
        }
        
        function naarMore(){
            
            that.MIDDEN.removeEventListener("naarMore", naarMore);
            
            that.route.gotoAndPlay("bronsbergen-more");
            that.route.addEventListener("aankomstMore", aankomstMore);
            
        }
        
        function aankomstMore(){ 
            
            that.route.removeEventListener("aankomstMore", aankomstMore);
            
            maakBestemming("Museum More", 
                            "http://museummore.nl/", 
                            "more.jpg", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["naarZutphen"]);
            
            that.MIDDEN.addEventListener("naarZutphen", naarZutphen);
        }
        
        function naarZutphen(){
            
            that.MIDDEN.removeEventListener("naarZutphen", naarZutphen);
            
            maakBestemming("Zutphen", 
                            "http://www.inzutphen.nl", 
                            "zutphen.jpg", 
                            "8 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["fietsNaarZutphen"]);
            
            that.MIDDEN.addEventListener("fietsNaarZutphen", fietsNaarZutphen);
            
        }
        
        function fietsNaarZutphen(){
            
            that.MIDDEN.removeEventListener("fietsNaarZutphen", fietsNaarZutphen);
            
            that.route.gotoAndPlay("more-zuthpen");
            that.route.addEventListener("aankomstZutphen", aankomstZutphen);
            
        }
        
        function aankomstZutphen(){
            
            that.route.removeEventListener("aankomstZutphen", aankomstZutphen);
            
            maakBestemming("Zutphen", 
                            "http://www.inzutphen.nl", 
                            "zutphen.jpg", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["doesburgVragen"]);
            
            that.MIDDEN.addEventListener("doesburgVragen", doesburgVragen);
            
        }
        
        function doesburgVragen(){
            
            that.MIDDEN.removeEventListener("doesburgVragen", doesburgVragen);
            
            maakBestemming("Doesburg?", 
                            "http://www.vvvdoesburg.nl/nl", 
                            "doesburg.jpg", 
                            "4 kilometer om", // tekst
                            ["Doesburg","Vila Ruimzicht"], //knoppen
                            ["keuzeDoesburg", "keuzeRuimzicht"]);
            
            that.MIDDEN.addEventListener("keuzeDoesburg", keuzeDoesburg);
            that.MIDDEN.addEventListener("keuzeRuimzicht", keuzeRuimzicht);
            
        }
        
        function keuzeRuimzicht(){
            
            that.MIDDEN.removeEventListener("keuzeDoesburg", keuzeDoesburg);
            that.MIDDEN.removeEventListener("keuzeRuimzicht", keuzeRuimzicht);
            
            maakBestemming("Villa Ruimzicht", 
                            "http://www.hotelvillaruimzicht.nl/", 
                            "ruimzicht.jpg", 
                            "24 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["zutphenRuimzicht"]);
            
            that.MIDDEN.addEventListener("zutphenRuimzicht", zutphenRuimzicht);
            
        }
        
        function zutphenRuimzicht(){
            
            that.MIDDEN.removeEventListener("zutphenRuimzicht", zutphenRuimzicht);
            
            that.route.gotoAndPlay("zutphen-ruimzicht")
            that.route.addEventListener("terugRuimZichtZutphen",terugRuimZichtZutphen);
        }
        
        function terugRuimZichtZutphen(){
            
            that.route.removeEventListener("terugRuimZichtZutphen",terugRuimZichtZutphen);
            
            terugRuimzicht();
            
        }
        
        function keuzeDoesburg(){
            
            that.MIDDEN.removeEventListener("keuzeDoesburg", keuzeDoesburg);
            that.MIDDEN.removeEventListener("keuzeRuimzicht", keuzeRuimzicht);
            
            maakBestemming("Doesburg?", 
                            "http://www.vvvdoesburg.nl/nl", 
                            "doesburg.jpg", 
                            "20 kilometer", // tekst
                            ["met de trein","fietsen"], //knoppen
                            ["doesburgTrein", "doesburgFietsen"]);
            
            that.MIDDEN.addEventListener("doesburgTrein",doesburgTrein);
            that.MIDDEN.addEventListener("doesburgFietsen",doesburgFietsen);
            
        }
        
        function doesburgTrein(){
            
            that.MIDDEN.removeEventListener("doesburgTrein",doesburgTrein);
            that.MIDDEN.removeEventListener("doesburgFietsen",doesburgFietsen);
            
            maakBestemming("Station Zutphen ", 
                            "http://www.ns.nl/actuele-vertrektijden/avt?station=zp", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["startTreinDoesburg"]);
            
            that.MIDDEN.addEventListener("startTreinDoesburg", startTreinDoesburg);
            
        }
        
        function startTreinDoesburg(){
            
            that.MIDDEN.removeEventListener("startTreinDoesburg", startTreinDoesburg);
            
            that.route.gotoAndPlay("trein-zutphen-dieren");
            that.route.addEventListener("aankomstStationDieren", aankomstStationDieren);
        }
        
        function aankomstStationDieren(){
            
            that.route.removeEventListener("aankomstStationDieren", aankomstStationDieren);
            
            maakBestemming("Station Dieren", 
                            "http://www.ns.nl/actuele-vertrektijden/avt?station=DR", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["startTreinDoesburg"]);
            
            that.MIDDEN.addEventListener("startTreinDoesburg", vertellenDierenDoesburg);
        }
        
        function vertellenDierenDoesburg(){
            
            maakBestemming("Doesburg", 
                            "http://www.vvvdoesburg.nl/nl", 
                            "doesburg.jpg", 
                            "5 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["fietsenDierenDoesburg"]);
            that.MIDDEN.addEventListener("fietsenDierenDoesburg", fietsenDierenDoesburg);
        }
        
        function fietsenDierenDoesburg(){
            
            that.MIDDEN.removeEventListener("fietsenDierenDoesburg", fietsenDierenDoesburg);
            
            that.route.gotoAndPlay("dieren-doesburg");
            that.route.addEventListener("aankomstDoesburg", aankomstDoesburgDieren);
            
        }
        
        function aankomstDoesburgDieren(){
            
            that.route.removeEventListener("aankomstDoesburg", aankomstDoesburgDieren);
            
            aankomstDoesburg();
            
            
            
        }
        
        function doesburgFietsen(){
            
            that.MIDDEN.removeEventListener("doesburgTrein",doesburgTrein);
            that.MIDDEN.removeEventListener("doesburgFietsen",doesburgFietsen);
            
            that.route.gotoAndPlay("zutphen-doesburg");
            that.route.addEventListener("aangekomenFietsDoesburg",aangekomenFietsDoesburg);
            
        }
        
        
        function aangekomenFietsDoesburg(){
            that.route.removeEventListener("aangekomenFietsDoesburg",aangekomenFietsDoesburg);
            
            aankomstDoesburg();
        }
        
        function aankomstDoesburg(){
            
            maakBestemming("Doesburg", 
                            "http://www.vvvdoesburg.nl/nl", 
                            "doesburg.jpg", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["terugRuimzichtTrein"]);
            
            that.MIDDEN.addEventListener("terugRuimzichtTrein", terugRuimzichtTrein);
            
        }
        
        function terugRuimzichtTrein(){
            
            that.MIDDEN.removeEventListener("terugRuimzichtTrein", terugRuimzichtTrein);
            
            maakBestemming("Villa Ruimzicht", 
                            "http://www.hotelvillaruimzicht.nl/", 
                            "ruimzicht.jpg", 
                            "12 kilometer", // tekst
                            ["trein", "fiets"], //knoppen
                            ["doesburgRuimZichtTrein", "doesburgRuimZichtFiets"]);
            
            
            
            that.MIDDEN.addEventListener("doesburgRuimZichtTrein", doesburgRuimZichtTrein);
            that.MIDDEN.addEventListener("doesburgRuimZichtFiets", doesburgRuimZichtFiets);
        }
        
        function doesburgRuimZichtFiets(){
            
            that.MIDDEN.removeEventListener("doesburgRuimZichtTrein", doesburgRuimZichtTrein);
            that.MIDDEN.removeEventListener("doesburgRuimZichtFiets", doesburgRuimZichtFiets);
            
            that.route.gotoAndPlay("doesburg-ruimzicht");
            that.route.addEventListener("gefietstDoesburgRuimzicht", gefietstDoesburgRuimzicht)
        }
        
        function gefietstDoesburgRuimzicht(){
            
            that.route.addEventListener("gefietstDoesburgRuimzicht", gefietstDoesburgRuimzicht)
            terugRuimzicht();
            
        }
        
        
        //eerst naar station dieren fietsen
        function doesburgRuimZichtTrein(){
            
            that.MIDDEN.removeEventListener("doesburgRuimZichtTrein", doesburgRuimZichtTrein);
            that.MIDDEN.removeEventListener("doesburgRuimZichtFiets", doesburgRuimZichtFiets);
            
            maakBestemming("Station Dieren", 
                            "http://www.ns.nl/actuele-vertrektijden/avt?station=DR", 
                            "trein.png", 
                            "5 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["fietsDoesburgDieren"]);
            

            that.MIDDEN.addEventListener("fietsDoesburgDieren", fietsDoesburgDieren);
            
        }
        
        function fietsDoesburgDieren(){
            
            that.MIDDEN.removeEventListener("fietsDoesburgDieren", fietsDoesburgDieren);
            
            that.route.gotoAndPlay("doesburgDieren")
            that.route.addEventListener("doesburgDierenGefietst", doesburgDierenGefietst);
            
            
        }
        
        function doesburgDierenGefietst(){
            
            that.route.removeEventListener("doesburgDierenGefietst", doesburgDierenGefietst);
            
            maakBestemming("Station Dieren", 
                            "http://www.ns.nl/actuele-vertrektijden/avt?station=DR", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["vanDoesburgStationDieren"]);
            
            that.MIDDEN.addEventListener("vanDoesburgStationDieren", gaTreinDoesburgDoetinchem);
        }
        
        function gaTreinDoesburgDoetinchem(){
            
            that.MIDDEN.removeEventListener("vanDoesburgStationDieren", gaTreinDoesburgDoetinchem);
            
            that.route.gotoAndPlay("doesburg-doetinchem-trein");
            that.route.addEventListener("treinDoetinchem", treinDoetinchem);
            
        }
        
        function treinDoetinchem(){
            
            that.route.removeEventListener("treinDoetinchem", treinDoetinchem);
            
            maakBestemming("Station Doetinchem", 
                            "http://www.ns.nl/actuele-vertrektijden/avt?station=dtc", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["gaFietsDoetinchemRuimzicht"]);
            
            that.MIDDEN.addEventListener("gaFietsDoetinchemRuimzicht", gaFietsDoetinchemRuimzicht);
            
        }
        
        function gaFietsDoetinchemRuimzicht(){
            
            that.MIDDEN.removeEventListener("gaFietsDoetinchemRuimzicht", gaFietsDoetinchemRuimzicht);
            
            maakBestemming("Villa Ruimzicht", 
                            "http://www.hotelvillaruimzicht.nl/", 
                            "ruimzicht.jpg", 
                            "3 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["fietsDoetinchemruimzicht"]);
            
            that.MIDDEN.addEventListener("fietsDoetinchemruimzicht", fietsDoetinchemruimzicht);
            
            
        }
        
        function fietsDoetinchemruimzicht(){
            
            that.MIDDEN.removeEventListener("fietsDoetinchemruimzicht", fietsDoetinchemruimzicht);
            
            that.route.gotoAndPlay("doetinchem-ruimzicht");
            that.route.addEventListener("gefietstDoetinchemRuimzicht", gefietstDoetinchemRuimzicht);
            
        }
        
        function gefietstDoetinchemRuimzicht(){
            
            that.route.removeEventListener("gefietstDoetinchemRuimzicht", gefietstDoetinchemRuimzicht);
            
            terugRuimzicht();
            
        }
        
        function terugRuimzicht(){
            maakBestemming("Villa Ruimzicht", 
                            "http://www.hotelvillaruimzicht.nl/", 
                            "ruimzicht.jpg", 
                            "aankomst", // tekst
                            ["opnieuw"], //knoppen
                            ["fietsDoetinchemruimzicht"]);
            that.MIDDEN.addEventListener("fietsDoetinchemruimzicht", afronden);
            
            
        }
        
        function afronden(){
            that.MIDDEN.removeEventListener("fietsDoetinchemruimzicht", afronden);
            maakKeuzeScherm();
        }
        
        
        
    }
    
    this.maakRouteAqua = function(){
        
        var verblijf;
        
        that.route = new lib.routeAqua();
        that.MIDDEN.addChild(that.route);
        var verblijf;
        
        var rect = new zim.Rectangle(526, 944);
        rect.x = 237;
        rect.y = 28;
        rect.alpha = 0;
        that.MIDDEN.addChild(rect);

        var mobiel = new lib.scherm();
        mobiel.x = 500;
        mobiel.y = 500;
        that.MIDDEN.addChild(mobiel);

        var mask = zim.setMask(that.route, rect);
        
        aanHetLaden = true;
        frame.loadAssets(["erve-kots.jpg", "kasteelRuurlo.jpg", "lebbenbrugge.jpg", "lievelde.jpg", "trein.png", "mallumse-molen.jpg", "marveld.jpg", "piepermolen.jpg", "twee-bruggen.jpg", "vreehorst.jpg"], "images/");
        frame.addEventListener("complete", verwerkPlaatjes);
        
        var waiter = new zim.Waiter(that.MIDDEN);
        waiter.show();
        
        function verwerkPlaatjes(){

            aanHetLaden = false;
            
            frame.removeEventListener("complete", verwerkPlaatjes);
            waiter.hide();

            maakStart();

        }
        
        function maakStart(){
            
            zog("maak start")
            maakBestemming("Keuze verblijfplaats", 
                            null, 
                            "twee-bruggen.jpg", 
                            "", // tekst
                            ["De Twee Bruggen","Camping Vreehorst"], //knoppen
                            ["tweebruggen","vreehorst"]);
            
        }
        
        that.MIDDEN.addEventListener("vreehorst", startVreehorst);
        that.MIDDEN.addEventListener("tweebruggen", startTweeBruggen);
        
        function startTweeBruggen(){
            zog("start tweebruggen");
            that.MIDDEN.removeEventListener("vreehorst", startVreehorst);
            that.MIDDEN.removeEventListener("tweebruggen", startDagtweeBruggen());
            
        }
        
        function startVreehorst(){
            zog("start vreehorst");
            that.MIDDEN.removeEventListener("vreehorst", startVreehorst);
            that.MIDDEN.removeEventListener("tweebruggen", startDagTweeBruggen);
        }
        
        function startVreehorst(){
            verblijf = "vreehorst";
            startDag();
        }
        
        function startDagtweeBruggen(){
            verblijf = "tweeBruggen";
            startDag();
        }
        
        function startDag(){
            zog("verblijf: "+ verblijf)
            
            if(verblijf == "vreehorst"){
                maakBestemming("Vreehorst Camping", 
                            "https://www.vreehorst.nl/", 
                            "vreehorst.jpg", 
                            "", // tekst
                            ["start route"], //knoppen
                            ["gaVerder"]);
                
            }else{
                maakBestemming("De Twee Bruggen", 
                            "http://www.detweebruggen.nl/", 
                            "twee-bruggen.jpg", 
                            "", // tekst
                            ["start route"], //knoppen
                            ["gaVerder"]);
                
            }
            
            that.MIDDEN.addEventListener("gaVerder", laatEersteBestemmingZien)
            
            
        }
        
        function laatEersteBestemmingZien(){
            that.MIDDEN.removeEventListener("gaVerder", laatEersteBestemmingZien);
            
            maakBestemming("Herberg Erve Kots", 
                            "http://www.ervekots.nl/", 
                            "erve-kots.jpg", 
                            "12,5 kilometer", // tekst
                            ["Start route"], //knoppen
                            ["gaVerder"]);
            
            that.MIDDEN.addEventListener("gaVerder", startFietsen);
            
        }
        
        function startFietsen(){
            that.route.removeEventListener("gaVerder", startFietsen);
            
            if(verblijf == "vreehorst"){
                that.route.gotoAndPlay("vreehorst-erveKots");
            }else{
                that.route.gotoAndPlay("tweebruggen-kruispunt");
            }
            
            that.route.addEventListener("erveKots", arriveerErveKots);
            
        }
        
        function arriveerErveKots(){
            that.route.removeEventListener("erveKots", arriveerErveKots);
            
            maakBestemming("Herberg Erve Kots", 
                            "http://www.ervekots.nl/", 
                            "erve-kots.jpg", 
                            "aankomst", // tekst
                            ["Vervolg route"], //knoppen
                            ["vertelMolen"]);
            
            that.MIDDEN.addEventListener("vertelMolen", vertelMallumseMolen);
        }
        
        function vertelMallumseMolen(){
            
            that.MIDDEN.removeEventListener("gaVerder", vertelMallumseMolen);
            
            maakBestemming("Mallumse Molen", 
                            "http://www.eibergsemolens.nl/", 
                            "mallumse-molen.jpg", 
                            "12,5 kilometer", // tekst
                            ["start route"], //knoppen
                            ["gaVerder"]);
            
            that.MIDDEN.addEventListener("gaVerder", vertrekVanafErveKots);
            
        }
        
        function vertrekVanafErveKots(){
            
            that.MIDDEN.removeEventListener("gaVerder", vertrekVanafErveKots);
            
            that.route.gotoAndPlay("erveKots-marveld")
            that.route.addEventListener("marveld", aankomstMarveld)
            
        }
        
        function aankomstMarveld(){
            
            that.route.removeEventListener("marveld", aankomstMarveld);
            
            maakBestemming("Marveld Recreatie", 
                            "https://www.marveld.nl/eten-drinken/", 
                            "marveld.jpg", 
                            "Pauze?", // tekst
                            ["vervolg route"], //knoppen
                            ["marveldMolen"]);
            
            that.MIDDEN.addEventListener("marveldMolen", fietsNaarMallumseMolen)
        }
        
        function fietsNaarMallumseMolen(){
            
            that.route.gotoAndPlay("marveld-mallumseMolen");
            that.route.addEventListener("Mallum", aankomstMallum);
        }
        
        function aankomstMallum(){
            that.route.removeEventListener("Mallum", aankomstMallum);
            
            maakBestemming("Mallumse Molen", 
                            "http://www.eibergsemolens.nl/", 
                            "mallumse-molen.jpg", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["vraagPieper"]);
            
            that.MIDDEN.addEventListener("vraagPieper", vraagPieper)
        }
        
        function vraagPieper(){
            
            maakBestemming("De Pieper Molen?", 
                            "http://www.eibergsemolens.nl/", 
                            "piepermolen.jpg", 
                            "12,5 kilometer om", // tekst
                            ["naar Pieper Molen", "naar De Lebbenbrugge"], //knoppen
                            ["wilPieper", "wilLebben"]);
            
            that.MIDDEN.addEventListener("wilPieper", naarPieper);
            that.MIDDEN.addEventListener("wilLebben", naarLebbenbrugge)
            
        }
        
        function naarPieper(){
            
            that.MIDDEN.removeEventListener("wilPieper", naarPieper);
            that.MIDDEN.removeEventListener("wilLebben", naarLebbenbrugge);
            
            that.route.gotoAndPlay("mallumseMolen-PieperseMolen");
            that.route.addEventListener("Pieper", aankomstPieper);
        }
        
        function aankomstPieper(){
            
            that.route.removeEventListener("Pieper", aankomstPieper);
            
            maakBestemming("De Pieper Molen", 
                            "http://www.eibergsemolens.nl/", 
                            "piepermolen.jpg", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["klaarPieper"]);
            
            that.MIDDEN.addEventListener("klaarPieper", fietsVanafPieper);
        }
        
        function fietsVanafPieper(){
            that.MIDDEN.removeEventListener("klaarPieper", fietsVanafPieper);
            
            maakBestemming("Naar De Lebbenbrugge", 
                            "http://www.lebbenbrugge.nl/", 
                            "lebbenbrugge.jpg", 
                            "17 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["fietsVanafPieper"]);
            
            that.MIDDEN.addEventListener("fietsVanafPieper", fietsVanafPieper);
            
        }
        
        function fietsVanafPieper(){
            
            that.MIDDEN.removeEventListener("fietsVanafPieper", fietsVanafPieper);
            
            that.route.gotoAndPlay("pieperseMolen-mallumseMolen");
            
            that.route.addEventListener("boerderijMuseum", aankomstBoerderijmuseum)
        }
        
        function naarLebbenbrugge(){
            
            that.MIDDEN.removeEventListener("wilPieper", naarPieper);
            that.MIDDEN.removeEventListener("wilLebben", naarLebbenbrugge);
            
            maakBestemming("De Lebbenbrugge", 
                            "http://www.lebbenbrugge.nl/", 
                            "lebbenbrugge.jpg", 
                            "14 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["fietsVanafMallum"]);
            
            that.MIDDEN.addEventListener("fietsVanafMallum", fietsVanafMallum);
        }
        
        function fietsVanafMallum(){
            
            that.MIDDEN.removeEventListener("fietsVanafMallum", fietsVanafMallum);
            
            that.route.gotoAndPlay("mallumseMolen-boerderijmuseum");
            that.route.addEventListener("boerderijMuseum", aankomstBoerderijmuseum)
        
        }
        
        function aankomstBoerderijmuseum(){
            that.route.removeEventListener("boerderijMuseum", aankomstBoerderijmuseum);
            
            maakBestemming("Boerderijmuseum \nDe Lebbenbrugge", 
                            "http://www.lebbenbrugge.nl/", 
                            "lebbenbrugge.jpg", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["naarKasteelRuurlo"]);
            
            that.MIDDEN.addEventListener("naarKasteelRuurlo", naarKasteel);
            
        }
        
        function naarKasteel(){
            
            that.MIDDEN.removeEventListener("naarKasteelRuurlo", naarKasteel);
            
            maakBestemming("Huize Ruurlo", 
                            "http://www.huizeruurlo.nl/", 
                            "kasteelRuurlo.jpg", 
                            "6 kilometer", // tekst
                            ["vervolg route"], //knoppen
                            ["fietsKasteelRuurlo"]);
            
            that.MIDDEN.addEventListener("fietsKasteelRuurlo", fietsNaarKasteel);
            
        }
        
        function fietsNaarKasteel(){
            
            that.MIDDEN.removeEventListener("fietsKasteelRuurlo", fietsNaarKasteel);
            
            that.route.gotoAndPlay("boerderijMuseum-kasteel");
            that.route.addEventListener("kasteel", aankomstKasteel);
            
        }
        
        function aankomstKasteel(){
            
            that.route.removeEventListener("kasteel", aankomstKasteel);
            
            maakBestemming("Huize Ruurlo", 
                            "http://www.huizeruurlo.nl/", 
                            "kasteelRuurlo.jpg", 
                            "aankomst", // tekst
                            ["vervolg route"], //knoppen
                            ["treinVragen"]);
            that.MIDDEN.addEventListener("treinVragen", treinVragen);
            
        }
        
        function treinVragen(){
           that.MIDDEN.removeEventListener("treinVragen", treinVragen);
        
            if(verblijf == "vreehorst"){
                
                maakBestemming("Vreehorst Camping", 
                            "https://www.vreehorst.nl/", 
                            "vreehorst.jpg", 
                            "27 kilometer", // tekst
                            ["fiets", "trein"], //knoppen
                            ["terugFiets", "terugtrein"]);
                
                that.MIDDEN.addEventListener("terugFiets", fietsTerug);
                that.MIDDEN.addEventListener("terugtrein", treinTerug);
                
            }else{
                maakBestemming("De Twee Bruggen", 
                            "http://www.detweebruggen.nl/", 
                            "twee-bruggen.jpg", 
                            "27 kilometer", // tekst
                            ["fiets", "trein"], //knoppen
                            ["terugFiets", "terugtrein"]);
                
                that.MIDDEN.addEventListener("terugFiets", fietsTerug);
                that.MIDDEN.addEventListener("terugtrein", treinTerug);
            
            }
        }
            
        function fietsTerug(){
            
            that.MIDDEN.removeEventListener("terugFiets", fietsTerug);
            that.MIDDEN.removeEventListener("terugtrein", treinTerug);
            
            that.route.gotoAndPlay("kasteelRuurlo-marveld");
            
            that.route.addEventListener("terugMarveld", koffieTerug);
            
        }
        
        function treinTerug(){
            
            that.MIDDEN.removeEventListener("terugFiets", fietsTerug);
            that.MIDDEN.removeEventListener("terugtrein", treinTerug);
            
            maakBestemming("Station Ruurlo", 
                            "http://www.ns.nl/actuele-vertrektijden/avt?station=rl", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["vervolg reis"], //knoppen
                            ["treinWinterswijk"]);  
            
            that.MIDDEN.addEventListener("treinWinterswijk" ,treinWinterswijk);
            
        }
        
        function treinWinterswijk(){
            
            that.route.gotoAndPlay("treinterug");
            
            that.route.addEventListener("stationWinterswijk", aankomstWinterswijk)
        }
        
        function aankomstWinterswijk(){
            
            that.route.removeEventListener("stationWinterswijk", aankomstWinterswijk);
            
            maakBestemming("Station Winterswijk", 
                            "http://www.ns.nl/actuele-vertrektijden/avt?station=ww", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["vervolg reis"], //knoppen
                            ["terugNaTrein"]);
            
            that.MIDDEN.addEventListener("terugNaTrein", terugNaTrein);
        }
        
        function terugNaTrein(){
            
            that.route.gotoAndPlay("trein-kruispunt");
            that.route.addEventListener("tweeWegenterug", tweeWegenTerug);
            
        }
        
        function tweeWegenTerug(){
            
            that.route.removeEventListener("tweeWegenterug", tweeWegenTerug);
            
            if(verblijf == "tweeBruggen"){
                that.route.gotoAndPlay("kruispunt-tweebruggen");
            }else{
                that.route.gotoAndPlay("kruispunt-vreehorst");
            }
            
            that.route.addEventListener("terugTweeBruggen", terugkomst);
            that.route.addEventListener("vreehorstTerug", terugkomst);

        }
        
        function koffieTerug(){
            
            that.route.removeEventListener("terugMarveld", koffieTerug);
            
            maakBestemming("Marveld Recreatie", 
                            "https://www.marveld.nl/eten-drinken/", 
                            "marveld.jpg", 
                            "Pauze?", // tekst
                            ["vervolg route"], //knoppen
                            ["terugNaMarveld"]);
            
            that.MIDDEN.addEventListener("terugNaMarveld", verderTerugNaMarveld);
            
        }
        
        function verderTerugNaMarveld(){
            
            that.MIDDEN.removeEventListener("terugNaMarveld", verderTerugNaMarveld);
            
            that.route.gotoAndPlay("marveld-vreehorst");
            that.route.addEventListener("terugNaarTweeBruggen", wijzigNaarTweebruggen);
            
            function wijzigNaarTweebruggen(){
                that.route.removeEventListener("terugNaarTweeBruggen", wijzigNaarTweebruggen);
                
                if(verblijf == "tweeBruggen"){
                    that.route.gotoAndPlay("kruispunt-tweebruggen");
                }
            }
            
            that.route.addEventListener("terugTweeBruggen", terugkomst);
            that.route.addEventListener("vreehorstTerug", terugkomst);
            
            
            
            
        }
        
        function terugkomst(){
            
            that.route.removeEventListener("terugTweeBruggen", terugkomst);
            that.route.removeEventListener("vreehorstTerug", terugkomst);
            
            if(verblijf == "vreehorst"){
                maakBestemming("Vreehorst Camping", 
                            "https://www.vreehorst.nl/", 
                            "vreehorst.jpg", 
                            "terugkomst", // tekst
                            ["opnieuw"], //knoppen
                            ["opnieuw"]);
                
            }else{
                maakBestemming("De Twee Bruggen", 
                            "http://www.detweebruggen.nl/", 
                            "twee-bruggen.jpg", 
                            "terugkomst", // tekst
                            ["opnieuw"], //knoppen
                            ["opnieuw"]);
                
            }
            
            that.MIDDEN.addEventListener("opnieuw", maakNieuweStart);
        }
        
        function maakNieuweStart(){
            
            that.MIDDEN.removeEventListener("opnieuw", maakNieuweStart);
            maakKeuzeScherm();
        }
        
        
        
        
    }

    this.maakRouteGeel = function(){

        var treinHeen = true;

        that.route = new lib.routeGeel();
        
        that.MIDDEN.addChild(that.route);
        

        var rect = new zim.Rectangle(526, 944);
        rect.x = 237;
        rect.y = 28;
        rect.alpha = 0;
        that.MIDDEN.addChild(rect);

        var mobiel = new lib.scherm();
        mobiel.x = 500;
        mobiel.y = 500;
        that.MIDDEN.addChild(mobiel);

        var mask = zim.setMask(that.route, rect);

        aanHetLaden = true;
        
        frame.loadAssets(["klimbos.jpg", "marveld.jpg", "megapret.jpg", "spilman.jpg", "trein.png"], "images/");
        frame.addEventListener("complete", verwerkPlaatjes);
        var waiter = new zim.Waiter(that.MIDDEN);
        waiter.show();


        function verwerkPlaatjes(){

            frame.removeEventListener("complete", verwerkPlaatjes);
            aanHetLaden = false;
            
            waiter.hide();

            maakStart();

        }


        function maakStart(){

            maakBestemming("Marveld recreatie", 
                            "https://www.marveld.nl/", 
                            "marveld.jpg", 
                            "verblijf", // tekst
                            ["start route"], //knoppen
                            ["gaVerder"]);

            that.MIDDEN.addEventListener("gaVerder", startRoute);

            function startRoute(){

                that.MIDDEN.removeEventListener("gaVerder", startRoute);
                maakBestemming("Klimbos Achterhoek", 
                            "http://klimbos.nl/klimbos-achterhoek/", 
                            "klimbos.jpg", 
                            "17 kilometer", // tekst
                            ["met de fiets", "met de trein"], //knoppen
                            ["metFiets", "metTrein"]);

                that.MIDDEN.addEventListener("metFiets", stuurFiets);
                that.MIDDEN.addEventListener("metTrein", stuurTrein);

            }

            function stuurFiets(){

                that.MIDDEN.removeEventListener("metFiets", stuurFiets);
                that.MIDDEN.removeEventListener("metTrein", stuurTrein);

                gaSpilman();
            }

            function stuurTrein(){

                gaTreinKlimbos();

                that.MIDDEN.removeEventListener("metFiets", stuurFiets);
                that.MIDDEN.removeEventListener("metTrein", stuurTrein);
            }

        }

        function gaSpilman(){

            that.route.gotoAndPlay("routeNaarKlimbos");
            that.route.addEventListener("koffieVragen", wilJeKoffie);
        }

        function wilJeKoffie(){

            that.route.removeEventListener("koffieVragen", wilJeKoffie);

            maakBestemming("Koffie drinken?", 
                            "http://spilman.nl/", 
                            "spilman.jpg", 
                            "bij Spilman", // tekst
                            ["ja", "nee"], //knoppen
                            ["ja", "nee"]);

                that.MIDDEN.addEventListener("ja", doeKoffie);
                that.MIDDEN.addEventListener("nee", doeGeenKoffie);


            function doeKoffie(){

                that.MIDDEN.removeEventListener("ja", doeKoffie);
                that.MIDDEN.removeEventListener("nee", doeGeenKoffie);

                that.route.gotoAndPlay("koffieDrinkenSpilman");
                that.route.addEventListener("arriveerKoffie", behandelSpilman);
            }

            function doeGeenKoffie(){

                that.MIDDEN.removeEventListener("ja", doeKoffie);
                that.MIDDEN.removeEventListener("nee", doeGeenKoffie);

                that.route.play();
                    that.route.addEventListener("aankomstKlimbos", behandelKlimbos);
            }

        }

        function behandelSpilman(){

            that.route.removeEventListener("arriveerKoffie", behandelSpilman);

            maakBestemming("Aankomst Spilman", 
                            "http://spilman.nl/", 
                            "spilman.jpg", 
                            "route vervolgen", // tekst
                            ["vervolg route"], //knoppen
                            ["gaDoor"]);

            that.MIDDEN.addEventListener("gaDoor", gaVerder);

            function gaVerder(){

                that.MIDDEN,removeEventListener("verder", gaVerder);

                that.route.play();

                that.route.addEventListener("aankomstKlimbos", behandelKlimbos);

            }


        }

        function gaTreinKlimbos(){

            that.route.gotoAndPlay("naarKlimbosTrein");
            that.route.addEventListener("Lievelde", meldLievelde)
        }

        function meldLievelde(){

            that.route.removeEventListener("Lievelde", meldLievelde);

            maakBestemming("Station \nLichtenvoorde-Groenlo", 
                            "http://9292.nl/station-lichtenvoorde-groenlo", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["verder gaan"], //knoppen
                            ["verder"]);

            that.MIDDEN.addEventListener("verder" , gaVerder);

            function gaVerder(){

                that.MIDDEN.removeEventListener("verder",gaVerder);

                that.route.play();

                if(treinHeen){
                    that.route.addEventListener("Ruurlo", meldRuurlo);
                }else{
                   that.route.addEventListener("Megapret", behandelMegapret);
                }
            }
        }

        function meldRuurlo(){

            that.route.removeEventListener("Ruurlo", meldRuurlo);

            maakBestemming("Station Ruurlo", 
                            "http://9292.nl/station-ruurlo", 
                            "trein.png", 
                            "aankomst", // tekst
                            ["verder gaan"], //knoppen
                            ["verder"]);

            that.MIDDEN.addEventListener("verder" , gaVerder);

            function gaVerder(){

                that.MIDDEN.removeEventListener("verder",gaVerder);

                that.route.play();

                if(treinHeen){
                    that.route.addEventListener("aankomstKlimbos", behandelKlimbos);
                }else{
                   that.route.addEventListener("Lievelde", meldLievelde);
                }
            }

        }

        function behandelKlimbos(){

            treinHeen = false;

            that.route.removeEventListener("aankomstKlimbos", behandelKlimbos);

            maakBestemming("Klimbos Achterhoek", 
                            "http://klimbos.nl/klimbos-achterhoek/", 
                            "klimbos.jpg", 
                            "aankomst", // tekst
                            ["verder gaan"], //knoppen
                            ["verder"]);

            that.MIDDEN.addEventListener("verder" , doeVolgendScherm);

            function doeVolgendScherm(){

                that.MIDDEN.removeEventListener("verder" , doeVolgendScherm);

                maakBestemming("naar Megapret", 
                            "http://www.megapret.nl/", 
                            "megapret.jpg", 
                            "15 kilometer", // tekst
                            ["met de fiets", "met de trein" ], //knoppen
                            ["fiets", "trein"]);

                that.MIDDEN.addEventListener("fiets", gaFiets);
                that.MIDDEN.addEventListener("trein", gaTrein);
            }


            function gaFiets(){

                that.MIDDEN.removeEventListener("fiets", gaFiets);
                that.MIDDEN.removeEventListener("trein", gaTrein);

                that.route.gotoAndPlay("fietsNaarMegapret");
                that.route.addEventListener("Megapret", behandelMegapret);

            }

            function gaTrein(){

                that.MIDDEN.removeEventListener("fiets", gaFiets);
                that.MIDDEN.removeEventListener("trein", gaTrein);

                that.route.gotoAndPlay("treinNaarMegapret");
                that.route.addEventListener("Ruurlo", meldRuurlo);
            }

        }

        function behandelMegapret(){

            that.route.removeEventListener("Megapret", behandelMegapret);

            maakBestemming("Megapret", 
                            "http://www.megapret.nl/", 
                            "megapret.jpg", 
                            "aankomst", // tekst
                            ["terugreis"], //knoppen
                            ["terug"]);

            that.MIDDEN.addEventListener("terug", gaTerugMarveld);


        }

        function gaTerugMarveld(){

            that.MIDDEN.removeEventListener("terug", gaTerugMarveld);

            that.route.gotoAndPlay("terugNaarMarveld");

            that.route.addEventListener("einde", maakEinde);
        }

        function maakEinde(){

            maakBestemming("Marveld recreatie", 
                            "https://www.marveld.nl/", 
                            "marveld.jpg", 
                            "aankomst", // tekst
                            ["opnieuw"], //knoppen
                            ["gaVerder"]);
            that.MIDDEN.addEventListener("gaVerder", zetDoor);

            function zetDoor(){

                that.MIDDEN.removeEventListener("gaVerder", zetDoor);
                treinHeen = true;
                maakKeuzeScherm();
            }


        }

    }
    
    function maakBestemming(bestemming, url, plaatje,tekst, tekstKnopArray, eventArray){

            if(!tekstKnop){
                var tekstKnop = "ga verder";
            }

            var beeldContainer = new zim.Container(1000, 1000);
            beeldContainer.alpha =0;
            that.route.addChild(beeldContainer);

            var rect = new zim.Rectangle(526,200, "orange");
            rect.x = 237;
            rect.y = 28;
            beeldContainer.addChild(rect);

            var label = new zim.Label({
                text:bestemming,
                size:49,
                align:"center"
            });
            label.x = rect.x + rect.width/2;
            label.y = 100;
            beeldContainer.addChild(label);

            var image = frame.asset(plaatje);
            beeldContainer.addChild(image);
            image.width = 526;
            image.scaleY = image.scaleX;
            image.y = rect.y + rect.height;
            image.x = 237;

            var restRuimte = 1000 - image.height - rect.height;
            var rect2 = new zim.Rectangle(526,restRuimte, "orange");
            rect2.x = 237;
            rect2.y = rect.height + image.height;
            beeldContainer.addChild(rect2);

            var label2 = new zim.Label({
                text:tekst,
                size:40,
                align:"center",
                color: "white",
                lineWidth: 500
            });
            label2.x = rect.x + rect.width/2;
            label2.y = image.y + image.height+40;
            beeldContainer.addChild(label2);

            //x aantal knoppen neerzetten
            var knopArray = [];

            for(var i =0; i<tekstKnopArray.length; i++){
                var knop = new zim.Button({
                    width: 400,
                    height: 60,
                    label:tekstKnopArray[i],
                    color:0xfff,
                    rollColor: frame.grey});

                knopArray.push(knop);
                knop.x = label.x - knop.width/2;
                knop.y = label2.y+125+(100*i);
                beeldContainer.addChild(knop);

                knop.addEventListener("click", gaVerder);
            }

            TweenLite.to(beeldContainer, 0.5, {delay:0.5, alpha:1});

            //event listeners
            if(url){
                image.addEventListener("click", gaWebsite);
                image.cursor = "pointer";
            }


            function gaWebsite(){

                zgo(url, "_blank");

            }


            function gaVerder(e){

                //juist event roepen
                var plekArray = knopArray.indexOf(e.target);
                that.MIDDEN.dispatchEvent(eventArray[plekArray]);

                //alle knoppen ontdoen van listener
                for(i =0; i<knopArray.length; i++){
                    knopArray[i].removeEventListener("click", gaVerder);
                }
                //plaatje ontdoen van listener
                image.removeEventListener("click", gaWebsite);

                TweenLite.to(beeldContainer,0.5,{alpha:0, onComplete:haalWeg})

                function haalWeg(){
                    that.MIDDEN.removeChild(beeldContainer);
                }
            }


        }

        /*maakBestemming("Klimbos Achterhoek", titel
                            "http://klimbos.nl/klimbos-achterhoek/", link
                            "klimbos.jpg", plaatje
                            "klik op het plaatje om naar de website te gaan, klik op het plaatje om naar de website te gaan", // tekst
                            ["vervolg route", "trein", "bus"], //knoppen
                            ["gaVerder", "hallo", "poep"]);  events */

}

Routes.prototype = {
     
    constructor:Routes,
    
    plaatsHorizontaal:function(){
       contentH.addChild(this.MIDDEN);
    },
    
    plaatsVerticaal:function(){
        contentV.addChild(this.MIDDEN);
    },
    
    flipNaarHorizontaal:function(){
        routesV.content.removeChild(this.MIDDEN);
        routesH.content.addChild(this.MIDDEN);
        
    },
    
    flipNaarVerticaal:function(){
        routesH.content.removeChild(this.MIDDEN);
        routesV.content.addChild(this.MIDDEN);
    },
    
    zetAan:function(kleur){
        
        if(kleur== "paars"){
            createjs.Ticker.setFPS(12);
           this.maakRoutePaars(); 
        }else if(kleur == "geel"){
            createjs.Ticker.setFPS(12);
            this.maakRouteGeel();
        }else{
            createjs.Ticker.setFPS(48);
            this.maakRouteAqua();
        }
        this.routeAan = true;
        
    },
    
    zetUit:function(){
        createjs.Ticker.setFPS(24);
        if(this.routeAan){
            this.MIDDEN.removeAllChildren();
            this.MIDDEN.removeAllEventListeners();
            this.route.removeAllEventListeners();
            this.route = null;
            this.routeAan = false;
        }
    }
}




    




