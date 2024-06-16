
/* jQuery code to add functionality to the 'Delete' button in the 'Orders Table' */

//How to remove a row with jQuery. Code adapted from https://stackoverflow.com/questions/170997/what-is-the-best-way-to-remove-a-table-row-with-jquery. Accessed April 18, 2021.
//How to select the button. Code adapted from https://api.jquery.com/button-selector/. Accessed on April 18, 2021.

/* Document ready function which ensures that the document is ready before the following code runs */
$(document).ready(function(){
	
	/* Pointing to the id orderTable and says on click, add the following function to the input type button */
	$("#orderTable").on("click", "button, input[type='button']", function() {
		
		$(this).closest("tr").remove(); /* Remove the closest row to 'this' (the current row you are on) */
		getTotals(); //Recalculate the totals once a row is deleted
	});
	
});
