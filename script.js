function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();

  if (!longUrl) {
    document.getElementById("result").innerText = "Please enter a URL";
    return;
  }

  fetch("https://api.shrtco.de/v2/shorten?url=" + encodeURIComponent(longUrl))
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        document.getElementById("result").innerText = data.result.full_short_link;
      } else {
        document.getElementById("result").innerText = "Failed to shorten URL";
      }
    })
    .catch(err => {
      console.log(err);
      document.getElementById("result").innerText = "Network error (CORS or blocked request)";
    });
}