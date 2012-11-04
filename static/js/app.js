var userLat = 132;
var userLng = 13;

// controller
var app = {

	init: function() {
		console.log('init');
		/* hacky list setup until we have backend oauth */
		var phillyId = "13679564";
		var brooklynId = "13679564";
		var NYCId ="13679564";

		oauthToken ="2RDA1VKIMZOHBE3UVDYR1L5OMVETSM2RN42OAZGQFE5V3LMQ&v=20120627";
		var cityId = null;
		this.venuesList = new CitiesCollection();
		var phillyVenues = new CityVenues({});
		var brooklynVenues = new CityVenues({});
		var NYCVenues = new CityVenues({});
		brooklynVenues.url = "https://api.foursquare.com/v2/lists/"+brooklynId+"/tips?oauth_token="+oauthToken;
		phillyVenues.url = "https://api.foursquare.com/v2/lists/"+phillyId+"/tips?oauth_token="+oauthToken;
		NYCVenues.url = "https://api.foursquare.com/v2/lists/"+NYCId+"/tips?oauth_token="+oauthToken;
		brooklynVenues.cityId = "brooklyn";
		phillyVenues.cityId = "Philly";
		NYCVenues.cityId = "NYC";


		//this.venuesList.add(brooklynVenues);
	//	this.venuesList.add(phillyVenues);
	//	this.venuesList.add(NYCVenues);
	//	this.venuesList.fetch(success: function(){ this.fetchSuccess();});
	console.log('kk');
	brooklynVenues.fetch({
		success:function(response,model){
			console.log('success');
			new VenuesView({model:model});
		}
	});
	phillyVenues.fetch({
		success:function(response,model){
			console.log('success');
			new VenuesView({model:model});
		}
	});;
	NYCVenues.fetch({
		success:function(response,model){
			console.log('success');
			new VenuesView({model:model});
		}
	});
	},

	fetchSuccess: function () {
		this.venuesList.fetchSuccess();
	},

	renderView: function(model) {
		new VenuesView({model:model});
	}

}

app.init();

