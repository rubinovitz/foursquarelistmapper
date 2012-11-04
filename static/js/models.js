/* a model for each citie's venues */
var CityVenues = Backbone.Model.extend({
	cityId: null,
	lat:null,
	lng:null,
	url: "null",

	initialize: function(){
	},

	parse: function(response){
		console.log(response);
 		var location = response.response.list.listItems.items[0].venue.location;
		console.log(location.lat);
		this.listItems = response.response.list.listItems;
		this.set({lng: location.lng, lat:location.lat, listItems:this.listItems});
		console.log(this.get('listItems'));
		app.fetchSuccess();
		// do something on success
	}

});
var Venue = Backbone.Model.extend({
    
});
