# pluck-util [![Build Status](https://travis-ci.com/jonkemp/pluck-util.svg?branch=master)](https://travis-ci.com/jonkemp/pluck-util)

> Extract a list of property values from a collection.

A convenient version of what is perhaps the most common use-case for map. 

Inspired by `_.pluck`. 😄


## Install

Install with [npm](https://npmjs.org/package/pluck-util)

```
$ npm install pluck-util
```

Or [unpkg](https://unpkg.com/pluck-util/)

```
<script src="https://unpkg.com/pluck-util@1.0.1/umd/index.js" />
```

Check out the unit tests on [CodePen](https://codepen.io/jonkemp/full/KKpzYzz).

## Usage

```js
const pluck = require('pluck-util');

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

pluck(stooges, 'name');
//=> ['moe', 'larry', 'curly']

pluck(stooges, 'age');
//=> [40, 50, 60]
```

---
| **Like us a lot?** Help others know why you like us! **Review this package on [pkgreview.dev](https://pkgreview.dev/npm/pluck-util)** | ➡   | [![Review us on pkgreview.dev](https://i.ibb.co/McjVMfb/pkgreview-dev.jpg)](https://pkgreview.dev/npm/pluck-util) |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------- |

## API

### pluck(collection, propertyName)

#### collection

Type: `array`  
Default: `none`

The array to iterate over.

#### propertyName

Type: `string`  
Default: `none`

The property name to extract.

## License

MIT
