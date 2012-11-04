
var VenuesView = Backbone.View.extend({
	el: '#venues-view',
    listItems: null,

	initialize : function() {
            this.listItems = this.model['listItems']['items'];
            this.lat = this.listItems[0]['venue']['location']['lat'];
            this.lng = this.listItems[0]['venue']['location']['lng'];
            this.render();

    },
        define: function (path) {
         if (path) {
            return path;
         }
         else {
            return '';
         }
    },

    render : function() {
        var url = 'http://a.tiles.mapbox.com/v3/skillshare.map-zb9ml3ed.jsonp';
                // Make a new Leaflet map in your container div
                map = new L.Map('map')  // container's id="mapbox"
                // Center the map on one of the points
                .setView(new L.LatLng(this.lat, this.lng), 13);
                // Get metadata about the map from MapBox
                wax.tilejson(url, function(tilejson) {
                    map.addLayer(new wax.leaf.connector(tilejson));
                });
            var numberOfVen = this.listItems.length;
            var i = 0;

            for (i=0; i < numberOfVen; i=i+1) {
                var venue = this.listItems[i]['venue'];
                var venueTitle = venue['name']
                var venueCategory = this.define(venue['categories']['shortName']);
                var venueStreetAddress= this.define(venue['location']['address']);
                var venueCity= this.define(venue['location']['city']);
                var venueState= this.define(venue['location']['state']);
                var venueZipcode= this.define(venue['location']['postalCode']);
                var venuePhone = this.define(venue['contact']['formmatedPhone']);
                var venueTwitter = this.define(venue['contact']['twitter']);
                console.log(venueTwitter);
                var template = _.template( $("#listing-template").html(), {
                    venue_title: venueTitle, 
                    venue_category: venueCategory, 
                    venue_street_address: venueStreetAddress,
                    venue_phone: venuePhone,
                    venue_twitter: venueTwitter,
                    venue_state: venueState,
                    venue_zipcode: venueZipcode,
                    venue_city: venueCity
                });

                // Load the compiled HTML into the Backbone "el"
                $('#content-view').append( template );
                var latLng = new L.LatLng(venue['location']['lat'],venue['location']['lng']);
                var marker = new L.Marker(latLng);
                map.addLayer(marker);
           }
    }
});