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
		//$('.navbar').removeClass('navhide');
		$('.navbar').removeClass('navhide');
		$('.navbar').addClass('navshow');
		
    } else {
		$('.navbar').removeClass('navbar-fixed-top');
		$('.inner-nav').addClass('container-fluid');
		$('.inner-nav').removeClass('container');
		$('.navbar').addClass('navhide');
		$('.navbar').removeClass('navshow');
		
    }


   }

  document.onscroll = scroll;
  $( "#header" ).hover(
  function() {
    $('#navbar').addClass( "navshow" );
	$('#navbar').removeClass( "navhide" );
  }, function() {
	$('#navbar').removeClass( "navshow" );
    $('#navbar').addClass( "navhide" );
  }
);


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
function MakeRequest(divid,url,videoDiv) {
		$("#player").hide();
		
		out='<iframe id=player3 src="http://player.vimeo.com/video/'+url+'?title=0&amp;byline=0&amp;portrait=0&amp;color=d9c787&amp;autoplay=1;player_id=player1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'; 
		$("#player2").html(""); 
		$("#player2").show(); 
		$("#player2").addClass("embed-container");
		$( ".wrapper" ).removeClass( "wrapper" );
		$("#"+videoDiv).addClass("wrapper");
		$("#"+divid).html(out);
		
		var iframe = $('#player3')[0],
		player = $f(iframe),
		status = $('.status');
	
	// When the player is ready, add listeners for pause, finish, and playProgress
	player.addEvent('ready', function() 
	{
		
		
		function setupSimpleButtons() 
		{
		                    
			var pauseBtn = $('#res');
			PauseItems = document.getElementsByClassName("res")
			for (i=0; i < PauseItems.length; i++)
			{
				PauseItems[i].addEventListener('click',function() {player.api('pause');}, false);	
			}
		}
		
		player.addEvent('finish', onFinish);setupSimpleButtons();
	});
	
}
function onFinish()
{

}
function DemoReel(divid,url){
		$("#player2").hide();
		//var out = ['http://player.vimeo.com/video/'+url+'?title=0&amp;byline=0&amp;portrait=0&amp;color=d9c787&amp;autoplay=0;player_id=player1'];
        //var iframe = $('#player1');
		//iframe.attr('src', out);
		out='<iframe id=player1 src="http://player.vimeo.com/video/'+url+'?title=0&amp;byline=0&amp;portrait=0&amp;color=d9c787&amp;autoplay=0;player_id=player1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'; 
		$("#player").html(""); 
		$("#player").addClass("embed-container");
		$("#"+divid).html(out);
		$("#player").show(); 
		$( ".wrapper" ).removeClass( "wrapper" );
		$("#"+divid).html(out);
		var iframe = $('#player1')[0],
		player = $f(iframe),
		status = $('.status');
		var description = document.getElementById("description");
		$("#description").addClass('navhide');
		$("#description").removeClass('navshow');
	player.addEvent('ready', function() 
	{
		
		
		function setupSimpleButtons() 
		{
		                    
			var pauseBtn = $('#res');
			PauseItems = document.getElementsByClassName("res")
			for (i=0; i < PauseItems.length; i++)
			{
				PauseItems[i].addEventListener('click',function() {player.api('pause');}, false);	
			}
		}
		
		player.addEvent('finish', onFinish);setupSimpleButtons();
	});
	
	
		
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
    	"Title": "GE 'Oil and Gas'",
    	"desc": "An internal marketing piece for a global GE employee event<br><i>A Midwest Studios production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects compositing and animation, music and co-project management"
	},
	{
	    "video": "17588250", // new property for this object
    	"Title": "MG COLLECTIVE",
    	"desc": "The MG Collective connects the professional community, provides quality industry leadership and education, shares ideas and collectively grows the state of Indiana's identity within the national animation industry.<br><i>A precompose production</i>",
		"MyDuty": "<strong>My duties:</strong> Concept and design, music, After Effects and Cinema 4D animation"
	},
	{
		"video": "33295846", // new property for this object
    	"Title": "Buy UR Hardware",
    	"desc": "A mobile marketing piece (a style test, conceptual piece)<br><i>A precompose production</i>",
		"MyDuty": "<strong>My duties:</strong> Concept and design, music, After Effects and Cinema 4D animation"
	},
	{
		"video": "45914761", // new property for this object
    	"Title": "North Meridian Hardware",
    	"desc": "A 15-second broadcast spot (a style test, conceptual piece)<br><i>A precompose production</i>",
		"MyDuty": "<strong>My duties:</strong> Concept and design, music, After Effects and Cinema 4D animation"
	},
	{
		"video": "58749008", // new property for this object
    	"Title": "DWA 'Meeting Planning Services'",
    	"desc": "A marketing piece for DWA's Meeting Planning Services<br><i>A DWA production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects animation"
	},
	{
		"video": "96223407", // new property for this object
    	"Title": "Encana '5 Phases'",
    	"desc": "An informational marketing piece for Encana geared toward the education behind the acquisition of oil and natural gas resources.<br><i>A Midwest Studios production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects compositing, animation, VO and project management"
	},
	{
		"video": "96619643", // new property for this object
    	"Title": "GE 'LNG in a box'",
    	"desc": "An external marketing piece used to educate the public about GE's natural gas, small scale fueling solutions<br><i>A Midwest Studios production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects compositing, animation, VO, music and project management"
	},
	{
		"video": "77620067", // new property for this object
    	"Title": "KOCH 'MegaPure'",
    	"desc": "An external marketing piece used to educate the public about KOCH's new ultra filtration system, the MegaPure<br><i>A Midwest Studios production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects animation, VO and SFX"
	},
	{
		"video": "28997114", // new property for this object
    	"Title": "Hendricks Regional Health",
    	"desc": "A 15-second broadcast piece<br><i>A Bennett Innovations production, in cooperation with Hotbed Creative</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects and Cinema 4D animation"
	},
	{
		"video": "77615525", // new property for this object
    	"Title": "'SURFACE'",
    	"desc": "A string of style test I completed for Midwest Studios when they were developing their new identity. Based on their 6 studios, square brand geometry, services and creative process<br><i>A Midwest Studios production</i>",
		"MyDuty": "<strong>My duties:</strong> Concept and design, After Effects animation"
	},
	{
		"video": "19772916", // new property for this object
    	"Title": "'GAP'", 
    	"desc": "A personal animation. I tried to break down a spot done by Ross Woods. My goal was to see if I could figure out how he did it and replicate it myself.<br><i>A precompose production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects and Photoshop animation, SFX"
	},
	{
		"video": "27924819", // new property for this object
    	"Title": "'PASTEL'",
    	"desc": "A personal animation. My goal was to play with some shading and animation techniques that were new to me at the time.<br><i>A precompose production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects and Cinema 4D animation"
	},
	{
		"video": "22116078", // new property for this object
    	"Title": "'This ECO House'",
    	"desc": "An intro for a web series involving green solutions for everyday issues<br><i>A precompose production</i>",
		"MyDuty": "<strong>My duties:</strong> After Effects and Cinema 4D animation, music and SFX"
	}]

	for (i=0; i < captions.length; i++)
	{
		if (captions[i].video == video)
		{
			var description = document.getElementById("description");
			description.innerHTML =                   
				"<h2>" + captions[i].Title + "</h2>" +
                "<p>" + captions[i].desc + "</p>" + 
				"<p>" + captions[i].MyDuty + "</p>";
			description.style.display = "block";
			$("#description").removeClass('navhide');
			$("#description").addClass('navshow');
			
			break;
		}
	}
	
	
}
