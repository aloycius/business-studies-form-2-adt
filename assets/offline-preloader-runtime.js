// offline-preloader.js — auto-generated, do not edit by hand
(function () {
  var INLINE = window.__ADT_INLINE;
  delete window.__ADT_INLINE;
  var BASE_DIR = (function () {
    var href = location.href.split("?")[0].split("#")[0];
    return href.slice(0, href.lastIndexOf("/") + 1);
  })();
  function lookup(url) {
    var clean = String(url).split("?")[0].split("#")[0];
    if (BASE_DIR && clean.indexOf(BASE_DIR) === 0) clean = clean.slice(BASE_DIR.length);
    if (clean.indexOf("./") === 0) clean = clean.slice(2);
    var withDot = "./" + clean;
    if (Object.prototype.hasOwnProperty.call(INLINE, withDot)) return withDot;
    if (Object.prototype.hasOwnProperty.call(INLINE, clean)) return clean;
    return null;
  }
  var _realFetch = window.fetch.bind(window);
  window.fetch = function (url, opts) {
    // Normalize Request objects to their URL string.
    var raw = (url && typeof url === "object" && typeof url.url === "string") ? url.url : url;
    var key = lookup(raw);
    // Only serve embedded resources for file:// books. On HTTP(S), always use
    // the current files from the server so a stale preloader cannot mask an
    // updated translation, media manifest, or page.
    if (location.protocol === "file:" && key !== null) {
      var data = INLINE[key];
      var isJson = key.slice(-5) === ".json";
      var body = isJson ? JSON.stringify(data) : data;
      var ct = isJson ? "application/json" : "text/html; charset=utf-8";
      return Promise.resolve(
        new Response(body, { status: 200, headers: { "Content-Type": ct } })
      );
    }
    return _realFetch(url, opts);
  };
  if (location.protocol === 'file:') {
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1 && node.tagName === 'LINK' && node.rel === 'manifest') {
            node.parentNode.removeChild(node);
          }
        });
      });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
