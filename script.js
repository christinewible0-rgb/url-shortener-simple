function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();

  if (!longUrl) {
    document.getElementById("result").innerText = "Please enter a URL";
    return;
  }

  fetch("https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl))
    .then(res => res.text())
    .then(shortUrl => {
      document.getElementById("result").innerText = shortUrl;
    })
    .catch(err => {
      console.log(err);
      document.getElementById("result").innerText = "Network error";
    });
}