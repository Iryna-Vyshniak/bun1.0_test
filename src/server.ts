const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(`
          <html>
            <head>
              <script defer src="/assets/crm.js"></script>
            </head>
            <body>
              <h1>Hello via Bun!</h1>
            </body>
          </html>
        `, {
        headers: {
          "Content-Type": "text/html",
        },
      })
    }
    if (url.pathname === "/assets/crm.js") { return new Response(Bun.file('./public/crm.js')); }
    return new Response("Page not found", { status: 404 })
  },
});

console.log(`Listening on http://localhost:${server.port}`);



