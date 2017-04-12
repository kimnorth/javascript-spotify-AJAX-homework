window.onload = function () {
    var url = 'https://api.spotify.com/v1/search?q=cats&type=album';
    makeRequest(url, function () {
        if (this.status !== 200) return;
        var jsonString = this.responseText;
        var results = JSON.parse(jsonString);
        populateResults(results)

      });
  }  

var makeRequest = function (url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
}

var populateResults = function(results){
  console.log(results);
}