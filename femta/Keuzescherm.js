//    var routesH = new HorizontaleLayout();
//    var routesV = new VerticaleLayout();


function KeuzeScherm(){
    
    this.container = new zim.Container(1000,1000);
    
    this.scherm = new lib.keuzeScherm();
    this.container.addChild(this.scherm);
    
    
    
    if(stageW>stageH){
        this.plaatsHorizontaal();
    }else{
        this.plaatsVerticaal();
    }
    
    this.label1 = new zim.Label({
        text:"Avontuur",
        size: 50,
        color: "white"
    }).addTo(this.container)
    this.label1.x = this.scherm.knopPaars.x - this.label1.width/2+10;
    this.label1.y = this.scherm.knopPaars.y+100;
    
    this.label2 = new zim.Label({
        text:"Ontdekken",
        size: 50,
        color: "white"
    }).addTo(this.container);
    this.label2.x = this.scherm.knopAqua.x - this.label2.width/2+35;
    this.label2.y = this.scherm.knopAqua.y+100;
    
    this.label3 = new zim.Label({
        text:"Actief",
        size: 50,
        color: "white"
    }).addTo(this.container);
    this.label3.x = this.scherm.knopGeel.x - this.label3.width/2;
    this.label3.y = this.label2.y;
    
    var knoppenArray = [];
    
    knoppenArray.push(this.label1);
    this.label1.name = "paars";
    knoppenArray.push(this.scherm.knopPaars);
    this.scherm.knopPaars.name = "paars";
    
    knoppenArray.push(this.label2);
    this.label2.name = "aqua";
    knoppenArray.push(this.scherm.knopAqua);
    this.scherm.knopAqua.name = "aqua";
    
    knoppenArray.push(this.label3);
    this.label3.name = "geel";
    knoppenArray.push(this.scherm.knopGeel);
    this.scherm.knopGeel.name = "geel";
    
    
    for(var i=0; i<knoppenArray.length;i++){
        knoppenArray[i].mouseChildren = false;
        knoppenArray[i].cursor = "pointer";
    }
     
    this.container.alpha = 0;

    
}

KeuzeScherm.prototype = {
     
    constructor:KeuzeScherm,
    
    plaatsHorizontaal:function(){
       contentH.addChild(this.container);
    },
    
    plaatsVerticaal:function(){
        contentV.addChild(this.container);
    },
    
    zetAan:function(){
      
        this.container.visible = true;
        this.container.alpha = 0;
        
        this.container.addEventListener("mousedown", this.maakJuisteRoute);
        this.container.addEventListener("mouseover", this.reageerMuis);
        this.container.addEventListener("mouseout", this.terugMuis)
        
         TweenLite.to(this.container, 1, {
        alpha:1, 
        ease:Expo.easeInOut,
        });
    },
    
    zetUit:function(){
        
        this.container.visible = false;
        
        this.container.removeEventListener("mousedown",this.maakJuisteRoute);
        this.container.removeEventListener("mouseover", this.reageerMuis);
        this.container.removeEventListener("mouseout", this.terugMuis);
        
    },
    
    fadeUit:function(){
        
        var that = this;
        
        TweenLite.to(this.container, 1, {alpha:0, onComplete:maakWeg});
        
        function maakWeg(){
            that.zetUit();
        }
        
        
    },
    
    maakJuisteRoute:function(event){
        
        //maakRoute
        maakRoute(event.target.name);
    },
    
    reageerMuis:function(event){
        TweenLite.to(event.target, 1, {scaleX:1.05, scaleY:1.05});
        
    },
    
    terugMuis:function(event){
        TweenLite.to(event.target, 1, {scaleX:1, scaleY:1});
    }
}