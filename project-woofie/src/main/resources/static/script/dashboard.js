$(document).ready(function(){
  $('#triangleTopIcon').click(function(){
	  $('#tutProgCon').toggle('toggle');
	  $(this).toggleClass('glyphicon-triangle-top').toggleClass('glyphicon-triangle-bottom');
  });
});


$(document).ready(function(){
    $('.navlist a').click(function(e) {
	    e.preventDefault();
	    $('.navlist a').removeClass('active');
	    $('.navlist a').addClass('nav');
	    $(this).toggleClass('nav');
	    $(this).toggleClass('active');
	});
});