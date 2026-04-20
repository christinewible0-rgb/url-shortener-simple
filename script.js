function shortenURL() {
  const longUrl = document.getElementById("urlInput").value;

  fetch("https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl))
    .then(function(response) {
      return response.text();
    })
    .then(function(shortUrl) {
      document.getElementById("result").innerText = shortUrl;
    })
    .catch(function() {
      document.getElementById("result").innerText = "Something went wrong";
    });
}