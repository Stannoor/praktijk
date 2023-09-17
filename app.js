$(document).ready(function () {
    $("#getMessage").on("click", function () {
      $.getJSON(
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
        function (json) {
          var quote = json.quoteText;
          var author = json.quoteAuthor;
          $("#quoteText").html(quote);
          if (author === "") {
            $("#author").html(" - " + "Anonymous");
          } else $("#author").html(" - " + author);
        }
      );
    });
  });