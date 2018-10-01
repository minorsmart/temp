function Intro(){
    
    this.container = new zim.Container(1000,1000);
    
    
    //zim.Label = function(text, size, font, color, rollColor, shadowColor, shadowBlur, align, valign, lineWidth, lineHeight, fontOptions, backing)
    this.uitdagingLabel = new zim.Label({
        text: "De uitdaging",
        size: 100,
        color: "white"
    })
    
    this.oplossingLabel = new zim.Label({
        text:"De oplossing",
        size: 100,
        color: "white"
    })
    
    this.container.addChild(this.uitdagingLabel).alpha =0;
    this.uitdagingLabel.centerReg(this.container);
    this.container.addChild(this.oplossingsLabel);
    this.oplossingLabel.centerReg(this.container).alpha=0;
    
}

Intro.prototype.plaatsHorizontaal = function(){
    contentH.addChild(this.container);
    //this.container.centerReg(contentH);
}

Intro.prototype.plaatsVerticaal = function(){
    contentV.addChild(this.container);
    //this.container.centerReg(contentV);
}

Intro.prototype.beginIntro = function(){
    
    var that = this;
    
    this.uitdagingLabel.visible = true;
    this.uitdagingLabel.alpha = 0;
    this.oplossingLabel.visible = false;

    TweenLite.to(this.uitdagingLabel, 1, {
        alpha:1, 
        ease:Expo.easeInOut,
        onComplete:uitdagingFadeOut
    });
    
    function uitdagingFadeOut(){
        stage.dispatchEvent("klaarVoorFilm1");
        
            TweenLite.to(that.uitdagingLabel, 1, {
                alpha:0, 
                ease:Expo.easeInOut,
                onComplete: haalTitelWeg
            }); 
    }
        
    
    function haalTitelWeg(){
        
        that.uitdagingLabel.visible = false;
    }
}

Intro.prototype.startIntroOplossing = function(){
     
    var that = this;
    
    this.oplossingLabel.visible = true;
    this.oplossingLabel.alpha = 0;
    this.uitdagingLabel.visible = false;

    TweenLite.to(this.oplossingLabel, 1, {
        alpha:1, 
        ease:Expo.easeInOut,
        onComplete:oplossingFadeOut
    });

    function oplossingFadeOut(){
        
            stage.dispatchEvent("klaarVoorFilm2");

            TweenLite.to(that.oplossingLabel, 2, {
                alpha:0, 
                ease:Expo.easeInOut,
                onComplete: haalTitelWeg
            });
        
    }

    function haalTitelWeg(){

        that.oplossingLabel.visible = false;
    }  
     
}

Intro.prototype.zetUit = function(){
    
    this.oplossingLabel.visible = false;
    this.uitdagingLabel.visible = false;
}

