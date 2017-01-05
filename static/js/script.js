function findLinks(msg) {
  var startPosition = msg.indexof("http");
  if (startPosition !== -1) {
    var endPosition
  }
}

function inputTweets(data) {
    var output = '';
    $.each(data.statuses, function(key, val) {
        output += '<div class="content">';
        output += '<div class="tweet-header">';
        output += '<a class="tweet-img" href="https://twitter.com/' + val.user.screen_name + '"><img src="' + val.user.profile_image_url + '">' + '</a>';
        output += '<a class="tweet-name" href="https://twitter.com/' + val.user.screen_name + '">' + val.user.name + '</a>';
        output += '<a class="tweet-screen-name href="https://twitter.com//' + val.user.screen_name + '">@' + val.user.screen_name + '</a>';
        var time = val.created_at.substring(4,11) + ' ' + val.created_at.substring(26);
        output += '<span class="tweet-time">' + time + '</span></div>';
        output += '<div class="tweet-text">';
        output += '<p>' + val.text + '</p></div>';
        output += '<div class="tweet-footer">' + '</div>';
        console.log(val.retweet_count);
        output += '<i class="fa fa-retweet" aria-hidden="true"></i><span class="retweet">' + val.retweet_count + '</span>';
        output += '<i class="fa fa-heart" aria-hidden="true"></i><span class="favorite">' + val.favorite_count + '</span>';
        output += '</div>';
    });
    $("#results").html(output);
}


var defaultValue = "Enter what you're searching for";

$("#searchField").focus(function() {
    if (this.value === defaultValue) {
        this.value = "";
    }
    });

$("#searchField").blur(function() {
    if (this.value.length == 0) {
        this.value = defaultValue;
    }
    });

$("#searchField").keypress(function(e) {
  if (e.which === 13) {
    var query = $("#searchField").val();
    console.log(query);

    $.ajax({
      url: "/search",
      type: "get",
      data: {q: query},
      success: inputTweets
    });
  }
 });
