$(document).ready(function() {
	// Add header
	$.get('template/header.html', function(response) {
		var header = response;
		$('body').prepend(header);
	});
	
	// Add footer
	$.get('template/footer.html', function(response) {
		var footer = response;
		$('body').append(footer);
	});
});