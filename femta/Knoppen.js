function Knoppen(){
    
    this.container = new zim.Container(400,600);
    
    this.labels = ["uitdaging", "oplossing", "voorbeeld"];
    this.knoppen = [];
    
    for(var i=0; i<3;i++){

        var label = new zim.Label({
           text:this.labels[i],
           size:30,
           color:"white"
        });
        var button = new zim.Button({
           label:label,
           width:175,
           height:75,
           color:"orange"
        });
        
        button.name = this.labels[i];
        this.knoppen.push(button);
        this.container.addChild(button);
        
        button.on("click", behandelMenu)
    }
    
    
} 

Knoppen.prototype = {
     
    constructor:Knoppen,
    
    plaatsHorizontaal:function(){
       footerH.addChild(this.container);
        this.container.centerReg(footerH);
        
        for(var i=0; i<this.labels.length;i++){
            this.knoppen[i].x =0+this.knoppen[i].width/2;
            this.knoppen[i].y = i*150+125;
        }
        
    },
    
    plaatsVerticaal:function(){
        footerV.addChild(this.container);
        //this.container.center(footerV)
        for(var i=0; i<this.labels.length;i++){
            this.knoppen[i].x = i*200+12;
            this.knoppen[i].y = 100;
        }
    },
    
    zetUit:function(){
        
        
    }
}