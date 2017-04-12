var SearchResults = function(url){
  this.url = url;
  this.resultsArray = [];
}

SearchResults.prototype = {

  getData: function () {
      var request = new XMLHttpRequest();
      request.open('GET', this.url);

      request.onload = function(){
        if (request.status !== 200) return;
        var jsonString = request.responseText;
        var results = JSON.parse(jsonString);
        this.resultsArray[0] = results;
        console.log("Before:");
        console.log(this.resultsArray);

      }.bind(this)

      request.send();
    }

}