
var VenuesView = Backbone.View.extend({
	el: '#venues-view',
    mapEl: null,
    listEl: null,

	initialize : function() {
		try{
		// Define the map to use from MapBox
    // This is the TileJSON endpoint copied from the embed button on your map
    var lat = this.model['listItems']['items'][0]['venue']['location']['lat'];
    var lng = this.model['listItems']['items'][0]['venue']['location']['lng'];
    var url = 'http://a.tiles.mapbox.com/v3/skillshare.map-zb9ml3ed.jsonp';

    // Make a new Leaflet map in your container div
    var map = new L.Map('map')  // container's id="mapbox"

    // Center the map on one of the points
    .setView(new L.LatLng(lat, lng), 13);

    // Get metadata about the map from MapBox
    wax.tilejson(url, function(tilejson) {
        map.addLayer(new wax.leaf.connector(tilejson));
    });

    var marker = new L.Marker(L.LatLng(lat,lng));
    map.addLayer(marker);
}
catch(err){}
  },
 
  render : function() {
   
  }
});


    



