function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();

  if (!longUrl) {
    document.getElementById("result").innerText = "Please enter a URL";
    return;
  }

  fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "url=" + encodeURIComponent(longUrl)
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.result_url;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Error shortening URL";
    });
}