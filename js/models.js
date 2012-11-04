/* a model for each city's venues */
var CityVenues = Backbone.Model.extend({
	cityId: null,
	lat:null,
	lng:null,
	url: "null",

	initialize: function(){
	},

	parse: function(response){
 		var location = response.response.list.listItems.items[0].venue.location;
		this.listItems = response.response.list.listItems;
		this.set({lng: location.lng, lat:location.lat, listItems:this.listItems});
	}

});
var Venue = Backbone.Model.extend({
    
});
