var lightbox;

$(function() {


    /* MOGELIJKE OPTIES 
    backdrop_opacity
    video_fill_percent
    autoplay
    show_controls
    on_api_ready
    on_video_ready
    on_video_paused
    on_video_ended
    on_video_started
    on_video_buffering
    autoclose
    on_closed
    */
    lightbox = new t_lightbox({
        backdrop_opacity : 0.8,
        video_fill_percent : 80,//procent
        close_text : "sluiten",

        // on_api_ready : function() {
        //     //console.log("api is klaar om startvideo aan te roepen");
        // },
        // on_video_ready : function() {
        //     //console.log("de video is geladen");
        // },
        // on_video_paused : function() {
        //    // console.log("de video is gepauzeerd");
        // },
        on_video_ended : function() {
            //console.log("de video is geeindigd");
            frame.dispatchEvent("videoGestopt");
        },
        // on_video_started : function() {
        //    // console.log("de video is gestart");
        // },
        // on_video_buffering : function() {
        //     //console.log("de video is aan het bufferen");
        // },
        on_closed : function() {
           // console.log("lightbox gesloten");
            frame.dispatchEvent("videoGestopt");
        }
    });
});

// SCALING OPTIONS
// scaling can have values as follows with full being the default
// "fit"		sets canvas and stage to dimensions and scales to fit inside window size
// "outside"	sets canvas and stage to dimensions and scales to fit outside window size
// "full"		sets stage to window size with no scaling
// "tagID"		add canvas to HTML tag of ID - set to dimensions if provided - no scaling

var scaling = "full"; // makes stage the window size but does not scale content
var width = null;
var height = null;
var color = "#ebcb35";
var liggendDevice;
var isLooping = true;
var knoppenDoenHet = true; //voor film
var aanHetLaden = false;

var stage,stageW,stageH;

var headerH, headerV, contentH, contentV, footerH, footerV

var intro;
var header;
var keuzeScherm;
var knoppen;
var assetsArray;
var routes;
var videoSpeler;
var vanillaModal;
var startKnop;





var frame = new zim.Frame(scaling, width, height, color); // see docs for more options and info
frame.on("ready", function() {
    
    var liggendDevice;

	stage = frame.stage;
	stageW = frame.width;
	stageH = frame.height;
    
    zim.Ticker.always(stage);
    
    //achtergrond//////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    var achtergrond = new Achtergrond();
    
    
    ///layout/////////////////////////////////////////////////////////////////////////////////////////////////////////
    headerH = new zim.Container(300,600).addTo(stage);
    contentH = new zim.Container(1000,1000).addTo(stage);
    footerH = new zim.Container(300,600).addTo(stage);
    
    headerV = new zim.Container(600,300).addTo(stage);
    contentV = new zim.Container(1000,1000).addTo(stage);
    footerV = new zim.Container(600,300).addTo(stage);
    
    
    //holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey)
    var layoutH = new zim.Layout({
       holder:stage,
       regions:[
          {object:headerH, valign:"center"},
          {object:contentH, valign:"center"},
          {object:footerH, valign:"center", marginLeft:5}
       ],
       lastMargin:0, backgroundColor:null, vertical:false, regionShape: new zim.Shape(),scalingObject:stage
    });
    
    //holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey)
    var layoutV = new zim.Layout({
       holder:stage,
       regions:[
          {object:headerV},
          {object:contentV},
          {object:footerV}
       ],
       lastMargin:0, backgroundColor:null, vertical:true, regionShape: new zim.Shape(),scalingObject:stage
    });
    
    layoutH.dispose();
    layoutV.dispose();
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    maakDoorloopKlaar();
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function plaatsSpullenHorizontaal(){
        //header
        headerV.removeAllChildren();
        for(var i=0; i<assetsArray.length; i++){
            assetsArray[i].plaatsHorizontaal();
        }
    }
    
    function plaatsSpullenVerticaal(){
        //header
        headerH.removeAllChildren();
        
        for(var i=0; i<assetsArray.length; i++){
            assetsArray[i].plaatsVerticaal();
        }
    }
    
    ////////////////////////////////////////////eerste keer plaatsen///////////////////////////////////////////////////////////
    
    if(stageW>stageH){
        layoutV.disable();
        liggendDevice = true;
        plaatsSpullenHorizontaal();
    }else{
        layoutH.disable();
        liggendDevice = false;
        plaatsSpullenVerticaal();
        
    }
    
    //////// resizing /////////////////////////////////////////////////////////////////////////////////////////////////////////
    
	// put resizing code in here
	// resize also gets called initially
	frame.on("resize", resize);
    
	function resize(e) {
		stageW = frame.width;
		stageH = frame.height;
        
        achtergrond.schaal();
        
        if(stageW>stageH){
            //liggen-liggen
            if(liggendDevice){
                layoutH.resize();
            }else{
                layoutV.disable();
                layoutH.enable();
                layoutH.resize();
                liggendDevice = true;
                plaatsSpullenHorizontaal();
            }
        }else{
            if(liggendDevice){
                layoutH.disable();
                layoutV.enable();
                layoutV.resize();
                liggendDevice = false;
                plaatsSpullenVerticaal();
            }else{
                layoutV.resize();
            }
        }
        
		stage.update();
	}

}); // end of ready

function Header(){
    
    //text, size, font, color, rollColor, shadowColor, shadowBlur, align, valign, lineWidth, lineHeight, fontOptions, backing)
    this.titel = new zim.Label({
        text: "Smaas",
        size: 150,
        color: "white",
        align: "center"
    });
}

Header.prototype = {
    
    constructor:Header,
    
    plaatsHorizontaal:function(){
        this.titel.rotation = 90;
        headerH.addChild(this.titel);
        this.titel.centerReg(headerH);
    },
    
    plaatsVerticaal:function(){
        this.titel.rotation = 0;
        headerV.addChild(this.title);
        this.titel.centerReg(headerV);
    }
}

function maakDoorloopKlaar(){
    
    header = new Header();
    intro = new Intro();
    knoppen = new Knoppen();
    keuzeScherm = new KeuzeScherm();
    keuzeScherm.zetUit();
    routes = new Routes();
    
        
    assetsArray = [header, intro, knoppen,keuzeScherm,routes];
    
    maakStartKnop();
}

function behandelMenu(e){
    
        isLooping = false;
        //als op andere knop wordt geklikt dan startknop
        if(startKnop){
            stage.removeChild(startKnop);
            startKnop.removeEventListener("click", startLoop);
            startKnop = null;
            
        }
        
        stage.removeAllEventListeners();
        keuzeScherm.zetUit();
        routes.zetUit();
        intro.zetUit();
    
        if(e.target.name=="uitdaging"){       
            startLoop();

        }else if(e.target.name =="oplossing"){

            speelTweedeFilm();

        }else if(e.target.name=="voorbeeld"){

            keuzeScherm.zetAan();

        }
    
}

function maakStartKnop(){
    startKnop = new zim.Button({
        width:150,
        height:75,
        label:"start",
        color:frame.orange
    });
    startKnop.center(stage);
    startKnop.addEventListener("click", klikStartKnop);
    
}

function klikStartKnop(){
    startKnop.removeEventListener("click", startLoop);
    stage.removeChild(startKnop);
    startKnop = null;
    startLoop();
}

function startLoop(){
    
    stage.addEventListener("klaarVoorFilm1", speelEersteFilm);
    
    intro.beginIntro();
    
}

function speelEersteFilm(){
    
    lightbox.startvideo("YMOdM_B95TI");
    frame.addEventListener("videoGestopt",speelTweedeFilm);

}

function speelTweedeFilm(){

    frame.removeEventListener("videoGestopt",speelTweedeFilm);
    stage.removeAllEventListeners();
    
    var that = this;
    intro.staatAan = true;
    intro.startIntroOplossing();
    stage.addEventListener("klaarVoorFilm2", speelFilm);
    
    function speelFilm(){
        
        
        stage.removeEventListener("klaarVoorFilm2", speelFilm);
        lightbox.startvideo("xtARd3WGOfE")
        frame.addEventListener("videoGestopt",maakKeuzeScherm);


    }
}

function maakKeuzeScherm(){
    stage.removeAllEventListeners();
    
    keuzeScherm.zetAan();
    
    routes.zetUit();
    
}

function maakRoute(kleur){
    routes.zetAan(kleur);
    keuzeScherm.fadeUit();
}





