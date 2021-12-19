# hello-commitlint
> It's time to style commit msg.

## Reason

A good coding style-guide takes your project further.


## Install
```
pnpm add -D husky @commitlint/{config-conventional,cli}

pnpm husky add .husky/commit-msg 'pnpm commitlint --edit $1'
```

## Thanks

[commitlint](https://github.com/conventional-changelog/commitlint)

[standard-version](https://github.com/conventional-changelog/standard-version)