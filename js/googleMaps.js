
//Code copied and adapted from Google Maps Platform, Maps JavaScript API:
//https://developers.google.com/maps/documentation/javascript/overview#Inline
//https://developers.google.com/maps/documentation/javascript/examples/marker-simple#all
//Accessed on April 20, 2021


//Define function initMap that creates a map with a set marker 
function initMap() {
	
	//Constant myLatLng is declared and assigned latitude and longitude values
	//Since this is a hypothetical situation, I artbitrarily chose
	//latitude and longitude coordinates of Calgary City Hall
	//to show how the Google Maps API functions on a website
	const myLatLng = { lat: 51.04656391088788, lng: -114.05732968465448 };
	
	//Constant map is declared and creates a new instance of a Google map
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 16, //Higher zoom levels is more zoomed in and more detail
		center: myLatLng, //Center states what will be in center of our map //Here, we want our constant defined earlier, myLatLng
		
	});

	//Creating a new instance of a red marker
	new google.maps.Marker({
		
		//Set position of our marker to myLatLng coordinates on our map
		position: myLatLng,
		map,
		title: "Google Maps", //Our title
	});
}
