function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();

  if (!longUrl) {
    document.getElementById("result").innerText = "Please enter a URL";
    return;
  }

  fetch("https://is.gd/create.php?format=json&url=" + encodeURIComponent(longUrl))
    .then(res => res.json())
    .then(data => {
      if (data.shorturl) {
        document.getElementById("result").innerText = data.shorturl;
      } else {
        document.getElementById("result").innerText = "Failed to shorten URL";
      }
    })
    .catch(() => {
      document.getElementById("result").innerText = "Network error";
    });
}