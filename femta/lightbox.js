

var my_t_l = null;

function t_lightbox(options) {

	this.backdrop_opacity = options.hasOwnProperty("backdrop_opacity") ? options.backdrop_opacity : 0.5;

	this.video_fill_percent = options.hasOwnProperty("video_fill_percent") ? options.video_fill_percent : 80;
	this.temp_video_fill_percent = this.video_fill_percent;
	this.autoplay = options.hasOwnProperty("autoplay") ? options.autoplay : true;
	this.show_controls = options.hasOwnProperty("show_controls") ? options.show_controls : false;
	this.on_api_ready = options.hasOwnProperty("on_api_ready") ? options.on_api_ready : $.noop;
	this.on_video_ready = options.hasOwnProperty("on_video_ready") ? options.on_video_ready : $.noop;
	this.on_video_paused = options.hasOwnProperty("on_video_paused") ? options.on_video_paused : $.noop;
	this.on_video_ended = options.hasOwnProperty("on_video_ended") ? options.on_video_ended : $.noop;
	this.on_video_started = options.hasOwnProperty("on_video_started") ? options.on_video_started : $.noop;
	this.on_video_buffering = options.hasOwnProperty("on_video_buffering") ? options.on_video_buffering : $.noop;
	this.autoclose = options.hasOwnProperty("autoclose") ? options.autoclose : true;
	this.on_closed = options.hasOwnProperty("on_closed") ? options.on_closed : $.noop();
	this.close_text = options.hasOwnProperty("close_text") ? options.close_text : "Sluiten";

	var backdropdiv = 
		"<div class=\"backdrop_t_lightbox\" style=\"opacity:0;display:none;position:fixed;top:0;bottom:0;left:0;right:0;z-index: 1000;\">"+
		"<div class=\"close_t_lightbox\" style=\"position:absolute; width:64px; height:32px; top:16px; right:16px; text-decoration:underline; line-height:32px; color:white; cursor:pointer; text-align:center; font-family:sans-serif;\"></div>"+
		"</div>";

	

	$("body").append(backdropdiv);

	var that = this;
	$(function(){
		$(".backdrop_t_lightbox").click(function() {
			that.closevideo();
		});
		$(window).on("resize", function() {
			that.window_resized();
		});
	});
	
	this.isVideoOpened = false;




	my_t_l = this;
    this.insert_iframe_api();
};

function onYouTubeIframeAPIReady() {
	if(my_t_l!=null) {
		my_t_l.iframe_api_ready();
	} else {
		alert("Youtube api geladen van een plek anders dan de t_lightbox library.");
	}
}

t_lightbox.prototype.insert_iframe_api = function(){
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

t_lightbox.prototype.iframe_api_ready = function() {
	(this.on_api_ready || $.noop)();
};

t_lightbox.prototype.openwebpage = function(url, options) {

	options = options || {};

	// verkies startvideo opties boven constructor opties
	if(!options.hasOwnProperty("backdrop_opacity")) {
		options.backdrop_opacity = this.backdrop_opacity;
	}
	if(!options.hasOwnProperty("video_fill_percent")) {
		options.video_fill_percent = this.video_fill_percent;
	} else {
		this.temp_video_fill_percent = options.video_fill_percent;
	}
	if(!options.hasOwnProperty("close_text")) {
		options.close_text = this.close_text;
	}



	// If video is not already open
	if(!this.isVideoOpened) {
		this.isVideoOpened = true;
		var that = this;
		$(".close_t_lightbox").text(options.close_text);
		$(".backdrop_t_lightbox").css("background-color", "rgba(0, 0, 0, "+options.backdrop_opacity+")");
		$(".backdrop_t_lightbox").css("display", "").animate({opacity:1}, 500, "swing", function() {
				
			var video_height = 0;
			var video_width = 0;

			if (($(".backdrop_t_lightbox").height() * (16/9)) > $(".backdrop_t_lightbox").width()) {
				video_width = ($(".backdrop_t_lightbox").width()*((options.video_fill_percent)/100));
				video_height = video_width / (16/9);
			} else {
				video_height = ($(".backdrop_t_lightbox").height()*((options.video_fill_percent)/100));
				video_width = video_height * (16/9);
			}

			var video_top = ($(".backdrop_t_lightbox").height() - video_height) / 2;
			var video_left = ($(".backdrop_t_lightbox").width() - video_width) / 2;

			$(".backdrop_t_lightbox").append("<div style=\"left:"+video_left+"px;top:"+video_top+"px;position:absolute;\" id=\"webpage_t_lightbox\"></div>");
			
			$("#webpage_t_lightbox").append("<iframe style=\"background: #FFFFFF;\" width=\""+video_width+"\" height=\""+video_height+"\" src=\""+url+"\" border=\"0\"></iframe>");

		});
	}
};

t_lightbox.prototype.startvideo = function(video_id, options) {

	options = options || {};

	// verkies startvideo opties boven constructor opties
	if(!options.hasOwnProperty("backdrop_opacity")) {
		options.backdrop_opacity = this.backdrop_opacity;
	}
	if(!options.hasOwnProperty("video_fill_percent")) {
		options.video_fill_percent = this.video_fill_percent;
	} else {
		this.temp_video_fill_percent = options.video_fill_percent;
	}
	if(!options.hasOwnProperty("autoplay")) {
		options.autoplay = this.autoplay;
	}
	if(!options.hasOwnProperty("show_controls")) {
		options.show_controls = this.show_controls;
	}
	if(!options.hasOwnProperty("on_api_ready")) {
		options.on_api_ready = this.on_api_ready;
	}
	if(!options.hasOwnProperty("on_video_ready")) {
		options.on_video_ready = this.on_video_ready;
	}
	if(!options.hasOwnProperty("on_video_paused")) {
		options.on_video_paused = this.on_video_paused;
	}
	if(!options.hasOwnProperty("on_video_ended")) {
		options.on_video_ended = this.on_video_ended;
	}
	if(!options.hasOwnProperty("on_video_started")) {
		options.on_video_started = this.on_video_started;
	}
	if(!options.hasOwnProperty("on_video_buffering")) {
		options.on_video_buffering = this.on_video_buffering;
	}
	if(!options.hasOwnProperty("autoclose")) {
		options.autoclose = this.autoclose;
	}
	if(!options.hasOwnProperty("close_text")) {
		options.close_text = this.close_text;
	}



	// If video is not already open
	if(!this.isVideoOpened) {
		this.isVideoOpened = true;
		var that = this;
		$(".close_t_lightbox").text(options.close_text);
		$(".backdrop_t_lightbox").css("background-color", "rgba(0, 0, 0, "+options.backdrop_opacity+")");
		$(".backdrop_t_lightbox").css("display", "").animate({opacity:1}, 500, "swing", function() {
				
			var video_height = 0;
			var video_width = 0;

			if (($(".backdrop_t_lightbox").height() * (16/9)) > $(".backdrop_t_lightbox").width()) {
				video_width = ($(".backdrop_t_lightbox").width()*((options.video_fill_percent)/100));
				video_height = video_width / (16/9);
			} else {
				video_height = ($(".backdrop_t_lightbox").height()*((options.video_fill_percent)/100));
				video_width = video_height * (16/9);
			}

			var video_top = ($(".backdrop_t_lightbox").height() - video_height) / 2;
			var video_left = ($(".backdrop_t_lightbox").width() - video_width) / 2;

			$(".backdrop_t_lightbox").append("<div style=\"left:"+video_left+"px;top:"+video_top+"px;position:absolute;\" id=\"ytvideo_t_lightbox\"></div>");
			
			player = new YT.Player('ytvideo_t_lightbox', {
	        	height: ""+video_height,
	        	width: ""+video_width,
	        	videoId: video_id,
	        	playerVars: { 'autoplay' : (options.autoplay?"1":"0"), 'controls': (options.show_controls?"1":"0"), 'rel':0 },
	        	events: {
	        		'onStateChange' : function(state) {
	        			switch(state.data) {
	        				case 0: // Ended
	        					(options.on_video_ended)();
	        					if(options.autoclose) {
	        						that.closevideo();
	        					}
	        				break;
	        				case 1: // Playing
	        					(options.on_video_started)();
	        				break;
	        				case 2: // Paused
	        					(options.on_video_paused)();
	        				break;
	        				case 3: // Buffering
	        					(options.on_video_buffering)();
	        				break;
	        				default:

	        				break;
	        			}
	        		}
	        	}
	        });
		});
	}
};

t_lightbox.prototype.window_resized = function() {

	if(this.isVideoOpened) {
		var video_height = 0;
		var video_width = 0;

		if (($(".backdrop_t_lightbox").height() * (16/9)) > $(".backdrop_t_lightbox").width()) {
			video_width = ($(".backdrop_t_lightbox").width()*((this.temp_video_fill_percent)/100));
			video_height = video_width / (16/9);
		} else {
			video_height = ($(".backdrop_t_lightbox").height()*((this.temp_video_fill_percent)/100));
			video_width = video_height * (16/9);
		}

		var video_top = ($(".backdrop_t_lightbox").height() - video_height) / 2;
		var video_left = ($(".backdrop_t_lightbox").width() - video_width) / 2;

		var $ytvideo = $("#ytvideo_t_lightbox");
		$ytvideo.attr("width", video_width);
		$ytvideo.attr("height", video_height);
		$ytvideo.css("top", video_top+"px");
		$ytvideo.css("left", video_left+"px");
	}
};

t_lightbox.prototype.closevideo = function() {
	if(this.isVideoOpened) {
		this.isVideoOpened = false;

		var that = this;
		$(".backdrop_t_lightbox").animate({opacity:0}, 500, "swing", function() {
			$(".backdrop_t_lightbox").css("display", "none");
			$("#ytvideo_t_lightbox").remove();
			$("#webpage_t_lightbox").remove();
			that.on_closed();
		});
	}


};
