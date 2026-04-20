function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();

  if (!longUrl) {
    document.getElementById("result").innerText = "Please enter a URL";
    return;
  }

  fetch("https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl))
    .then(res => res.text())
    .then(shortUrl => {
      document.getElementById("result").innerHTML =
        `<a href="${shortUrl}" target="_blank" rel="noopener noreferrer">
          ${shortUrl}
        </a>`;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Error generating link";
    });
}