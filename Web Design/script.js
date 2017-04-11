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
				return item.class;
			},
			cursor: 'default'
		}
	});
});

function getLogos() {
	$.ajax({
		url: "https://api.imgur.com/3/album/Fn8rh/images",
		headers: {"Authorization": "Client-ID e47ec6bd83f70c9"}
	}).done(function(obj){
		$.each(obj.data, function(i, item){
			var full = [];
			full.push("<a href='" + item.link + "'>" + "<img src='" + item.link + "' class='" + item.description + "'></a>");
			$(full.join()).appendTo("#logos");
		});
	});
}


