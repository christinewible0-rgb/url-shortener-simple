async function shortenURL() {
  const url = document.getElementById("urlInput").value;
  const result = document.getElementById("result");

  if (!url) {
    result.innerHTML = "Please enter a URL";
    return;
  }

  try {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );

    const shortUrl = await response.text();

    result.innerHTML = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
  } catch (err) {
    result.innerHTML = "Error occurred";
  }
}