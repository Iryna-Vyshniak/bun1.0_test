import { test, expect } from 'bun:test';

console.log('Hello via Bun!');

const server = Bun.serve({
  port: 3007,
  fetch(request, server) {
    return new Response('Hello via Bun!');
  },
});

console.log(`Listening on ${server.port}`);

const file = Bun.file('package.json');

await file.text(); // string
await file.arrayBuffer(); // ArrayBuffer
await file.json(); // {...}

test('2 + 2', () => {
  expect(2 + 2).toBe(4);
});
