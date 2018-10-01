function Achtergrond(){
    
    var that = this;
    
    this.snelheid = 5;
    
    this.lucht = new zim.Rectangle(2000,1000, "#66CCFF").addTo(stage);
    
    this.achtergrondContainer = new zim.Container(1400,1000).addTo(stage);
    
    var zon = new lib.zon();
    zon.x = 900;
    zon.y = 200
    this.achtergrondContainer.addChild(zon);
    
    var gras = new zim.Rectangle(4000, 1000, frame.green);
    gras.y = 450;
    gras.x = -1000;
    this.achtergrondContainer.addChild(gras);
    
    frame.loadAssets([
		"achtergrond1.png",
        "achtergrond2.png"
	]);
    
    
    frame.on("complete",function(){
        
        frame.off("complete");
        
        var achtergrond = frame.asset("achtergrond2.png");
        achtergrond.x = -700;
        that.achtergrondContainer.addChild(achtergrond);
        
        var animatieAchter = new zim.Scroller({
            backing:achtergrond,
            speed:0.6})
        
        
        var achtergrond1 = frame.asset("achtergrond1.png");
        achtergrond1.x = -700
        that.achtergrondContainer.addChild(achtergrond1);
        
        
        var animatie = new zim.Scroller({
            backing:achtergrond1,
            speed:1})
        
    })
    
    this.schaal();
    
    stage.update();

}

Achtergrond.prototype = {
    
    constructor:Achtergrond,
    
    schaal:function(){
        
        this.achtergrondContainer.fit();
        
        this.lucht.scaleTo(stage, 100, 100, "both");
        
        //this.grond.scaleTo(stage, 100,100,"both");
        //this.grond.y = stageH/2+90;
        
        //this.laag1.scaleTo(stage, 90,90)
        //this.laag1.y= stageH/5
        //this.laag1Anim.y = this.grond.y;
        
    }
    
}