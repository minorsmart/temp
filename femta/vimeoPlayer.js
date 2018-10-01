function VimeoCanvas(source){
    
    var that = this;
    
    this.vimeoPlays = false;
    
    this.videoFrame;
    this.vimeoPlayer;
    this.vimeoContainer;

    //container om te meten
    this.vimeoContainer = new zim.Container(704, 396);
    stage.addChild(this.vimeoContainer);
    this.vimeoContainer.scaleTo(stage, 90,90);
    this.vimeoContainer.center(stage);

    //i frame maken
    var videoWidth = 704;
    var videoHeight = 360;

    var videoWidthPix = "640px";
    var videoHeightPix = "360px";

    this.videoFrame = document.createElement('iframe');
    this.videoFrame.id = 'videoFrame'
    this.videoFrame.style.width = videoWidthPix;
    this.videoFrame.style.height = videoHeightPix;
    this.videoFrame.style.position = "absolute";
    this.videoFrame.style.top = 0;
    this.videoFrame.style.left = 0;
    this.videoFrame.setAttribute('src', 'https://player.vimeo.com/video/'+source+'?autoplay=0&title=0&portrait=0" width="640" height="360" frameborder="0"');

    document.body.appendChild(this.videoFrame);

    //dom element maken

    var vimeoVideo = new createjs.DOMElement(videoFrame);
    vimeoVideo.setBounds(0,0,640,360);
    vimeoVideo.x = frame.x + 32 * frame.scale;
    vimeoVideo.y = frame.y + 18 * frame.scale;

    this.vimeoContainer.addChild(vimeoVideo);
    
    this.closeBut = new zim.Button({
        label:"",
        width:20,
        height:20,
        color: "black",
        rollColor:"#444",
        borderColor:"white",
        borderWidth:"2",
        corner:5,
        icon:pizzazz.makeIcon("close", "white").scale(.3)
    });
    
    this.vimeoContainer.addChild(this.closeBut);
    this.closeBut.x = 640+10;
    this.closeBut.y = -10;
    

    this.vimeoPlayer = new Vimeo.Player(videoFrame);
    
    
    this.vimeoContainer.visible = false;
    
    
    frame.on("resize", resize);
             
    function resize(){
        
        if(that.vimeoPlays){
            that.vimeoContainer.scaleTo(stage,90,90);
            that.vimeoContainer.center(stage);
        }
        
        
    }
    
}

VimeoCanvas.prototype = {
     
    constructor:VimeoCanvas,
    
    pauze:function(){
        this.vimeoPlayer.pause();
    },
    
    loadMovie:function(source){
        
        var that = this;
        
        this.vimeoPlayer.loadVideo(source).then(function(id) {    
            
            that.vimeoPlayer.play();
            that.vimeoPlays = true;
            
            that.vimeoPlayer.on("ended", that.ontLaad);
            that.closeBut.on("click", that.ontLaadKnop);
        });
    },
    
    ontLaad:function(){
        
        
        var that = this;
        
        stage.dispatchEvent("MoviePlayed");
    },
    
    ontLaadKnop:function(){
        
        var that = this;
       
        
        stage.dispatchEvent("StoppedMovie");
    }
    
    
    
}
