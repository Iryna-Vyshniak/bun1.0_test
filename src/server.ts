const server = Bun.serve({
  port: 3007,
  fetch(request, server) {
    return new Response(
      `
    <html>
    <head></head>
    <body>
    <h1>Hello via Bun!</h1>
    </body>
    </html>
    `,
      { headers: { 'Content-Type': 'text/html' } }
    );
  },
});

console.log(`Listening on ${server.port}`);
