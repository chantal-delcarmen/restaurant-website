/* Code adapted from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp. Accessed on April 13, 2021 */


/* This file was originally created with pure JS. I have modified it to include jQuery in some places
(using jQuery instead of JS for 'document.getElementById') */

/* Resource accessed on April 19, 2021:

jQuery equivalent for JS 'document.getElementById':  
https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery */


/* This function toggles between adding 'responsive' to the topnav class when the user clicks on the hamburger menu icon */
function navToggle() {
	var x = $('#myTopnav')[0]; /* Points to div with id = myTopnav */
  
	if (x.className === "topnav") { /* If class of div equals 'topnav', change it to 'topnav responsive' class */
		x.className += " responsive";
	} else {
		x.className = "topnav"; /* If class of div equals 'topnav responsive' class, change class to 'topnav' */
	}
}

