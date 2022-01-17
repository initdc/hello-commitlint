# [hello-commitlint](https://github.com/initdc/hello-commitlint)

> It's time to style commit msg.

## Reason

A good coding style-guide takes your project further.

## Use template

```sh
# replace proj
git clone https://github.com/initdc/commitlint-template.git proj

cd proj && rm -rf .git && git init

pnpm init
```

## Install

```sh
pnpm add -D husky @commitlint/{config-conventional,cli,prompt-cli} standard-version conventional-github-releaser

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

pnpm husky install

pnpm husky add .husky/commit-msg 'pnpm commitlint --edit $1'
```

## Pre-defined scripts

```json
"scripts": {
    "commit": "commit",
    "fmt:c": "prettier -c .",
    "fmt:w": "prettier -w .",
    "rel": "standard-version --help",
    "rel:d": "standard-version --dry-run",
    "rel:d:as": "standard-version --dry-run --release-as",
    "rel:d:m": "standard-version --dry-run --release-as major",
    "rel:d:n": "standard-version --dry-run --release-as minor",
    "rel:d:p": "standard-version --dry-run --release-as patch",
    "rel:v": "standard-version",
    "rel:v:as": "standard-version --release-as",
    "rel:v:m": "standard-version --release-as major",
    "rel:v:n": "standard-version --release-as minor",
    "rel:v:p": "standard-version --release-as patch",
    "pub:g": "conventional-github-releaser -v",
    "pub:n": "npm publish",
    "postinstall": "pnpm husky install"
  },
```

## Thanks

[commitlint](https://github.com/conventional-changelog/commitlint)

[standard-version](https://github.com/conventional-changelog/standard-version)
