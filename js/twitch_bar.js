// http://codepen.io/svinkle/pen/qIyAE
(function() {

  var user_name, api_key, twitch_widget_status;
  
  user_name = "hackandpaint";
  api_key = "5j0r5b7qb7kro03fvka3o8kbq262wwm";
  twitch_widget_container = $(".twitch-widget-container");
  twitch_widget_title =  $("#twitch-widget-title")
  twitch_widget_status = $("#twitch-widget-status");
  twitch_widget_status_dot = $("#twitch-widget-status-dot");
  twitch_widget_status_viewers = $("#twitch-widget-status-viewers");
  twitch_widget_views = $("#twitch-widget-views");
  twitch_widget_followers = $("#twitch-widget-followers");

  twitch_widget_status.attr("href", "http://twitch.tv/" + user_name);

var state = {};
state.stream_active = false;

var twitch_load_streams = function () {
  console.log('streams');
  $.getJSON('https://api.twitch.tv/kraken/streams/' + user_name + '?client_id=' + api_key + '&callback=?', function(data) {
      if (data.stream) {
          // Play sound only for first time
          if (!state.stream_active) {
            setTimeout(function () {audio_notify_start.play();}, 1500);
          }
          state.stream_active = true;

          // FOR TESTING ONLY
          data.stream = {};
          data.stream.game = "Twisted Metal 4";
          data.stream.viewers = 5;

          twitch_widget_status.html("We are Live! - ▶ Now Playing: \"" + data.stream.game + "\"");
          twitch_widget_status.removeClass('dimmed');
          if (data.stream.viewers >= 5) {
            twitch_widget_status_viewers.html("<span class='viewers'>" + data.stream.viewers + " viewers</span>");
          }
          else {
            twitch_widget_status_viewers.html("");
          }
          twitch_widget_status_dot.addClass('online');
          twitch_widget_status_dot.removeClass('offline');
          twitch_widget_container.removeClass('collapsed');
          twitch_widget_container.addClass('blink_orange');
      } else {
          // Play sound only for first time
          if (state.stream_active) {
            setTimeout(function () {audio_notify_end.play();}, 1500);
          }
          state.stream_active = false;

          twitch_widget_status.addClass('dimmed');
          twitch_widget_status.html("currently offline - view archived streams");
          twitch_widget_status_dot.addClass('offline');
          twitch_widget_status_dot.removeClass('online');
          twitch_widget_container.addClass('collapsed');
          twitch_widget_container.removeClass('blink_orange');
      }
  });
};

var twitch_load_channels = function () {
    console.log('channels');
  $.getJSON('https://api.twitch.tv/kraken/channels/' + user_name + '?client_id=' + api_key + '&callback=?', function(data) {
      twitch_widget_title.html("<a href='"+data.url+"' target='_blank'>"+data.display_name+" Live</a>");
      twitch_widget_views.html(data.views);
      twitch_widget_followers.html(data.followers);
  });
};


setInterval(twitch_load_streams, 20000);
setInterval(twitch_load_channels, 120000);
twitch_load_streams();
twitch_load_channels();
})();
