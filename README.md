
#config-ouicar


[https://www.npmjs.com/settings/ouicar/packages]

---

This package provides OuiCar project with the following:

- prettier
- eslint
  
## Installation and usage

  
### Prettier

```console
> npm install -D @ouicar/prettier`
```

Edit `.prettierrc.js`

```js
module.exports  = {
	...require("@ouicar/prettier")
}
```

### Eslint

```console
> npm install -D @ouicar/eslint`
```

Edit `.eslintrc.js`

```js
module.exports = {
	...require("@ouicar/eslint")
}
```

## Publishing

At the root of the **config-ouicar** project, edit `.npmrc`

```
registry=https://registry.npmjs.org/
email=saas@ouicar.fr
```

then
```console
> npm adduser
```

**user**: ouicar
**password**: ask :)

```console
> cd prettier
> npm publish --access public
```
