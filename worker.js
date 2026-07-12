export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
   
    const newResponse = new Response(response.body, response);
    
    newResponse.headers.set("content-type", "text/plain; charset=utf-8");
    
    return newResponse;
  }
};
