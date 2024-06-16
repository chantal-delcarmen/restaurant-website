/* All code adapted from public code on W3 Schools, unless otherwise noted. 
W3Schools (1999-2021). Accessed on April 09-13, 2021 from https://www.w3schools.com/ */



/* This file was originally created with pure JS. I have modified it to include jQuery in some places
(using jQuery instead of JS for 'document.createElement' and 'document.getElementById') */

/* Resources accessed on April 19, 2021:

jQuery equivalent for JS 'document.createElement':
https://stackoverflow.com/questions/268490/jquery-document-createelement-equivalent

jQuery equivalent for JS 'document.getElementById':  
https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery */




//Set minimum date of input date calendar to today
//Code adapted from https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today. Accessed on April 12, 2021
//Resource: https://www.w3schools.com/js/js_dates.asp. Accessed on April 12, 2021
var today = new Date();  
var dd = today.getDate(); //Get day of today
var mm = today.getMonth()+1; //Get month of today
var yyyy = today.getFullYear(); //Get year of today

//If dd or mm is <10, add a '0' before the number to format number to double digits
if(dd < 10) {
	dd = '0' + dd
    } 
    if(mm < 10) {
        mm = '0' + mm
    } 

today = yyyy + '-' + mm + '-' + dd; //Combine variables to get today's date
$('#orderDate')[0].setAttribute('min', today); //Set min value on input calendar to today's date




//Code adapted from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string. Accessed on April 12, 2021
//Format numbers (price, totals) to currency
var formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});




//Declaring/initializing global variables
var grandTotal = 0;	
var orderDateDisplay;
var orderTime;
var fname = "";
var phone;
var email = "";


//Populating multiple fields in table based on dropdown selection using javascript. Code adapted and accessed April 12, 2021 from https://stackoverflow.com/questions/59502488/populating-multiple-fields-in-table-based-on-dropdown-selection-using-javascript

//Get product name and product price of selected item from dropdown list
function getOrderInfo(){
     	var selected = $('#ddlOrderBy')[0]; //Point to the dropdown list 'ddlOrderBy'
        var selectedName = selected.options[selected.selectedIndex].text; //Assign selected text as value of selectedName
        var selectedPrice = selected.options[selected.selectedIndex].value; //Assign selected value as value of selectedPrice
        var orderArray = [selectedPrice, selectedName]; //Create an array variable with selectedPrice and selectedPrice
		
        addRow(orderArray); //Call addRow() function, passing in orderArray to the function
}


//Define addRow() function and pass in orderArray to it
function addRow(orderArray){
	
		//Error handling: check if array is empty
		//If orderArray[0] or orderArray[1] are null, return false
		//Resource: What does exclamation mark mean. Accessed April 9, 2021 from  https://stackoverflow.com/questions/19491491/what-does-an-exclamation-mark-before-a-variable-mean-in-javascript
     	if(!orderArray[0] || !orderArray[1]){ 
     		return false;
     	}
		
		var table = $('#orderTable')[0];  //Var table points to orderTable
	
		//How do I iterate through table rows and cells in JavaScript? Accessed April 9, 2021 from  https://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript
		for (var i = 1, row; row = table.rows[i];  i++) { //iterate through rows		
		//rows accessed via 'row' var assigned in this 'for' loop
		
			//Error handling within 'for' loop: check if value or text already exist for every row in table
			if (row.cells[0].innerHTML == orderArray[1]) {
			alert (orderArray[1] + ' already exists')//If value or text already exists in table, alert 'already exists'
			return false;		
			}
		}
	
   
		//Define variables for addRow() function
        var row = $('<tr></tr>')[0]; //Creating a table row		
		
        var cellProduct = $('<td></td>')[0];  //Creating a td cell for 'product'
		var cellQty = $('<td></td>')[0]; //Creating a td cell for 'qty'
		var cellPrice = $('<td></td>')[0]; //Creating a td cell for 'price'
		var cellTotal = $('<td></td>')[0]; //Creating a td cell for 'total'
		var cellDelete = $('<td></td>')[0]; //Creating a td cell for 'delete'
		
  		//Creating input box for qty
		//JS make a cell editable. Code adapted and accessed April 10, 2021 from https://stackoverflow.com/questions/37446446/javascript-make-a-cell-editable
        var inputQty = $('<input></input>')[0]; //Creating input box for 'qty'
		
		var buttonDelete = $('<button></button>')[0]; //Creating a button for 'delete'


        // orderArray = [0 or selectedPrice, 1 or selectedName];
		
		//'Product' cell - assign 'selectedName'
        cellProduct.innerHTML = orderArray[1];

		//'Qty' cell - append the input to the cell
        cellQty.appendChild(inputQty);
		
			//'Qty' input box - assign number type
			inputQty.type = "number"; //Input type number. Code adapted and accessed April 10, 2021 from https://www.w3schools.com/tags/att_input_type_number.asp
		
			//'Qty' input box - assign min value of 1
			inputQty.min = 1; //Prevent negative values. Code adapted and accessed April 10, 2021 from https://stackoverflow.com/questions/7372067/is-there-any-way-to-prevent-input-type-number-getting-negative-values
		
			//'Qty' input box - defaulting qty ordered to 1
			inputQty.value = 1;		

		//'Price' cell - assign selectedPrice
		cellPrice.innerHTML = formatter.format(orderArray[0]);
		
		//'Total' cell - defaulting to selectedPrice
		cellTotal.innerHTML = orderArray[0];
		
		//'Delete' cell - append button to the cell
        cellDelete.appendChild(buttonDelete);
			
			//Add the text inside delete button
			buttonDelete.innerHTML = 'Delete';


		//Appending the newly generated cells/row to the table
        row.appendChild(cellProduct); //Row cell [0]
		row.appendChild(cellQty); //Row cell [1]
		row.appendChild(cellPrice); //Row cell [2]
        row.appendChild(cellTotal); //Row cell [3]
        row.appendChild(cellDelete); //Row cell [4]
		table.appendChild(row);
		
		getTotals(); //Call getTotals() function
		
     }
	

//Define getTotals() function
//How to read data from an HTML Table using JavaScript. Code accessed April 11, 2021 and adapted from  https://www.encodedna.com/javascript/how-to-read-data-from-html-table-using-javascript.htm
//Getting value from table cell in JavaScript…not jQuery. Code accessed on April 11, 2021 and adapted from  https://stackoverflow.com/questions/3072233/getting-value-from-table-cell-in-javascript-not-jquery
function getTotals() {

	//Initializing all the variables
	var total = 0;
	var qty = 0;
	var price = 0;
	var tax = 0.12; //12% tax
	var subTotal = 0;
	var taxableTotal = 0;
	var table = $('#orderTable')[0]; //Point to orderTable
	
	//How do I iterate through table rows and cells in JavaScript? Code accessed and adapted on April 9, 2021 from  https://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript
	for (var i = 1, row; row = table.rows[i];  i++) { 
	//Iterate through rows
	//Rows accessed via 'row' var assigned in for loop
		

		//Getting value of an input. Code accessed and adapted on 04.10.2021 from https://stackoverflow.com/questions/33343589/javascript-getting-the-value-of-an-input-in-a-table/33343763
		qty = row.cells[1].childNodes[0].value;
								 	
		price = row.cells[2].innerHTML; //Get value from data cell for 'price'
		
		//Change price from a string to a number so it can be used in the next calculations
		//This code replaces anything thats not a number with a space
		var priceNumber = Number(price.replace(/[^0-9\.-]+/g,"")); 
		//Code adapted and accessed on April 10, 2021 from https://jsfiddle.net/jinglesthula/hdzTy/
		
		
		//Placing the value of row total in respective total cell											   
		row.cells[3].innerHTML = formatter.format(qty * priceNumber); //Row total is qty * price
		
		subTotal += qty * priceNumber; //Computing subtotal; subtotal is running total of qty * priceNumber
   }
   
   //Computing the totals
   var totalTable = $('#totalTable')[0]; //Pointing to totalTable

   
   //Formatting and placing subtotal in respective cell
   totalTable.rows[0].cells[1].innerHTML = formatter.format(subTotal);
   
   //Computing taxable total
   taxableTotal = subTotal * tax;
   
   //Formatting and placing taxable total in respective cell
   totalTable.rows[1].cells[1].innerHTML = formatter.format(taxableTotal); 
   
   //Computing grand total
   grandTotal = subTotal + taxableTotal;
   
   //Formatting and placing grand total in respective cell
   totalTable.rows[2].cells[1].innerHTML = formatter.format(grandTotal);
}


//Get value of order pickup date
function getOrderDate(){
	//Prop date value. Code adapted and accessed April 12, 2021 from https://www.w3schools.com/jsref/prop_date_value.asp
	orderDateDisplay = $('#orderDate')[0].value;
}

//Get value of order pickup time
function getOrderTime(){
	orderTime = $('#orderTime')[0].value;
}


/* Get personal information */
 
//Get value of first name
function getFname(){
	fname = $('#fname')[0].value;
}


//Get value of phone number
function getPhone(){
	phone = $('#phone')[0].value;
}


//Define confirmOrder function, which is called when the 'Confirm Order' button is clicked
//Pops up a confirmation window displaying order details and information entered
function confirmOrder(){
confirm('Your grand total is: ' + formatter.format(grandTotal) + 
		'\n\nYour pickup time is: ['  + orderDateDisplay + '] at [' + orderTime + ']' +
		'\n\nYour information is: ' + fname +
		'\nYour contact number is: ' + phone +
		'\n\nPlease pay at time of pickup.' +
		'\nThank you for choosing Lobster Bae!');
}


/* Add event listeners to listen for change in the following: */

//Listen for change in ddlOrderBy, which prompts getOrderInfo() function
$('#ddlOrderBy')[0].addEventListener('change', getOrderInfo);
	 
//Listen for change in orderTable, which prompts getTotals() function
$('#orderTable')[0].addEventListener('change', getTotals);

//Listen for change in orderDate, which prompts getOrderDate() function
$('#orderDate')[0].addEventListener('change', getOrderDate);

//Listen for change in orderTime ddl, which prompts getOrderTime() function
$('#orderTime')[0].addEventListener('change', getOrderTime);

//Listen for change in first name, which prompts getInfo() function
$('#fname')[0].addEventListener('change', getFname);


//Listen for change in phone, which prompts getInfo() function
$('#phone')[0].addEventListener('change', getPhone);

