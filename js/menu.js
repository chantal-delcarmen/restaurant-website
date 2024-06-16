 
 
 
/* jQuery code for toggling the show-description class of the menu items */
/* Code adapted from https://codepen.io/timimasa/pen/RNyGJm. Accessed on April 19, 2021. */

/* Document ready function which ensures that the document is ready before the following code runs */
 $(document).ready(function(){

	/* When clicking on a div call the following function: */
	$('div').on('click', function() {
		
        $(this).toggleClass('show-description'); /* Toggle on the show-description class on 'this' div */
    });
	
});
