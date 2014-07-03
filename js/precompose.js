$(document).ready(function () {

var menu = $('.navbar');
var origOffsetY = menu.offset().top;

function scroll() {
	if($('#logo').css('display') == 'none')
	{
		origOffsetY = origOffsetY + 1;
	}
    if ($(window).scrollTop() >= origOffsetY) {
		$('.navbar').addClass('navbar-fixed-top');
		$('.inner-nav').removeClass('container-fluid');
		$('.inner-nav').addClass('container');
		$('body').addClass('body');
    } else {
		$('.navbar').removeClass('navbar-fixed-top');
		$('.inner-nav').addClass('container-fluid');
		$('.inner-nav').removeClass('container');
		$('body').removeClass('body');
    }


   }

  document.onscroll = scroll;

});
$(function() {
    $(".anyClass").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
		vertical: true,
		visible:2.9
    });
});


$(function() {
});
function MakeRequest(divid,url) {
        
		out='<iframe src=	"http://player.vimeo.com/video/'+url+'?title=0&amp;byline=0&amp;portrait=0&amp;color=d9c787&amp;autoplay=1" width="700" height="394" frameborder="0"></iframe>'; 
		$("#player").html(""); 
		$("#"+divid).html(out);
}


function MakeYouTubeRequest(divid,url) {
        out='<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/'+url+'fs=1&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/'+url+'?fs=1&amp;hl=en_US&amp;rel=0&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="700" height="394"></embed></object>';
		 
		$("#player").html("");  
		$("#"+divid).html(out);
}

function StopVid(divid) {
	    $("#video-details").html('');
		$("#player").html('');
		$("#youtube_player").html('');
		$("#"+divid).html(out);	
}


function Caption(urlToLoad,divid) {
		out='url';
        $("#video-details").load(urlToLoad);
		$("#"+divid).html(out);	
		
		
}
function captions(video)
{
	var captions = [{
		"video": "96223403", // new property for this object
    	"Title": "Name1",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
	    "video": "17588250", // new property for this object
    	"Title": "Name2",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "33295846", // new property for this object
    	"Title": "Name3",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "45914761", // new property for this object
    	"Title": "Name4",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "58749008", // new property for this object
    	"Title": "Name5",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "96223407", // new property for this object
    	"Title": "Name6",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "96619643", // new property for this object
    	"Title": "Name7",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "77620067", // new property for this object
    	"Title": "Name8",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "28997114", // new property for this object
    	"Title": "Name9",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "77615525", // new property for this object
    	"Title": "Name10",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "19772916", // new property for this object
    	"Title": "Name11",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "27924819", // new property for this object
    	"Title": "Name12",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	},
	{
		"video": "22116078", // new property for this object
    	"Title": "Name13",
    	"desc": "This is the video Descriptions. Here you will get info about the video currently playing"
	}]

	for (i=0; i < captions.length; i++)
	{
		if (captions[i].video == video)
		{
			var description = document.getElementById("description");
			description.innerHTML =                   
				"<h2>" + captions[i].Title + "</h2>" +
                "<p>" + captions[i].desc + "</p>" +
                "<p><strong>My duties:</strong> Composting, 2D graphics, music, VO and co-project managment.</p>";
			description.style.display = "block";
			break;
		}
	}
	
	
}

