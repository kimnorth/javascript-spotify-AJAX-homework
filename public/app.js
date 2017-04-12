window.onload = function () {
    
    var searchResults = new SearchResults('https://api.spotify.com/v1/search?q=cats&type=album')
    searchResults.getData();
    console.log("After:")
    console.log(searchResults.resultsArray)
    // populateResults(searchResults.resultsArray[0]);
}

var populateResults = function(results){

  var albumDiv = document.querySelector('#albums')
  var text = "";

  console.log(results)

  results.albums.items.forEach(function(album){
    text += album.name + " "
  })
  albumDiv.innerText = text;
}