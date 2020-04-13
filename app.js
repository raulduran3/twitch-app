$(function() {
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "noobs2ninjas"];
  var placeHolder = "https://i1.wp.com/www.eleganciadospuntocero.com/wp-content/uploads/2013/03/Huevo-twitter-avatar.jpg";

   function channelBroBeansDog(channel) {
     $.ajax({

       url: 'https://wind-bow.gomix.me/twitch-api/streams/' + channel,
       dataType: 'jsonp',
       success: function(data) {
         if (data.stream != null) {
           if (data.stream.channel.logo === null) {
             $(".broMaggedon").append("<a class='onlineChannels'" + "href='https://www.twitch.tv/" + data.stream.channel.name + "' " + "target='_blank'><p><img id='logo' src=" + "" + placeHolder + "'" + ">" + "<strong id='channel_name'>" + data.stream.channel.display_name + "</strong" + "<br>" + "<strong>" + data.stream.game + ": " + "</strong>" + data.stream.channel.status +  "</p></a>");
             $(".broMaggedon p").css("backgroundColor", "#85144b");
           } else {
             $(".broMaggedon").append("<a class='onlineChannels'" + "href='https://www.twitch.tv/" + data.stream.channel.name + "' " + "target='_blank'><p><img id='logo' src=" + "'" + data.stream.channel.logo + "'" + ">" + "<strong id='channel_name'>" + data.stream.channel.display_name + "</strong>" + "<br>" + "<strong>" + data.stream.game + ": " + "</strong>" + data.stream.channel.status + "</p></a>");
						$(".broMaggedon p").css("backgroundColor", "rgba(41, 128, 185,1.0)");
           }

         } else if (data.status === 422) {
           $(".broMaggedon").append("<a class='offlineChannels'" + "href='https://www.twitch.tv/" + channel + "' target='_blank'><p><img id='logo' src='" + placeHolder + "'><strong id='channel_name'>" + channel + "</strong><br><i class='offline'>Account closed<i></p></a>");
				} else {
					channelBroBeans(channel);
				}

         }

       });

     }

  function channelBroBeans(channel){
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/channels/' + channel,
      dataType: 'jsonp',
      success: function(data){
        $(".broMaggedon").append("<a class='offlineChannels'" + "href='https://www.twitch.tv/" + data.name + "' " + "target='_blank'><p><img id='logo' src=" + "'" + data.logo + "'" + ">" + "<strong id='channel_name'>" + data.display_name + "</strong><br>Offline</p></a>");
      }
    });
  }

  $(".switch-field input").on("change", function(){
    if ( $(this).val() === "online" ) {
			$(".offlineChannels").addClass("hidden");
			$(".onlineChannels").removeClass("hidden");
		} else if ( $(this).val() === "offline" ) {
			$(".onlineChannels").addClass("hidden");
			$(".offlineChannels").removeClass("hidden");
		} else {
			$(".onlineChannels").removeClass("hidden");
			$(".offlineChannels").removeClass("hidden");
		}

  });

  for (var i = 0; i < channels.length; i++) {
    channelBroBeansDog(channels[i]);
  }


});
  
