
/* Animating the welcome div on the homepage */
/* Code adapted from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1_relative accessed on April 19, 2021 */

/* Document ready */
$(document).ready(function() {
	
	/* Points to id 'welcome', on hover do the following function: */
	$("#welcome").hover(function(){
   
		/* Animate this container by increasing font size */
		$(this).animate({
			
			fontSize: "50px"
            }, 1000); /* Speed: 1000ms */
	});
	
});
	
	
	

	

   
   
   
   
