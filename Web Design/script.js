$(document).ready(function(){
	
	getLogos();
	
	function getLogos() {
		$.ajax({
			url: "https://api.imgur.com/3/album/iYguT/images",
			headers: {"Authorization": "Client-ID e47ec6bd83f70c9"}
		}).done(function(obj){
			$.each(obj.data, function(i, item){
				var full = [];
				full.push("<a target='_blank' href='" + item.link + "' " + "class='" + item.description + "'>" + "<img src='" + item.link + "'></a>");
				$(full.join()).appendTo("#logos");
			});
		});
	}

});

