            	// google map
                var Latitude = 42.840394,Longitude = -71.285219;
    		    var myLatlng = new google.maps.LatLng(Latitude,Longitude);
    			var myOptions = {
    				zoom: 14,
    				center: myLatlng,
    				disableDefaultUI: true,
    				panControl: true,
    				zoomControl: true,
    				zoomControlOptions: {
    					style: google.maps.ZoomControlStyle.DEFAULT
    				},

    				mapTypeControl: true,
    				mapTypeControlOptions: {
    					style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
    				},
    				streetViewControl: true,
    				mapTypeId: google.maps.MapTypeId.ROADMAP
    				}
    			var map = new google.maps.Map(document.getElementById("map"), myOptions);
    			var marker = new google.maps.Marker({
    				position: myLatlng,
    				map: map
    			});
                
