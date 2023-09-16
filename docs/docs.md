## Dev server

```
bun --hot run src/server.ts

--hot  Enable auto reload in bun's JavaScript runtime
--watch Automatically restart bun's JavaScript runtime on file change
```

## Bundle crm

```
bun build ./src/crm.ts --outdir ../../public
bun --watch build ./src/crm.ts --outdir ../../public
```

## Tailwindcss

```
bunx tailwindcss -c ./front/tailwind.config.cjs -i front/styles.css -o public/output.css --watch
```
