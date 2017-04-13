$(document).ready(function(){
	getLogos();
	$("#logos").magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'animated zoomIn',
		image: {
			titleSrc: function(item) {
				var title = item.el.attr('class')
				if(title != "null") {
					return title;
				} else {
					return "";
				};
			},
			cursor: 'default'
		}
	});
});

function getLogos() {
	$.ajax({
		url: "https://api.imgur.com/3/album/yQF1h/images",
		headers: {"Authorization": "Client-ID e47ec6bd83f70c9"}
	}).done(function(obj){
		$.each(obj.data, function(i, item){
			var full = [];
			full.push("<a href='" + item.link + "' " + "class='" + item.description + "'>" + "<img src='" + item.link + "'></a>");
			$(full.join()).appendTo("#logos");
		});
	});
}


