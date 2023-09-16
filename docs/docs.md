## Dev server

```
bun --hot run src/server.ts

--hot  Enable auto reload in bun's JavaScript runtime
--watch Automatically restart bun's JavaScript runtime on file change
```

## Bundle crm

```
bun build ./crm.ts --outdir ../../public
bun --watch build ./crm.ts --outdir ../../public
```
