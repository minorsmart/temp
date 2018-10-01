// load Youtube API code asynchronously
var tag = document.createElement('script')
 
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {autoplay:0},
        videoId: 'SbQc_JLUH7k',
        events: {
            'onReady': function(event){
                var player;

                player = document.getElementsByClassName('player')[0];
            },
            'onStateChange': function(event){}
        }
    })
}