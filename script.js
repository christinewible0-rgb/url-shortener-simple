function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();
  const result = document.getElementById("result");

  if (!longUrl) {
    result.innerText = "Please enter a URL";
    return;
  }

  // Simple working demo shortener (no API issues)
  const shortCode = Math.random().toString(36).substring(2, 8);
  const shortUrl = "https://short.ly/" + shortCode;

  result.innerHTML = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}