const cacheName = self.location.pathname
const pages = [

  "/portfolio/",
  "/",
  "/categories/",
  "/tags/",
  "/book.min.6970156cec683193d93c9c4edaf0d56574e4361df2e0c1be4f697ae81c3ba55f.css",
  "/en.search-data.min.e87256d3efa71b1a97a49cd314ee61464a15be76894460e28e6b597d499411a8.json",
  "/en.search.min.c73da130c83c41f3bb005805ed8ea969c58b20df2a6b5eeda7e59ba78d1f796f.js",
  
];

self.addEventListener("install", function (event) {
  self.skipWaiting();

  caches.open(cacheName).then((cache) => {
    return cache.addAll(pages);
  });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  /**
   * @param {Response} response
   * @returns {Promise<Response>}
   */
  function saveToCache(response) {
    if (cacheable(response)) {
      return caches
        .open(cacheName)
        .then((cache) => cache.put(request, response.clone()))
        .then(() => response);
    } else {
      return response;
    }
  }

  /**
   * @param {Error} error
   */
  function serveFromCache(error) {
    return caches.open(cacheName).then((cache) => cache.match(request.url));
  }

  /**
   * @param {Response} response
   * @returns {Boolean}
   */
  function cacheable(response) {
    return response.type === "basic" && response.ok && !response.headers.has("Content-Disposition")
  }

  event.respondWith(fetch(request).then(saveToCache).catch(serveFromCache));
});
