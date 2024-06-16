
/* jQuery code to add the Validate plugin to validate form before submitting */

/* jQuery Validate plugin. 
Code adapted from https://jqueryvalidation.org/documentation/ accessed on April 18, 2021. */

/* Document ready ensure page is ready before running the following code */
/* $(document).ready(function() { */  /* <---- Blocked out, as unnecessary as script tag is added at the very end of the page, so document will already be ready */

	/* Pointing to id orderForm and using 'validate' from the plug in */
    $("#orderForm").validate({
		
        wrapper: "div", /* Indicate wrapped in div */
		
		/* States the rules for validation of form */
        rules: {
			
			/* For phone number input area */
			/* PhoneUS Method - additional method for jQuery Validate plugin. 
			Code adapted from https://jqueryvalidation.org/phoneUS-method/ accessed on April 18, 2021. */
			phone: {
				required: true, /* Checks that there is a value entered in the input area */ 
				phoneUS: true /* Checks that the value entered is a valid US/CAD phone number */
			}
        },

		
		/* submitHandler ensures that the form is properly completed before allowing submission of the form */
		/* Code adapted from https://stackoverflow.com/questions/28775875/how-can-i-disable-enable-submit-button-after-jquery-validation accessed April 18, 2021. */
        submitHandler: function(form) { //Passing 'form' argument in
		
            form.submit(); //Using 'form' argument here.
			
			confirmOrder(); //Calling confirmOrder() function defined in JS file: orderSystem
        }
    });
	
	/* Pointing to id contactForm and using 'validate' from the plug in */
    $("#contactForm").validate({
				
		/* States the rules for validation of form */
        rules: {
			
			/* Rules for phone number input area */
			phone: {
				required: true, /* Checks that there is a value entered in the input area */ 
				phoneUS: true /* Checks that the value entered is a valid US/CAD phone number */
			},
			
			/* Rules for email input */
            email: {
                required: true, /* Checks that there is a value for email */
                email: true /* Checks that the value entered is in a valid email format */
            } 
        }
	});
	
	
/* }); */