A reproduction repo of an issue I am having with Remix and vanilla-extract in an Nx monorepo. When vanilla-extract uses vite to process \*.css.ts files, it cannot accept an `resolve.alias` config for use in Vite to resolve imports from a shared monorepo package.

## Local Dev

- The example Remix app can be spun up using `npm run example-app:dev`
- The code patch is not active in the repo. If you want to run with the patch, rename `patches.off` to `patches`.