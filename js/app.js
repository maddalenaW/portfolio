
$(document).ready(function() {

// Animate those spirographs
        var x = 1;
        setTimeout(anim, 1000);
        var interval = setInterval(anim, 5100);

        $("#animation, #wind-notice").transition({ opacity: 1 }, 3000);

        function anim() {
            spiRotationFactor = 5 * 100 * Math.sin(x);
            console.log(spiRotationFactor);
            $(".spiro1").transition({rotate: spiRotationFactor +'deg'}, 5000, 'cubic-bezier(0.435, 0.005, 0.505, 1.000)');
            $(".spiro2").transition({rotate: spiRotationFactor / 2 +'deg'}, 5000, 'cubic-bezier(0.435, 0.005, 0.505, 1.000)');
            $(".spiro3").transition({rotate: spiRotationFactor / 4 +'deg'}, 5000, 'cubic-bezier(0.435, 0.005, 0.505, 1.000)');
            x++;
        }

        $("body").on("tap", function(e) {
            $('body').toggleClass('reddish whitish');           
        })

    /* $(document).on("dataLanding", function( event ){

        // To be removed
        //console.log(event.userData);
        //console.log("City : " + event.userData['weatherData']['name']);
        //console.log("Weather force : " + event.userData['weatherData']['wind']['speed'] + " meter per second");

        // Set the wind notice
        // $("#wind-notice").append("<p>Right now wind force in " + event.userData['weatherData']['name'] + " is " + Math.round(event.userData['weatherData']['wind']['speed'] * (18/5) * 100) / 100 + " km/h</p>");

		$(".city-switch").click(function(e) {
			var randomIP = 
				randomIntFromInterval(0,255) + "." +
				randomIntFromInterval(0,255) + "." +
				randomIntFromInterval(0,255) + "." +
				randomIntFromInterval(0,255);
				
				$("#animation, #wind-notice").transition({ opacity: 0 }, 1000, function() {
					clearInterval(interval);
					console.log(randomIP);	
					getUserData(randomIP);
				});
		})
			
		

        var windForce = (event.userData['weatherData']['wind']['speed']);
        if(undefined == windForce) windForce = 2;

        // Animate those spirographs
        var x = 1;
        setTimeout(anim, 1000);
        var interval = setInterval(anim, 5100);
        function anim() {
            spiRotationFactor = windForce * 100 * Math.sin(x);
            console.log(spiRotationFactor);
            $(".spiro1").transition({rotate: spiRotationFactor +'deg'}, 5000, 'cubic-bezier(0.435, 0.005, 0.505, 1.000)');
            $(".spiro2").transition({rotate: spiRotationFactor / 2 +'deg'}, 5000, 'cubic-bezier(0.435, 0.005, 0.505, 1.000)');
            $(".spiro3").transition({rotate: spiRotationFactor / 4 +'deg'}, 5000, 'cubic-bezier(0.435, 0.005, 0.505, 1.000)');
            x++;
        }

        // And erect them!
		//pleaseCenterMeBaby("#animation");
        $("#animation, #wind-notice").transition({ opacity: 1 }, 3000);
        
    });

    function getUserData(userIP) {

        // Get location data from userIP (freegeoip.net) then use it as a parameter to
        // get geolocalized weather data (openweathermap.org).

        $.ajax({
            type: "GET",
            url: "http://www.telize.com/geoip"
        })
        .done(function( userData ) {
            console.log(userData);
            $.ajax({
                type: "GET",
                url: 'http://api.openweathermap.org/data/2.5/weather?id="524901"&APPID="b27bf740151b3a5c4489be248a8b325a"&lat=' + userData['latitude'] + "&lon=" + userData['longitude']
            })
            .done(function( weatherData ) {
                userData['weatherData'] = weatherData;

                $(document).trigger({ 
                    type: "dataLanding",
                    userData: userData
                });
            });
        });
    }
		
	/*function pleaseCenterMeBaby(element) {
		var h = parseInt($(".spiro1", element).css("height"));
		var w = parseInt($(".spiro1", element).css("width"));
		$(element).css("height", h);
		$(element).css("width", w); 
	 } */
		
	function randomIntFromInterval( min, max )
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
})