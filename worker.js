export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);

    // subscriptions must always be fresh (no CDN / client cache)
    newResponse.headers.set(
      "cache-control", "no-store, no-cache, must-revalidate, max-age=0");
    newResponse.headers.set("pragma", "no-cache");

    // correct MIME for subscription files
    if (url.pathname.toLowerCase().endsWith(".txt")) {
      newResponse.headers.set("content-type", "text/plain; charset=utf-8");
    }
    return newResponse;
  }
};
