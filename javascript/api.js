function fetchLatestPosts() {
    fetch('/blog/posts/HotViewLabs')
        .then(response => response.json())
        .then(data => {
            // Process data and populate carousel and grid
        })
        .catch(error => console.error('Error fetching latest posts:', error));
}
