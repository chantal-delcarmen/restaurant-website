
/*Customer Review Slideshow

Built HTML base with an unordered list to prepare for JS. 
CSS added to make the slides work.
JS used to add the slider functionality. 
Code copied from Site Point on March 22 2021, 
accessed from https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/ 
*/


/* This file was originally created with pure JS. I have modified it to include jQuery in some places
(using jQuery instead of JS for 'document.querySelectorAll') */

/* Resource accessed on April 19, 2021:
https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/


/*Explanation of Code:
The explanation for each line of code precedes it*/

/*Critique of code follows at the bottom of the code*/

/* First we define the variable 'slides', then we have querySelectorAll which gets the slides from our container and this gets assigned to the var 'slides' */
var slides = $('#slides .slide'); 

/* The next line of code defines the var 'currentSlide', then assigns the initial value of 0 to it */
var currentSlide = 0;

/* Here we are defining the variable 'slideInterval', then assigning the 'setInterval' method to it, which calls the nextSlide function, every 6500 ms (6.5 secs) */
var slideInterval = setInterval(nextSlide,6500);

/* Here is the 'nextSlide' function we are calling in the previous piece of code */
function nextSlide() {
	
	/* This line changes the class of the current slide to slide. This is so it doesn't show. The CSS takes care of the fade effect. */
    slides[currentSlide].className = 'slide'; 
	
	/* Here we are adding 1 to the current slide to change it to the next slide. We use the % operator here to go back to the first slide when we hit the end of the slides.
	
	Note: the % operator divides 2 numbers and gives back the remainder. We can use it here to bring us back to the start when we reach the end. Since we have 3 slides in total, here is how it does this: 1%3=1, 2%3=2, 3%3=0 --> 0 becomes the current slide after Slide 3, then we add 1 to it to get back to Slide 1. */
    currentSlide = (currentSlide+1)%slides.length;
	
	/* Now that we have changed to the new slide in the last part, we change the class of 'current slide' to 'slide showing', so that the current slide is showing. */
	/* Reminder: CSS code takes care of the fade effect via the opacity transition */
    slides[currentSlide].className = 'slide showing';
}

/* 
Critique of Code

The javascript part for this review slideshow is straight-forward, and only 7 lines of code in total. The first three lines are used for defining and assigning variables (slides, currentSlide, slideInterval) required for the function, nextSlide, to operate.

The code was properly indented for the block code of function nextSlide; this made it easier to read. Camel case is used for the identifiers, which makes the code easier to read. The variable identifiers were well chosen beccause they are simple and self-explanatory. There was no comments in the code itself which could have been added to understand better what each line of code did.  Overall, I believe it was a well-written, easy to understand piece of code and tutorial to follow for a beginner JS programmer.

*/