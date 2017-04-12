$(document).ready(function(){

	//Create vars. 
	var scrollFromTop;
	var spaceForMountain;

	// Get vars. 
	getSpaceForMountain();

	// Scroll to top when the page loads. 
	$(window).on("beforeunload", function(){
		$(window).scrollTop(0);
	});

	// Update vars when the window is resized.
	$(window).resize(function(){
		$("#mountain1").css("top", "20.5vw");
		getSpaceForMountain();
	});

	// When you click the arrow, scroll down. 
	scrollWhenClickingOnStuff("#scrollDownIcon", "#aboutSection");

	// Navigation buttons scrolling. 
	navScrolling();

	// Scroll event. 
	$(document).scroll(function(){
		scrollFromTop = $(document).scrollTop();
		mountainEffect();
		showTheNavbar();
		showAnimations("#aboutParagraph1", "fadeInUpBig", 2);
		showAnimations("#aboutParagraph2", "fadeInUpBig", 2);
		showAnimations("#signature", "fadeInUpBig", 2);
		showAnimations("#logoButton", "fadeIn", 1.45);
		showAnimations("#webButton", "fadeIn", 1.45);
		showAnimations("#otherButton", "fadeIn", 1.45);
	});

	// Work Section BG change. 
	changeBGOnHover("#logoButton");
	changeBGOnHover("#webButton");
	changeBGOnHover("#otherButton");

	// Functions. 
	function getSpaceForMountain() {
		var spaceForMountainNotFinished = $( "#mountain1" ).css("top");
		spaceForMountain = Math.floor(spaceForMountainNotFinished.replace("px", ""));
	};

	function mountainEffect() {
		var scrollThatMuch = -scrollFromTop/2.5 + spaceForMountain;
	  $( "#mountain1" ).offset({ top: scrollThatMuch, left: 0 });
	}

	function showTheNavbar() {
		var offset = $("#aboutSection").offset().top - 50;
		if(scrollFromTop >= offset) {
			fadeInAnimation(".showOrHide");
		}
		else {
			fadeOutAnimation(".showOrHide");
		}
	}

	function scrollWhenClickingOnStuff(clickOn, scrollTo) {
		$(clickOn).click(function(event){
			event.preventDefault();
			scrollAnimation(scrollTo);
		});
	}

	function scrollAnimation(scrollTo) {
		$("body").animate({
			scrollTop: $(scrollTo).offset().top
		}, 800);
	}

	function navScrolling() {
		$("nav ul li a").click(function(event){
			event.preventDefault();
			var scrollTo = "#" + $(this).attr("id").replace("Nav", "Section");
			scrollAnimation(scrollTo);
		});
	}

	function showAnimations(element, animation, howSoon) {
		var offset = $(element).offset().top / howSoon;
		if (scrollFromTop >= offset) {
			$(element).css("visibility", "visible");
			$(element).addClass("animated" + " " + animation);
		}
	}

	function changeBGOnHover(element) {
		var background = element.replace("Button", "Background");
		$(element).hover(function(){
			$(background).stop();
			fadeInAnimation(background);
		},
		function(){
			$(background).stop();
			fadeOutAnimation(background);
		});
	}

	function fadeInAnimation(element) {
		$(element).css("visibility", "visible").fadeIn(400);
	}

	function fadeOutAnimation(element) {
		$(element).fadeOut(400, function(){
			$(this).css("visibility", "hidden");
		});
	}

});

