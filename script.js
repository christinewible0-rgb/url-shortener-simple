function shortenURL() {
  const longUrl = document.getElementById("urlInput").value.trim();

  if (!longUrl) {
    document.getElementById("result").innerText = "Please enter a URL";
    return;
  }

  fetch("https://is.gd/create.php?format=json&url=" + encodeURIComponent(longUrl))
    .then(async (res) => {
      const text = await res.text();   // first read raw response
      console.log("RAW RESPONSE:", text);
      return JSON.parse(text);         // then parse manually
    })
    .then(data => {
      if (data.shorturl) {
        document.getElementById("result").innerText = data.shorturl;
      } else {
        document.getElementById("result").innerText = "Failed to shorten URL";
      }
    })
    .catch(err => {
      console.log(err);
      document.getElementById("result").innerText = "Network or parsing error";
    });
}