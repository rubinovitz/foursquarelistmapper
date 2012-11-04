
/* A collection of every city with venues */
var CitiesCollection = Backbone.Collection.extend({
	closest : null,

	initialize: function(){
		this.bind("change", function() { this.fetchSuccess();})
	},

	// compare/sort models based on distance from user
	comparator: function(model) {
		var R = 6371; // km
        var d = Math.acos(Math.sin(model.lat)*Math.sin(userLat) + 
                Math.cos(model.lat)*Math.cos(userLat) *
            Math.cos(model.lng-userLng)) * R;
        return d;
	
	},

	fetch: function(){
		this.each(function(city){
			city.fetch();
		});

		
		// callback?


	},


	plot: function(){
		var v = new VenuesView();

	},

	parseListItems: function(){

	},

	createVenueModels: function(){
	},

	fetchSuccess: function(){
		// get 0th city and make models for it, add to collection, then give that collection a view
		var closestCity = this.at(0);

		//app.renderView(closestCity);

		
	}
});

/* A collection of the venue models of the closest city */
var VenuesCollection = ({});
