# Stencil addTransformTagName repro

This is a repro case for https://github.com/ionic-team/stencil/issues/2847

Run

```sh
lerna bootstrap
```

```sh
npm install
```

and then 

```sh
lerna run build
```

then check out `packages/importing-package/main.ts`. You should see a type
error for the usage of `defineCustomElements`.