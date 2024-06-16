//JavaScript code for embedding Instagram post into website on home page
//Disclaimer: lobster.bae instagram embed is used with permission of owner

//oEmbed tutorial by Facebook: https://developers.facebook.com/docs/instagram/oembed accessed April 22, 2021
//Facebook for Developers: https://developers.facebook.com/apps/256481019512020/settings/advanced/ accessed April 22, 2021
//Code adapted from https://dev.to/ljcdev/embedding-an-instagram-post-in-your-website-3666 accessed on April 23, 2021
//Code for embed library js file copied from https://www.instagram.com/static/bundles/metro/EmbedSDK.js/33cd2c5d5d59.js?fbclid=IwAR3asja2rHbvcnjCUehbSFMHng39Vyrrky12upuxrjNnt1J9_qoD5IG7gWk accessed on April 23, 2021


/* Declaring/initializing global variables */

var POST_URL = "https://www.instagram.com/p/CN2za7TAXP3" //URL of the post we want to show

//Use Facebook for Developers to create an app and generate the app ID and client token
var APP_ID = "256481019512020"
var CLIENT_TOKEN= "6821fe4d196e2d9430955c9676400649"

//Using querySelector to look in the document and find an object with the class "post", assign this to var "post"
var post = document.querySelector(".post")




//The Fetch API is used to get resources across a network 
//Fetch() is asynchronous function as it will take some time for the promise or response to arrive
//Async and await are used to run asynchronous code
//Async is a keyword used before declaring a function to make the function return a promise
//Here we put async in front of getPost() function
//Resource: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API accessed on April 23, 2021
//Resource: https://www.w3schools.com/js/js_async.asp accessed on April 22, 2021
async function getPost() {
	
	//Async and await are used in tandem so we need to add an "await" keyword whenever we use an "async"
	//Await is a keyword placed in front of a function to make the function wait for a promise
	//Here we add "await" in front of the fetch() function
	//Fetch() returns a promise that keyword "await" is waiting for, then puts this into the variable "response"
	var response = await fetch(
	
		//This is the argument being passed into fetch() function:
		//oEmbed URL +
		//The URL of our post +
		//omitscript=true is to load the embed.js library separately; script won't run if you add it dynamically so we need to omit it
		//+ App ID | Client Token
		"https://graph.facebook.com/v8.0/instagram_oembed?url=" + 
		POST_URL + "&omitscript=true&access_token=" + APP_ID + "|" + 
		CLIENT_TOKEN)
	
	//The fetch() returns a JSON object that needs to be parsed to JavaScript object before we can continue
	//We use json() function to parse the response from JSON object to JS object
	//This function is also asynchronous so "await" keyword is added before the function
	//The response as a JS object is stored in the variable data
	var data = await response.json()
	
	//In data, we want the information stored under "html" 
	//Here we take the information stored in the html property of data and save it in a variable called myPostHtml
	var myPostHtml = data.html
  
	//This finds the div container with class "post" that we found earlier using querySelector
	//We are adding the information saved in myPostHtml inside the div container "post"
	post.innerHTML = myPostHtml
	
	//This is the load method to initialize the embed
	instgrm.Embeds.process()
}


