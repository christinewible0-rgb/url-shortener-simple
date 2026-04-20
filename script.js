function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();

  if (!longUrl) {
    document.getElementById("result").innerText = "Please enter a URL";
    return;
  }

  // Fake shortener (works instantly, no API issues)
  const fakeShort =
    "https://short.ly/" + Math.random().toString(36).substring(2, 8);

  document.getElementById("result").innerText = fakeShort;
}