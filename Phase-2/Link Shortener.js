function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    if (isValidUrl(longUrl)) {
        const shortUrl = generateShortUrl();
        document.getElementById('shortUrl').textContent = shortUrl;
        document.getElementById('shortUrl').href = longUrl;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Invalid URL. Please enter a valid URL.');
    }
}

function isValidUrl(url) {
    // A basic URL validation check
    const pattern = /^(http|https):\/\/\w+/;
    return pattern.test(url);
}

function generateShortUrl() {
    // Generate a unique short URL using a random string
    const randomString = Math.random().toString(36).substr(2, 6);
    let urls = `http://short.ly/${randomString}`;
    console.log(urls)
    return urls;
}

function copyShortUrl() {
    const shortUrl = document.getElementById('shortUrl');
    const textArea = document.createElement('textarea');
    textArea.value = shortUrl.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Shortened URL copied to clipboard.');
}
