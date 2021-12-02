const el = document.getElementById("getNewDogButton").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json.message);
        let results = "";
        results += "<h2>Your dog:</h2>";
        results += "<img class=\"dog-pic\" src=\"" + json.message + "\"/>";
        document.getElementById("dogResults").innerHTML = results;
      });
  });