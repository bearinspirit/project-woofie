$(document).ready(function(){
  $('#triangleTopIcon').click(function(){
	  $('#tutProgCon').toggle('toggle');
	  $(this).toggleClass('glyphicon-triangle-top').toggleClass('glyphicon-triangle-bottom');
  });
});
