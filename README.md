# hello-commitlint
> It's time to style commit msg.

## Reason

A good coding style-guide takes your project further.


## Install
```
pnpm add -D husky @commitlint/{config-conventional,cli,prompt-cli} standard-version conventional-github-releaser

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

pnpm husky add .husky/commit-msg 'pnpm commitlint --edit $1'
```

## Pre-defined scripts

```
"scripts": {
    "commit": "commit",
    "release": "standard-version --help",
    "rel:dr": "standard-version --dry-run",
    "rel:version": "standard-version",
    "pub:github": "conventional-github-releaser -v",
    "pub:npm": "npm publish",
    "postinstall": "pnpm husky install"
  },
```

## Thanks

[commitlint](https://github.com/conventional-changelog/commitlint)

[standard-version](https://github.com/conventional-changelog/standard-version)