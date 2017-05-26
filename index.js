var apiUrl = "https://api.linkedin.com/v1/people/~";
//put the correct method where the underscore is:
$.get(apiUrl, function(data) {
    $('body').html("<h1>It works!</h1>");
});
