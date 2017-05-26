var apiUrl = "https://api.linkedin.com/v1/people/~";
//This is a simple jQuery API GET call. 
$.get(apiUrl, function(data) {
    $('body').html("<h1>It works!</h1>");
});
